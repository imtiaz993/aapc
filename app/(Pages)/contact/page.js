import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import ContactSection from "./components/contact";
import Join from "./components/join";
import "../../../../public/css/contact.css";

export const metadata = {
  title: "AAPC | Blog Contact",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Topper />
      <ContactSection />
      <Join />
      <Footer />
    </div>
  );
};

export default Contact;