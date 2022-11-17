import * as dotenv from 'dotenv';
import { google } from 'googleapis';
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
    range: `${year}!A2:F`,
  });
  const output = [];
  const rows = res?.data.values ?? [];
  for (const row of rows) {
    output.push({
      user: row[1],
      year: row[3],
      dateModified: row[0],
      toInforms: row[2].split('\n') ?? null,
      iHave: row[5].split('\n') ?? null,
      image: row[4],
    });
  }

  return output;
}

export default getPeople;