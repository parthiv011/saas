import { NextRequest, NextResponse } from 'next/server';
import prisma from '../db';
import { getAuth } from '@clerk/nextjs/server';
import { startOfMonth } from 'date-fns';

export async function getEventCategories(req: NextRequest) {
  const { userId: authId } = getAuth(req);

  if (!authId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const categories = await prisma.eventCategory.findMany({
    where: { userId: authId },
    select: {
      id: true,
      name: true,
      color: true,
      emoji: true,
      updatedAt: true,
      createdAt: true,
    },
    orderBy: { updatedAt: 'desc' },
  });

  const categoriesCount = await Promise.all(
    categories.map(async (category) => {
      const now = new Date();
      const firstDayOfMonth = startOfMonth(now);

      const [uniqueFieldCount, eventsCount, lastPing] = await Promise.all([
        prisma.event
          .findMany({
            where: {
              EventCategory: { id: category.id },
              createdAt: { gte: firstDayOfMonth },
            },
            select: { fields: true },
            distinct: ['fields'],
          })
          .then((events) => {
            const fieldNames = new Set<string>();
            events.forEach((event) => {
              Object.keys(event.fields as object).forEach((fieldName) => {
                fieldNames.add(fieldName);
              });
            });

            return fieldNames.size;
          }),
        prisma.event.count({
          where: {
            EventCategory: { id: category.id },
            createdAt: { gte: firstDayOfMonth },
          },
        }),
        prisma.event.findFirst({
          where: { EventCategory: { id: category.id } },
          select: { createdAt: true },
          orderBy: { createdAt: 'desc' },
        }),
      ]);
      return {
        ...category,
        uniqueFieldCount,
        eventsCount,
        lastPing: lastPing?.createdAt || null,
      };
    })
  );

  return NextResponse.json({ categories: categoriesCount });
}
