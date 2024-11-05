import { Heading } from '@/components/heading';
import { HeroButton } from '@/components/hero-button';
import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { Check } from 'lucide-react';

export default function Home() {
  return (
    <>
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
      <section></section>
      <section></section>
      <section></section>
    </>
  );
}
