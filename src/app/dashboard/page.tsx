import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import prisma from '../api/db';
import { DashBoardPage } from '@/components/dashboard-page';

const Page = async () => {
  const auth = await currentUser();

  if (!auth) {
    redirect('/sign-in');
  }

  const user = await prisma.user.findUnique({
    where: {
      externalId: auth.id,
    },
  });

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <DashBoardPage title="Dashboard" cta="Dashboard Page content">
      Dashboard Page
    </DashBoardPage>
  );
};

export default Page;
