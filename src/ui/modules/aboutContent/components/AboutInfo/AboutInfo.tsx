import Link from 'next/link';

import { PARAGRAPH_ONE, PARAGRAPH_TWO, PARAGRAPH_THREE, CV_INFO } from '../../constants/aboutitems';
import { ABOUT_SECT } from '@/src/ui/constants/mainconstants';

export const AboutInfo = () => (
    <>
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
    </>
);

