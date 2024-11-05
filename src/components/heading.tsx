import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        'font-heading text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
