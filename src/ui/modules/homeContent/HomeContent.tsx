import Footer from "../../repeated_components/footer";
import HomeAbout from "./components/AboutHome";
import Projects from "./components/projects-list/ProjectsHome";
import Skills from "./components/skills-list/SkillsHome";

export default function HomeContent(){
return(
  <>
   <HomeAbout />
   <Skills />
   <Projects />
   <Footer/>
   </>
)
}