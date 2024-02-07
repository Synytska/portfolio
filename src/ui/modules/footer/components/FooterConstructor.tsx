import Link from 'next/link';

import { Divider } from '@/src/ui/components/Divider';
import { VLine } from '@/src/ui/components/VLine';
import { FooterInfo } from './FooterInfo';
import { FooterSocial } from './FooterSocial';
import { MadeByFooter } from '@/src/ui/components/MadeByFooter';

import { CONTACT_SECT } from '@/src/ui/constants/mainconstants';
import { BUTTON_FOOTER, LINK_TEXT } from '../constants/footerconstants';

export const FooterConstructor = () => (
    <>
        <Divider />
        <div className="py-[2rem] md:py-[3rem] lg:grid lg:gap-[4rem] lg:grid-rows-[auto] lg:grid-cols-[.43fr,_1px,_1fr] lg:auto-cols-[1fr] lg:py-[4rem]">
            <div className="w-full max-w-[22rem] mb-[0.5rem]">
                <h2 className="text-[3rem] uppercase m-0 leading-[120%] md:text-[4rem]">{CONTACT_SECT}</h2>
            </div>
            <VLine />
            <div className="lg:grid lg:gap-x-[4rem] lg:gap-y-[3rem] lg:grid-rows-[auto] lg:grid-cols-[1fr,_1px,_1fr] lg:auto-cols-[1fr]">
                <div>
                    <h3 className="text-[26px] py-[0.5rem] tracking-[1px] md:text-[32px] md:pb-[1rem]">{LINK_TEXT}</h3>
                    <Link href="/contact">
                        <h3 className="text-[18px] tracking-[1px] underline md:text-[20px] mb-[1.5rem] md:mb-[2rem] lg:mb-[3rem]">
                            {BUTTON_FOOTER}
                        </h3>
                    </Link>
                    <Divider />
                    <FooterInfo />
                    <div className="my-[1.5rem] block md:my-[2rem] lg:hidden">
                        <Divider />
                    </div>
                </div>
                <VLine />
                <FooterSocial />
            </div>
        </div>
        <Divider />
        <MadeByFooter />
    </>
);

