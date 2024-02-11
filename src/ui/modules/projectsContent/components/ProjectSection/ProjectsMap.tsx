import { Button } from '@/src/ui/components/Button';
import { MonoText } from '@/src/ui/components/MonoText';
import { ImageProjectPanel } from '../../../homeContent/components/ProjectsHome/ImageProjectPanel';

import { PROJ_BUTTON } from '../../constants/projectsinfo';
import { PROJ_REST_IMAGE } from '@/src/ui/constants/mainconstants';

export const ProjectsMap = () => (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        {PROJ_REST_IMAGE.map((item, key) => (
            <div key={key} className="border-t pt-8 md:pt-12 lg:pt-16">
                <div className="grid auto-cols-fr grid-rows-[auto] grid-cols-1 gap-6 md:gap-8 lg:gap-16 lg:grid-cols-[.46fr,_1fr]">
                    <div className="grid grid-cols-1 justify-items-start gap-8 grid-rows-[auto] auto-cols-1 lg:flex lg:justify-around lg:flex-col lg:items-start">
                        <div>
                            <h2 className="mb-5 md:mb-6 lg:mb-8 h2-wrap-M text-[2rem] lg:text-5xl uppercase">
                                {item.text}
                            </h2>
                            <MonoText>
                                <div className="flex flex-col gap-4">
                                    <p>{item.titles[0]}</p>
                                    <p>{item.titles[1]}</p>
                                    <p>{item.titles[2]}</p>
                                </div>
                            </MonoText>
                        </div>
                        <Button name={PROJ_BUTTON} href={item.href} />
                    </div>
                    <div>
                        <ImageProjectPanel
                            src={item.src}
                            alt={item.alt}
                            className="h-[21vh] max-h-[660px] rounded-proj-M md:hidden block "
                        />
                    </div>
                </div>
            </div>
        ))}
    </div>
);

