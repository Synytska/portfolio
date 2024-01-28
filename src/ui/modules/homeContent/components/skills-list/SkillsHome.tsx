import Divider from "../../../../repeated_components/divider";
import VLine from "../../../../repeated_components/vertical-line";
import Mono from "../../../../repeated_components/mono_text";
import SVG from "./SvgSkills";

const skills = ["html", "css", "js", "react", "next", "tailwind"];


export default function SkillsHome() {
    return (
        <>
            <Divider />
            <div className="grid auto-cols-[1fr] gap-y-8 grid-cols-[1fr] grid-rows-[auto] py-[2rem] gap-x-12 md:gap-y-12 md:grid-cols-[.25fr,_1px,_1fr] md:py-[3rem] lg:gap-16 lg:grid-cols-[.46fr,_1px,_1fr] lg:py-[4rem]">
                <Mono>
                    <h3>What about my skills</h3>
                </Mono>
                <VLine />
                <div className="flex flex-row justify-between lg:justify-evenly">
                    <div className="flex flex-col gap-[20px] uppercase font-['Mier_A'] text-[16px]">
                        {skills.map((key, skill) => {
                            return (
                                <p key={key}>{skills[skill]}</p>
                            )
                        })}
                    </div>
                     <SVG />
                </div>
            </div>
            <Divider />
        </>
    )
}