import { MonoText } from '@/src/ui/components/MonoText';

import { INFO_CONTACT } from '@/src/ui/constants/mainconstants';

const infoClass = 'flex-M gap8-M md:gap1_2-M';

export const FooterInfo = () => (
    <>
        <div className="flex-M gap8-M lg:flex-col lg:gap1_2-M mt-[1.5rem] md:mt-[2rem] lg:mt-[3rem] lg:gap-[0.8rem]">
            {INFO_CONTACT.map((info) => (
                <div key={info} className={infoClass}>
                    <MonoText>
                        <p>{info}</p>
                    </MonoText>
                </div>
            ))}
        </div>
    </>
);

