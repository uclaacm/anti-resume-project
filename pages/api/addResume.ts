// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resume } from '../../util/types';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT ?? '';
const TEMPLATE_SHEET_ID = 417104678;

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
    // Create sheet if it doesn't exist
    await sheets.spreadsheets.batchUpdate({
      auth: jwtClient,
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [
          {
            duplicateSheet: {
              sourceSheetId: TEMPLATE_SHEET_ID,
              insertSheetIndex: 1,
              newSheetName: `${resume.year}`,
            },
          },
        ],
      },
    });
    // Append data to spreadsheet
    await sheets.spreadsheets.values.append({
      auth: jwtClient,
      spreadsheetId: SPREADSHEET_ID,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      range: `${resume.year}!A1:M1`,
      requestBody: {
        majorDimension: 'ROWS',
        range: `${resume.year}!A1:M1`,
        values: [
          [
            '=NOW()',
            resume.name,
            resume.year,
            resume.imageLink,
            resume.rejections,
            resume.notGoodFits,
            resume.regrets,
            resume.everydayLs,
            resume.proudOf,
            resume.memories,
            resume.lifeEvents,
            resume.failures,
            resume.advice,
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
