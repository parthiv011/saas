import { NextRequest, NextResponse } from 'next/server';
import { getEventCategories } from '../__internals/get-event-catergories';

type Category = {
  uniqueFieldCount: number;
  eventsCount: number;
  lastPing: Date | null;
  id: string;
  name: string;
  color: string;
  emoji: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type CategoryResponse = {
  categories: Category[];
};

export async function GET(req: NextRequest) {
  try {
    const response = await getEventCategories(req);
    const json = await response.json();
    if ('categories' in json) {
      const { categories }: CategoryResponse = json;
      return NextResponse.json({ categories });
    } else {
      return NextResponse.json(
        { error: 'Invalid response structure' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Error syncing with the database' },
      { status: 500 }
    );
  }
}
