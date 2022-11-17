// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resume } from '../../util/types';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT ?? '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
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

  const sheets = google.sheets('v4');
  const body = req.body;
  const resume: Resume = body.resume;
  try {
    // Append data to spreadsheet
    await sheets.spreadsheets.values.append({
      auth: jwtClient,
      spreadsheetId: SPREADSHEET_ID,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      range: `${resume.year}!A1:F1`,
      requestBody: {
        majorDimension: 'ROWS',
        range: `${resume.year}!A1:F1`,
        values: [
          [
            '=NOW()',
            resume.name,
            resume.rejections,
            resume.year,
            resume.imageLink,
            resume.regrets,
          ],
        ],
      },
    });
    res.status(200).json('Success');
  } catch (e: unknown) {
    console.error(e);
    if (e instanceof Error) res.status(500).json('Error: ' + e);
    else res.status(500).json('Unexpected Error');
  }
}
