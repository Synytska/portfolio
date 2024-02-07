import { ProjectsList } from './ProjectList';
import { VLine } from '@/src/ui/components/VLine';
import { MonoText } from '@/src/ui/components/MonoText';
import { Button } from '@/src/ui/components/Button';

import { ABOUT_BUTTON_TEXT } from '../../constants/homeitems';
import { FEATURED_SECT } from '@/src/ui/constants/mainconstants';

export const ProjectsHome = () => (
    <div className="flex flex-col-reverse pt-[2rem] gap-[3rem] md:gap-[2rem] md:pt-[3rem] xl:gap-[4rem] xl:grid-rows-[auto] xl:grid-cols-[1fr,_1px,_.47fr] xl:auto-cols-[1fr] xl:grid xl:pt-[4rem]">
        <div className="flex-M gap-y-[2rem] gap-x-[3rem]">
            <ProjectsList />
        </div>
        <VLine />
        <div className="w-full xl:max-w-[22rem]">
            <div className="mb-[0.5rem]">
                <h2 className="text-[3rem] lg:text-[4rem] uppercase m-0 leading-[120%]">{FEATURED_SECT}</h2>
            </div>
            <div className="mb-[1.5rem] md:mb-[2.5rem] lg:mb-[3rem]">
                <p className="text-[1.25rem] leading-[160%] font-['Mier_A'] md:text-[1.4rem]">
                    {ABOUT_BUTTON_TEXT.projectinfo.text}
                </p>
            </div>
            <MonoText>
                <Button
                    name={ABOUT_BUTTON_TEXT.projectbutt.text}
                    href={ABOUT_BUTTON_TEXT.projectbutt.href}
                    className=" bg-blackM text-whiteM hover:bg-[transparent] hover:text-blackM button-style-M block"
                />
            </MonoText>
        </div>
    </div>
);

