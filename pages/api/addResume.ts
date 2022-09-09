// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resume } from '../../util/types';

const SHEETS_API_KEY = process.env.SHEETS_API_KEY;
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const sheets = google.sheets('v4');
  const body = req.body;
  const resume: Resume = body.resume;
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      key: SHEETS_API_KEY,
      valueInputOption: 'USER_ENTERED',
      range: `${resume.year}!A1 :F1`,
      requestBody: {
        majorDimension: 'ROWS',
        range: `${resume.year}!A1 :F1`,
        values: [
          [
            '=NOW()',
            resume.user,
            resume.toInforms,
            resume.year,
            resume.image,
            resume.iHave,
          ],
        ],
      },
    });
    res.status(200).json({
      name: 'successfully added',
    });
  } catch (e: unknown) {
    console.error(e);
    if (e instanceof Error) res.status(500).json(e);
    else res.status(500).json({ name: 'Unexpected Error' });
  }
}
// const testResume: Resume = {
//   user: 'mattchoo',
//   iHave: ['L1, L2, L3'],
//   toInforms: ['LL1', 'LL2', 'LL3'],
//   image: 'http://www.imagelink.com/',
//   year: 2022,
// };
