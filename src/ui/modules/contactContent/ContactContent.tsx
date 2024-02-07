import { Divider } from '../../components/Divider';
import { MadeByFooter } from '../../components/MadeByFooter';
import { MonoText } from '../../components/MonoText';
import { SocialCircles } from '../../components/SocialCircles';

import { CONTACT_SECT, INFO_CONTACT } from '../../constants/mainconstants';

export const ContactContent = () => (
    <>
        <Divider />
        <div className="padding-M grid grid-cols-1 gap-16 grid-rows-[auto] auto-cols-auto lg:grid-cols-[.46fr,_1fr]">
            <div className="h2-wrap-M">
                <h2 className="h2-M">{CONTACT_SECT}</h2>
            </div>
            <div>
                <div className="flex flex-col gap-y-10 gap-x-4 pt-0 md:gap-y-14 lg:gap-y-16 lg:pt-4">
                    {INFO_CONTACT.map((item) => (
                        <div className="border-b pb-4">
                            <MonoText>
                                <p className="capitalize">{item}</p>
                            </MonoText>
                        </div>
                    ))}
                </div>
                <div className="flex items-center pt-8 gap-2">
                    <SocialCircles />
                </div>
            </div>
        </div>
        <Divider />
        <MadeByFooter />
    </>
);

