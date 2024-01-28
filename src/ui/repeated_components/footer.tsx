import Divider from "./divider";
import VLine from "./vertical-line";
import Link from "next/link"
import Mono from "./mono_text";

const infoClass = "flex flex-col gap-[0.8rem] md:gap-[1.2rem]";
const socialClass = "flex flex-col gap-[1rem] md:flex-row lg:flex-col md:gap-[4rem]";
const classH3="text-[18px] lg:text-[20px] underline";

export default function Footer() {
    return (
    <div className="pt-[2rem] md:pt-[3rem] lg:pt-[4rem]">
        <Divider/>
        <div className="py-[2rem] md:py-[3rem] lg:grid lg:gap-[4rem] lg:grid-rows-[auto] lg:grid-cols-[.43fr,_1px,_1fr] lg:auto-cols-[1fr] lg:py-[4rem]">
            <div className="w-full max-w-[22rem] mb-[0.5rem]">
                <h2 className="text-[3rem] uppercase m-0 leading-[120%] md:text-[4rem]">Contact</h2>
            </div>
            <VLine/>

            <div className="lg:grid lg:gap-x-[4rem] lg:gap-y-[3rem] lg:grid-rows-[auto] lg:grid-cols-[1fr,_1px,_1fr] lg:auto-cols-[1fr]">
                <div>
                    <h3 className="text-[26px] py-[0.5rem] tracking-[1px] md:text-[32px] md:pb-[1rem]">Let's work together!</h3>
                    <Link href="/contact">
                        <h3 className="text-[18px] tracking-[1px] underline md:text-[20px] mb-[1.5rem] md:mb-[2rem] lg:mb-[3rem]">Get started</h3>
                    </Link>
                    <Divider/>
                    <div className="flex flex-col gap-[0.8rem] md:flex-row lg:flex-col lg:gap-[1.2rem] mt-[1.5rem] md:mt-[2rem] md:gap-[10rem] lg:mt-[3rem]">
                        <div className={infoClass}>
                            <Mono>
                                <p>Khrystyna Synytska</p>
                            </Mono>
                            <Mono>
                                <p>ireland, dublin</p>
                            </Mono>
                        </div>

                        <div className={infoClass}>
                            <Mono>
                                <p>+353892579197</p>
                            </Mono>
                            <Mono>
                                <p>pankiv38@gmail.com</p>
                            </Mono>
                        </div>
                    </div>
                    <div className="my-[1.5rem] block md:my-[2rem] lg:hidden">
                    <Divider/>
                    </div>
                </div>
                <VLine/>
                <div className="flex flex-row gap-[5rem] lg:flex-col lg:gap-[4rem] lg:mt-[2rem]">
                    <div className={socialClass}>
                        <Link href="https://github.com/Synytska" target="_blank">
                            <Mono>
                                <h3 className={classH3}>github</h3>
                            </Mono>
                        </Link>

                        <Link href="https://wa.me/0892579197" target="_blank">
                            <Mono>
                                <h3 className={classH3}>whatsapp</h3>
                            </Mono>
                        </Link>
                    </div> 

                    <div className={socialClass}>
                        <Link href="https://t.me/@syny4kaaa" target="_blank">
                            <Mono>
                                <h3 className={classH3}>telegram</h3>
                            </Mono>
                        </Link>

                        <Link href="/" target="_blank">
                            <Mono>
                                <h3 className={classH3}>Gmail</h3>
                            </Mono>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Divider/>
            <div className="pt-[3rem] pb-[4rem]">
                <Mono>
                    <p>©&nbsp;Made by Khrystyna Synytska</p>
                </Mono>
            </div>
    </div>
    )
}