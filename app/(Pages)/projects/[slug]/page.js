"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";
import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import Detail from "./components/detail";
import { projects } from "./data";
import "../../../../public/css/home.css";
import "../../../../public/css/project-details.css";

const ProjectDetail = () => {
  const pathname = usePathname();
  const project = projects.find(
    (project) => project.slug === pathname.split("/")[2]
  );

  console.log(project.name);

  return (
    <>
      <Head>
        <title>{project.name}</title>
        <meta name="description" content={project.about} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
        />
      </Head>
      <div>
        <Navbar />
        <Topper project={project} />
        <Detail project={project} />
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
