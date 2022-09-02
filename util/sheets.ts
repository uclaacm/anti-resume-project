import * as dotenv from 'dotenv';
import { google } from 'googleapis';
import { Resume } from './types';

dotenv.config();
const SHEETS_API_KEY = process.env.SHEETS_API_KEY;
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

async function getPeople(year: number): Promise<Resume[]> {
  const sheets = google.sheets('v4');

    // Get roles from google sheets
    const res = await sheets.spreadsheets.values.get(
      {
        spreadsheetId: SPREADSHEET_ID,
        range: `${year}!A2:F`,
        key: SHEETS_API_KEY,
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
