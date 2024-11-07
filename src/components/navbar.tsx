import Link from 'next/link';
import { MaxWidthWrapper } from './max-width-wrapper';
import { SignOutButton } from '@clerk/nextjs';
import { Button, buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { currentUser } from '@clerk/nextjs/server';

export const Navbar = async () => {
  const user = await currentUser();

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-16 w-full border-b border-gray-200 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="z-40 flex font-semibold text-white">
            Astitva<span className="text-indigo-700">Notify</span>
          </Link>

          <div className="flex h-full items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button size="sm" variant="secondary">
                    Sign out
                  </Button>
                </SignOutButton>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: 'sm',
                    className: 'flex items-center gap-1',
                  })}
                >
                  Dashboard
                  <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'secondary',
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'secondary',
                  })}
                >
                  Sign In
                </Link>

                <div className="h-8 w-px bg-gray-200" />

                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: 'sm',
                    className: 'flex items-center gap-1.5',
                  })}
                >
                  Sign Up <ArrowRight className="size-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
