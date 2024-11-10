import { NextRequest, NextResponse } from 'next/server';
import { getEventCategories } from '../__internals/get-event-catergories';

export async function GET(req: NextRequest) {
  try {
    const response = await getEventCategories(req);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error syncing with the database' },
      { status: 500 }
    );
  }
}
