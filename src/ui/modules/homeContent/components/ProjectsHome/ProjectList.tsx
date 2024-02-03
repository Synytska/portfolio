import Link from "next/link"

import {Divider} from "@/src/ui/components/Divider";
import {MonoText} from "@/src/ui/components/MonoText";
import { ImageProjectPanel } from "./ImageProjectPanel";

import { PROJ_IMAGE_SRCS } from "../../constants/homeitems"
import { PROJ_MAIN_IMAGE } from "@/src/ui/constants/mainconstants";
import { TARGET_BLANK } from "@/src/ui/constants/mainconstants";

const TextClass = {div: "flex-justify-M items-center", p: "text-[24px]"};

export const ProjectsList = () => {
    return (
        <>
            <div>
                <Link
                    href={PROJ_MAIN_IMAGE.href}
                    target={TARGET_BLANK}
                >
                    <ImageProjectPanel
                        src={PROJ_MAIN_IMAGE.src}
                        alt={PROJ_MAIN_IMAGE.alt}
                    />
                    <div className={TextClass.div}>
                        <p className={TextClass.p}>{PROJ_MAIN_IMAGE.text}</p>
                        <MonoText><p>{PROJ_MAIN_IMAGE.title}</p></MonoText>
                    </div>

                </Link>
                <div className="hidden lg:block"><Divider /></div>
            </div>
            <div className="grid auto-cols-[1fr] grid-cols-[1fr] gap-[2rem] ml-[0] md:grid-cols-[1fr,_1fr] lg:gap-[3rem] lg:grid-rows-[auto,_auto] lg:ml-[-3rem]">
            {PROJ_IMAGE_SRCS.map((item, key) => (
                <div className="pl-0 lg:border-l lg:border-blackM lg:pl-[3rem] lg:odd:border-l-0 odd:pr-0">
                    <Link href={item.href} target={TARGET_BLANK} key={key}>

                        <ImageProjectPanel
                            src={item.src}
                            alt={item.alt} />

                        <div className={TextClass.div}>
                            <p className={TextClass.p}>{item.text}</p>
                            <MonoText><p>{item.title}</p></MonoText>
                        </div>
                    </Link>
                </div>
            ))

            }
            </div>
        </>
    )
}