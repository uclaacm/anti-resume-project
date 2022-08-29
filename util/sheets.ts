import * as dotenv from 'dotenv';
import { google } from 'googleapis';
import { Resume } from './types';

dotenv.config();
const SHEETS_API_KEY = process.env.SHEETS_API_KEY;
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

async function getPeople(): Promise<Resume[]> {
  return new Promise((resolve, reject) => {
    const sheets = google.sheets('v4');

    // Get roles from google sheets
    sheets.spreadsheets.values.get(
      {
        spreadsheetId: SPREADSHEET_ID,
        range: 'Form Responses 1!A2:F',
        key: SHEETS_API_KEY,
      },
      (err, res) => {
        if (err) {
          reject(err);
        }
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
        resolve(output);
      },
    );
  });
}

export default getPeople;
