import Head from "next/head";
import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import Detail from "./components/detail";
import "../../../../public/css/home.css";
import "../../../../public/css/project-details.css";

export const metadata = {
  title: "AAPC | Gotham Hall",
  description: "",
};

const ProjectDetail = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
        />
      </Head>
      <div>
        <Navbar />
        <Topper />
        <Detail />
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
