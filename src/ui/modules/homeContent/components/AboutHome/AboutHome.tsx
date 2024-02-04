import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/src/ui/components/Button';
import { MonoText } from '@/src/ui/components/MonoText';

import { ABOUT_INFO, ABOUT_BUTTON_TEXT, ABOUT_PHOTO } from '../../constants/homeitems';

export const AboutHome = () => (
    <div className="py-8 md:py-12 lg:py-16">
        <div className="grid auto-cols-[1fr] gap-x-[3rem] gap-y-[3rem] grid-cols-[1fr] md:grid-cols-[1fr,_1fr] md:grid-rows-[auto]">
            <div className="flex-M justify-between items-start md:justify-center">
                <h1 className="max-w-[34rem] text-[3rem] lg:text-[4rem] mx-0 mt-0 mb-[1rem] leading-[100%] capitalize">
                    {ABOUT_INFO.greet}
                </h1>
                <div className="w-full max-w-[32rem] mb-[1.5rem] md:mb-[2.5rem] lg:mb-[3rem]">
                    <p className="font-['Mier_A'] text-[1.4rem] md:text-[1.5rem] lg:text-[1.75rem] leading-[150%]">
                        {ABOUT_INFO.info}

                        <Link href={ABOUT_BUTTON_TEXT.git.href} className="underline">
                            {ABOUT_BUTTON_TEXT.git.text}
                        </Link>
                    </p>
                </div>
                <MonoText>
                    <Button
                        name={ABOUT_BUTTON_TEXT.button.text}
                        href={ABOUT_BUTTON_TEXT.button.href}
                        className="px-[1rem] py-[0.6rem] text-center border border-blackM rounded-M hover:bg-blackM hover:text-whiteM"
                    />
                </MonoText>
            </div>

            <Image
                src={ABOUT_PHOTO.src}
                alt={ABOUT_PHOTO.alt}
                width={315}
                height={315}
                className="rounded-full mx-[auto] mb-[2rem] object cover md:w-[500px]"
                unoptimized
            />
        </div>
    </div>
);

