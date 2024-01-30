import { INFO_FOOTER } from "../constants/footerconstants";
import MonoText from "@/src/ui/repeated_components/MonoText";

const infoClass = "flex flex-col gap-[0.8rem] md:gap-[1.2rem]";


export default function FooterInfo() {
    return (
        <>
            {INFO_FOOTER.map(item => (
                <div className="flex flex-col gap-[0.8rem] md:flex-row lg:flex-col lg:gap-[1.2rem] mt-[1.5rem] md:mt-[2rem] md:gap-[10rem] lg:mt-[3rem]">
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