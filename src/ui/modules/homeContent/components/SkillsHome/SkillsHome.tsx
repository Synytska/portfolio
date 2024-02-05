import { Divider } from '@/src/ui/components/Divider';
import { MonoText } from '@/src/ui/components/MonoText';
import { SvgSkills } from './SvgSkills';
import { VLine } from '@/src/ui/components/VLine';

import { SKILLS_LIST, ABOUT_INFO } from '../../constants/homeitems';

export const SkillsHome = () => (
    <>
        <Divider />
        <div className="grid auto-cols-[1fr] gap-y-8 grid-cols-[1fr] grid-rows-[auto] py-[2rem] gap-x-12 md:gap-y-12 md:grid-cols-[.25fr,_1px,_1fr] md:py-[3rem] lg:gap-16 lg:grid-cols-[.46fr,_1px,_1fr] lg:py-[4rem]">
            <MonoText>
                <h3>{ABOUT_INFO.skill}</h3>
            </MonoText>
            <VLine />
            <div className="flex-justify-M flex-row  lg:justify-evenly">
                <div className="flex-M gap-[20px] uppercase font-['Mier_A'] text-[16px]">
                    {SKILLS_LIST.map((key, skill) => (
                        <p key={key}>{SKILLS_LIST[skill]}</p>
                    ))}
                </div>
                <SvgSkills />
            </div>
        </div>
        <Divider />
    </>
);

