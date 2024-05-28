import Footer from "app/components/footer";
import Navbar from "app/components/navbar";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
