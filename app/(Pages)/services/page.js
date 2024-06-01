import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import AboutButtons from "./components/about-buttons";
import Planning from "./components/planning";
import Visualization from "./components/visualization";
import ProjectManagement from "./components/project-management";
import "../../../../public/css/home.css";
import "../../../../public/css/services.css";

export const metadata = {
  title: "AAPC | Services",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Services = () => {
  return (
    <div>
      <Navbar />
      <Topper />
      <AboutButtons />
      <Planning />
      <Visualization />
      <ProjectManagement />
      <Footer />
    </div>
  );
};

export default Services;
