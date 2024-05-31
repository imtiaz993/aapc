"use client";

import { usePathname } from "next/navigation";
import { projects } from "../data";
import Tilt from "react-parallax-tilt";

const Topper = () => {
  const pathname = usePathname();
  const project = projects.find(
    (project) => project.slug === pathname.split("/")[2]
  );

  return (
    <div>
      {" "}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.1}
        gyroscope={true}
        transitionSpeed={300}
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        style={{
          position: "absolute",
          width: "45vmax",
          height: "60vmin",
          background:
            "linear-gradient(127deg, rgba(176, 156, 59, .49) 0%, rgba(125, 105, 3, 0.28) 100%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(12px)",
          marginLeft: "10%",
        }}
      ></Tilt>
      <div className="container" style={{ position: "relative" }}>
        <div className="carousel-container row">
          <h1
            className="project-title"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            {project.name}
          </h1>

          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-slide-number="0">
                <img
                  src="/project/content/gotham/1.JPEG"
                  className="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/1.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div className="carousel-item" data-slide-number="1">
                <img
                  src="/project/content/gotham/2.JPEG"
                  className="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/2.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div className="carousel-item" data-slide-number="2">
                <img
                  src="/project/content/gotham/3.JPEG"
                  className="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/3.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div className="carousel-item" data-slide-number="3">
                <img
                  src="/project/content/gotham/4.JPEG"
                  className="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/4.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div className="carousel-item" data-slide-number="4">
                <img
                  src="/project/content/gotham/5.JPEG"
                  className="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/5.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div className="carousel-item" data-slide-number="5">
                <img
                  src="/project/content/gotham/6.JPEG"
                  className="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/6.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div className="carousel-item" data-slide-number="6">
                <img
                  src="/project/content/gotham/7.JPEG"
                  className="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/7.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div className="carousel-item" data-slide-number="7">
                <img
                  src="/project/content/gotham/8.JPEG"
                  className="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/8.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div className="carousel-item" data-slide-number="8">
                <img
                  src="/project/content/gotham/9.JPEG"
                  className="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/9.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
            </div>
          </div>

          <Tilt
            className="stats"
            glareEnable={true}
            glareMaxOpacity={0.1}
            gyroscope={true}
            transitionSpeed={300}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
          >
            <h3>
              Company <br /> {project.company}
            </h3>
            <h3>
              Location <br /> {project.location}
            </h3>
            <h3>
              Typology <br /> {project.typology}
            </h3>
            <h3 style={{ borderRight: "none" }}>
              Year <br /> {project.year}
            </h3>
          </Tilt>
        </div>{" "}
        {/* /row */}
      </div>
    </div>
  );
};

export default Topper;
