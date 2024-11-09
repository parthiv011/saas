import { NextResponse } from 'next/server';
import { getDatabaseSyncStatus } from '../db/db';

export async function GET() {
  try {
    const response = await getDatabaseSyncStatus();
    // console.log(response);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error syncing with the database' },
      { status: 500 }
    );
  }
}
