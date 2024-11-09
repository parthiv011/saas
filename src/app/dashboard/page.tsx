import { currentUser } from '@clerk/nextjs/server';

const Page = async () => {
  const user = await currentUser();

  return (
    <div className="flex w-full flex-1 items-center justify-center text-white">
      Welcome {user?.firstName} {user?.lastName} !
    </div>
  );
};

export default Page;
