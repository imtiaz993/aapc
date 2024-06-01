import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import Process from "./components/process";
import About from "./components/about";
import Team from "./components/team";
import "../../../../public/css/home.css";
import "../../../../public/css/home-services.css";

export const metadata = {
  title: "AAPC | Home",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Topper />
      <Process />
      <About />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
