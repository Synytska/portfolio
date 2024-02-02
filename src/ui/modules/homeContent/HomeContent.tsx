import HomeAbout from "./components/AboutHome";
import Projects from "./components/projects-list/ProjectsHome";
import Skills from "./components/skills-list/SkillsHome";

export const HomeContent = () => {
return(
  <>
   <HomeAbout />
   <Skills />
   <Projects />
   </>
)
}