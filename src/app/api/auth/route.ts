import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import prisma from '../db';

export async function GET() {
  const auth = await currentUser();

  if (!auth) {
    return NextResponse.json({ isSynced: false });
  }

  let user = await prisma.user.findFirst({
    where: { externalId: auth.id },
  });

  if (!user) {
    // sync with the database
    user = await prisma.user.create({
      data: {
        quotaLimit: 100,
        externalId: auth.id,
        email: auth.emailAddresses[0].emailAddress,
      },
    });
  }

  return NextResponse.json({ isSynced: true });
}
