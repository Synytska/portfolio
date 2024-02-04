import Link from 'next/link';

import { MonoText } from '@/src/ui/components/MonoText';

import { SOCIAL_FOOTER } from '../constants/footerconstants';

export const FooterSocial = () => (
    <div className="flex flex-row gap-[5rem] lg:flex-col lg:gap-[4rem] lg:mt-[2rem]">
        <div className="grid grid-cols-[1fr,_1fr] md:grid-cols-[1fr,_1fr,_1fr,_1fr] lg:grid-cols-[1fr] gap-[1rem] lg:gap-[4rem] w-full">
            {SOCIAL_FOOTER.map((item) => (
                <Link href={item.href} target="_blank">
                    <MonoText>
                        <h3 className="text-[18px] lg:text-[20px] underline">{item.name}</h3>
                    </MonoText>
                </Link>
            ))}
        </div>
    </div>
);

