import ProjectsList from "./ProjectList";
import VLine from "../../../../repeated_components/vertical-line";
import Mono from "../../../../repeated_components/mono_text";
import Button from "../../../../repeated_components/button";

export default function ProjectsHome() {
    return (
        <div className="flex flex-col-reverse pt-[2rem] gap-[3rem] md:gap-[2rem] md:pt-[3rem] xl:gap-[4rem] xl:grid-rows-[auto] xl:grid-cols-[1fr,_1px,_.47fr] xl:auto-cols-[1fr] xl:grid xl:pt-[4rem]">
            <div className="flex flex-col gap-y-[2rem] gap-x-[3rem]">
                 <ProjectsList />
            </div>
            <VLine />
            <div className="w-full xl:max-w-[22rem]">
                <div className="mb-[0.5rem]">
                    <h2 className="text-[3rem] lg:text-[4rem] uppercase m-0 leading-[120%]">Featured Work</h2>
                </div>
                <div className="mb-[1.5rem] md:mb-[2.5rem] lg:mb-[3rem]">
                    <p className="text-[1.25rem] leading-[160%] font-['Mier_A'] md:text-[1.4rem]">
                        Invite you to view some of my latest work
                    </p>
                </div>
                <Mono>
                    <Button
                        name="See all work"
                        href="/projects"
                        className="py-[0.6rem] px-[1rem] text-center border border-black w-[100%] inline-block rounded-tr-[10px] rounded-bl-[10px] bg-black text-white hover:bg-transparent hover:text-black "
                    />
                </Mono>
            </div>
        </div>
    )
}