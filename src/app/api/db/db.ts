import { currentUser } from '@clerk/nextjs/server';
import prisma from '.';

export async function getDatabaseSyncStatus() {
  const auth = await currentUser();

  if (!auth) {
    return { isSynced: false };
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

  return { isSynced: true };
}
