import * as dotenv from 'dotenv';
import { google } from 'googleapis';
import { questions } from './constants';
import { Resume } from './types';

dotenv.config();
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT ?? '';

async function getPeople(year: number): Promise<Resume[]> {
  const sheets = google.sheets('v4');

  // Get JWT Token to access sheet
  const service_account = JSON.parse(SERVICE_ACCOUNT);
  const jwtClient = new google.auth.JWT(
    service_account.client_email,
    '',
    service_account.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
  );
  jwtClient.authorize(function (err) {
    if (err) {
      throw err;
    }
  });

  // Get roles from google sheets
  const res = await sheets.spreadsheets.values.get({
    auth: jwtClient,
    spreadsheetId: SPREADSHEET_ID,
    range: `${year}!A2:M`,
  });
  const output: Resume[] = [];
  const rows = res?.data.values ?? [];
  const checkUndefined = (value: any) => {
    return value === undefined ? '' : value;
  };
  for (const row of rows) {
    let dateModified = '';
    if (row[0] !== undefined) {
      dateModified = row.shift();
    }
    const resume: Resume = {
      dateModified: dateModified,
      name: checkUndefined(row[questions.NAME]),
      year: checkUndefined(row[questions.YEAR]),
      imageLink: checkUndefined(row[questions.IMAGE_LINK]),
      rejections: checkUndefined(row[questions.REJECTIONS]),
      notGoodFits: checkUndefined(row[questions.NOT_GOOD_FITS]),
      regrets: checkUndefined(row[questions.REGRETS]),
      everydayLs: checkUndefined(row[questions.EVERYDAY_LS]),
      proudOf: checkUndefined(row[questions.PROUD_OF]),
      memories: checkUndefined(row[questions.MEMORIES]),
      lifeEvents: checkUndefined(row[questions.LIFE_EVENTS]),
      failures: checkUndefined(row[questions.FAILURES]),
      advice: checkUndefined(row[questions.ADVICE]),
    };
    output.push(resume);
  }

  return output;
}

export default getPeople;
