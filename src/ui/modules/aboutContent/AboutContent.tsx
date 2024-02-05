import Link from 'next/link';

import { Divider } from '@/src/ui/components/Divider';
import { ModalWindow } from './ModalWindow';

import { ABOUT_SECT, CERTIFIC_SECT } from '../../constants/mainconstants';
import { PARAGRAPH_ONE, PARAGRAPH_TWO, PARAGRAPH_THREE, CV_INFO, PARAGRAPH_CERTIFIC } from './constants/aboutitems';

export const AboutContent = () => (
    <>
        <Divider />
        <div className="py-8 md:py-12 lg:py-16">
            <div>
                <div className="h2-wrap-M">
                    <h2 className="h2-M">{ABOUT_SECT}</h2>
                </div>
                <div className="mb-6 md:mb-10 lg:mb-12 w-full font-Mier">
                    <p className="parragraph">{PARAGRAPH_ONE}</p>
                    {PARAGRAPH_TWO.map((item, key) => (
                        <p className="parragraph" key={key}>
                            {item}
                        </p>
                    ))}
                    <p className="parragraph">
                        {PARAGRAPH_THREE}
                        <Link href={CV_INFO.href} target="_blank" className="underline">
                            {CV_INFO.text}
                        </Link>
                    </p>
                </div>
            </div>
            <Divider />
            <div className="grid grid-rows-[auto,_auto] grid-cols-1 pt-8 gap-y-2 md:pt-12 lg:pt-16">
                <div>
                    <div className="h2-wrap-M">
                        <h2 className="h2-M">{CERTIFIC_SECT}</h2>
                    </div>
                    <div className="max-w-[22rem] mb-6 w-full md:mb-10 lg:mb-12">
                        <p className="font-Mier text-xl md:text-[1.4rem] m-0">{PARAGRAPH_CERTIFIC}</p>
                    </div>
                </div>
                <ModalWindow />
            </div>
        </div>
    </>
);

