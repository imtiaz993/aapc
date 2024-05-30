import Topper from "./components/topper";
import Detail from "./components/detail";
import "../../../../../public/css/home.css";
import "../../../../../public/css/project-details.css";

export const metadata = {
  title: "AAPC | Gotham Hall",
  description: "",
};

const ProjectDetail = () => {
  return (
    <div>
      <Topper />
      <Detail />
    </div>
  );
};

export default ProjectDetail;
