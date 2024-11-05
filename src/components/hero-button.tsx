import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface HeroButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const HeroButton = ({
  className,
  children,
  href,
  ...props
}: HeroButtonProps) => {
  return (
    <Link
      href={href ?? '#'}
      className={cn(
        'group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md bg-indigo-700 px-8 text-base/7 font-medium text-white transition-all duration-300 focus:outline-none',
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]" />
      </span>

      <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-45 bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
    </Link>
  );
};
