import Link from "next/link"
import MonoText from "@/src/ui/repeated_components/MonoText"
import { SOCIAL_FOOTER } from "../constants/footerconstants";
import { TARGET_BLANK } from "@/src/ui/constants/mainconstants";

export default function FooterSocial() {
    return (
        <>
            <div className="flex flex-row gap-[5rem] lg:flex-col lg:gap-[4rem] lg:mt-[2rem]">
                <div className="grid grid-cols-[1fr,_1fr] md:grid-cols-[1fr,_1fr,_1fr,_1fr] lg:grid-cols-[1fr] gap-[1rem] lg:gap-[4rem]">
                    {SOCIAL_FOOTER.map(item => (
                        <Link href={item.href} target={TARGET_BLANK}>
                            <MonoText>
                                <h3 className="text-[18px] lg:text-[20px] underline">{item.name}</h3>
                            </MonoText>
                        </Link>
                    ))}
                </div>

            </div>
        </>
    )
}