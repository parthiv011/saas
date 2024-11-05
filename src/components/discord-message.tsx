import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';
import Image from 'next/image';

interface DiscordMessageProps {
  avatarSrc: string;
  avatarAlt: string;
  username: string;
  timestamp: string;
  badgeText?: string;
  badgeColor?: string;
  title: string;
  content: {
    [key: string]: string;
  };
}

type BadgeColorTypes = '#43b581' | '#faa61a' | (string & {});

const getBadgeStyles = (color: BadgeColorTypes) => {
  switch (color) {
    case '#43b581':
      return 'bg-green-500/10 text-green-400 ring-green-500/20';
    case '#faa61a':
      return 'bg-yellow-500/10 text-yellow-400 ring-yellow-500/20';
    default:
      return 'bg-gray-500/10 text-gray-400 ring-gray-500/20';
  }
};

export const DiscordMessage = ({
  avatarAlt,
  avatarSrc,
  content,
  timestamp,
  username,
  badgeColor = '#43b581',
  badgeText,
  title,
}: DiscordMessageProps) => {
  return (
    <div className="flex w-full items-start justify-start">
      <div className="mb-2 flex items-center">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={40}
          height={40}
          className="mr-3 rounded-full object-cover"
        />
      </div>

      <div className="w-full max-w-xl">
        <div className="flex items-center">
          <p className="font-semibold text-white">{username}</p>
          <span className="ml-2 rounded bg-indigo-500 px-1.5 py-0.5 text-xs font-semibold text-white">
            APP
          </span>
          <span className="ml-1.5 text-xs font-normal text-gray-400">
            {timestamp}
          </span>
        </div>

        <div className="mb-4 mt-1.5 w-full rounded bg-[#2f3136] p-3 text-sm">
          <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            {badgeText ? (
              <span
                className={cn(
                  'order-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
                  getBadgeStyles('#faa61a')
                )}
              >
                {badgeText}
              </span>
            ) : null}
            <p className="order-1 text-base/7 font-semibold text-white">
              {title}
            </p>
          </div>
          {Object.entries(content).map(([key, value]) => (
            <p className="text-sm/6 text-[#dcddde]" key={key}>
              <span className="text-[#b9bbbe]">{key}:</span>
              {value}
            </p>
          ))}

          <p className="mt-2 flex items-center text-xs text-[#72767d]">
            <Clock className="mr-1 size-3" />
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};
