import { DiscordMessage } from '@/components/discord-message';
import { DiscordUI } from '@/components/discord-ui';
import { Heading } from '@/components/heading';
import { HeroButton } from '@/components/hero-button';
import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { AnimatedList, AnimatedListItem } from '@/components/ui/animated-list';
import { Check } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <MaxWidthWrapper>
          <div className="relative mx-auto flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-time Saas Insights</span>
                <br />
                <span className="relative bg-gradient-to-r from-indigo-300 to-indigo-700 bg-clip-text text-transparent">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>

            <p className="max-w-prose text-pretty text-center text-base/7 text-gray-300">
              Astitva SaaS is the easiest way to monitor your SaaS. No more
              tedious manual checks or complicated dashboards.. Get instant
              notifications for{' '}
              <span className="font-semibold text-gray-400">
                {' '}
                sales, new users, or any other event
              </span>{' '}
              sent directly to your Discord.
            </p>
            <ul className="flex flex-col items-start space-y-2 text-pretty text-left text-base/7 text-gray-300">
              {[
                'Real-time discords alert for critical events',
                'Buy once, use forever',
                'Track sales, new users or an other events',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-1.5 text-left">
                  <Check className="size-5 shrink-0 text-indigo-300" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <HeroButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Getting started
              </HeroButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Discord preview section */}
      <section className="relative bg-black pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-indigo-700" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:m-4 lg:rounded-2xl lg:p-4">
              <DiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="Image"
                    username="Chandler Bing"
                    timestamp="Today at 12pm"
                    badgeText="Sign up"
                    badgeColor="#43b581"
                    title="💸 New User signed up"
                    content={{
                      name: 'Renegoku',
                      email: 'renegoku@demon.xyz',
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="Image"
                    username="Chandler Bing"
                    timestamp="Today at 12pm"
                    badgeText="Sign up"
                    badgeColor="#faa61a"
                    title="🔥 New User signed up"
                    content={{
                      name: 'Renegoku',
                      email: 'renegoku@demon.xyz',
                    }}
                  />
                </AnimatedList>
              </DiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      {/* Grid section */}
      <section className="relative py-24 sm:py-32">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-gray-600">
              Intuitive Monitoring
            </h2>
            <Heading>Stay Ahead with real time insights</Heading>
          </div>

          <div className="grid grid-cols-3 gap-4 lg:grid-cols-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-200/50 lg:rounded-l-[2rem]" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1)] lg:rounded-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-white">
                    Real time Notification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
    </>
  );
}
