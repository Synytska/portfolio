import { MonoText } from '@/src/ui/components/MonoText';

import { INFO_FOOTER } from '../constants/footerconstants';

const infoClass = 'flex-M gap8-M md:gap1_2-M';

export const FooterInfo = () => (
    <>
        {INFO_FOOTER.map((item) => (
            <div className="flex-M gap8-M md:flex-row lg:flex-col lg:gap1_2-M mt-[1.5rem] md:mt-[2rem] md:gap-[10rem] lg:mt-[3rem] lg:gap-[0.8rem]">
                <div className={infoClass}>
                    <MonoText>
                        <p>{item.name}</p>
                    </MonoText>
                    <MonoText>
                        <p>{item.location}</p>
                    </MonoText>
                </div>

                <div className={infoClass}>
                    <MonoText>
                        <p>{item.number}</p>
                    </MonoText>
                    <MonoText>
                        <p>{item.mail}</p>
                    </MonoText>
                </div>
            </div>
        ))}
    </>
);

