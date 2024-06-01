import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
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
      <Navbar />
      <Topper />
      <Detail />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
