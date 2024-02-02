import Image from "next/image"
import Link from "next/link"

import Divider from "@/src/ui/repeated_components/Divider"

import { TARGET_BLANK, ABOUT_SECT, CERTIFIC_SECT } from "../../constants/mainconstants"
import { PARAGRAPH_ONE, PARAGRAPH_TWO, PARAGRAPH_THREE, CV_INFO, PARAGRAPH_CERTIFIC, CERTIFICATES } from "./constants/aboutitems"


export const AboutContent = () => {
    return (
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
                            <p className="parragraph" key={key}>{item}</p>
                        ))}
                        <p className="parragraph">{PARAGRAPH_THREE}
                            <Link href={CV_INFO.href} target={TARGET_BLANK} className="underline">{CV_INFO.text}</Link>
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
                    <div className="flex-M gap-x-12 gap-y-8">
                        <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3 md:ml-0 lg:gap-12 lg:auto-cols-auto">
                            {CERTIFICATES.map(item => (

                                <div>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={360}
                                        height={260}
                                        className="p-[10px] rounded-proj-M h-[260px] md:h-[240px]"
                                        unoptimized
                                    />
                                    <div className="flex-justify-M">
                                        <p className="text-[24px]">{item.text}</p>
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}