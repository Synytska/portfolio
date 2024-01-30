import { INFO_FOOTER } from "../constants/footerconstants";
import MonoText from "@/src/ui/repeated_components/MonoText";

const infoClass = "flex-M gap8-M md:gap1_2-M";


export default function FooterInfo() {
    return (
        <>
            {INFO_FOOTER.map(item => (
                <div className="flex-M gap8-M md:flex-row lg:flex-col lg:gap1_2-M mt-[1.5rem] md:mt-[2rem] md:gap-[10rem] lg:mt-[3rem]">
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
    )
}