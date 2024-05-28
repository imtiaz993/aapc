import Topper from "./components/topper";
import FeaturedProjects from "./components/featured-projects";
import "../../../../public/css/home.css";
import "../../../../public/css/projects.css";

export const metadata = {
  title: "AAPC | Projects",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Projects = () => {
  return (
    <div>
      <Topper />
      <FeaturedProjects />
    </div>
  );
};

export default Projects;