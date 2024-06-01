"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import $ from "jquery";
import Tilt from "react-parallax-tilt";

const FeaturedProjects = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#side");
      var box = $("#hotels-title");

      var offsetTop = -wrapper.offset().top + $(window).scrollTop() + 90;
      var offsetBottom =
        wrapper.offset().top -
        $(window).scrollTop() +
        wrapper.outerHeight() -
        box.outerHeight() -
        90;

      if (offsetBottom > 0 && offsetTop < 0) {
        box.css({
          top: 0,
        });
      } else if (offsetBottom > 0 && offsetTop > 0) {
        box.css({
          top: offsetTop + "px",
        });
      } else {
        box.offset({
          top: $(window).scrollTop() + offsetBottom,
        });
      }
    };

    $(window).on("scroll", handleScroll);

    handleScroll();

    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex-container" style={{ position: "relative" }}>
      <div id="side" className="flex-item-left">
        <h1 className="left-text" id="hotels-title">
          Featured Projects
        </h1>
      </div>
      <div className="flex-item-right" style={{ position: "relative" }}>
        <div id="hotels">
          <div
            className="flex-container width-full"
            style={{ display: "none" }}
          >
            <div className="project-left">
              <Tilt
                className="project-left-pic"
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
            <div className="project-right">
              <div className="project-right-content">
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0}
                  gyroscope={true}
                  transitionSpeed={300}
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                >
                  <h1>1412 Offices Floors</h1>
                </Tilt>
                <br />
                <h5>Luxury Showrooms</h5>
                <h4>
                  AAPC was entrusted with the responsibility of creating an
                  office space that goes beyond mere elegance, excelling in both
                  aesthetic appeal and functionality...
                </h4>
              </div>
            </div>
          </div>
          <div
            className="flex-container width-full reverse"
            onClick={() => {
              router.push("/projects/Gotham_Hall");
            }}
            style={{ marginTop: "5%" }}
          >
            <div className="project-left">
              <div className="project-left-content">
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0}
                  gyroscope={true}
                  transitionSpeed={300}
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                >
                  <h1>Gotham Hall</h1>
                </Tilt>
                <br />
                <h5>Hospitality</h5>
                <h4>
                  1356 Broadway stands as a building unlike any other, steeped
                  in multiple layers of history. As a protected landmark, AAPC
                  embraced the responsibility of restoring its interior,
                  meticulously ensuring alignment with the building&apos;s rich
                  history...
                </h4>
              </div>
            </div>
            <div className="project-right">
              <Tilt
                className="project-right-pic"
                style={{
                  background: "url('/project/content/gotham/1.JPEG')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
          </div>
          <div
            className="flex-container width-full"
            onClick={() => {
              router.push("/projects/4428_55th_Ave");
            }}
          >
            <div className="project-left">
              <Tilt
                className="project-left-pic"
                style={{
                  background:
                    "url('/project/content/44-28 55th ave/Render Edited.jpg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
            <div className="project-right">
              <div className="project-right-content">
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0}
                  gyroscope={true}
                  transitionSpeed={300}
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                >
                  <h1>44-28 55th Ave</h1>
                </Tilt>
                <br />
                <h5>Industrial</h5>
                <h4>
                  Our team successfully lead the extension of a manufacturing
                  facility situated at 44-28 55th Ave, Maspeth, Queens. The
                  project posed unique challenges, not only due to the rigorous
                  regulations...
                </h4>
              </div>
            </div>
          </div>
          <div
            className="flex-container width-full reverse"
            onClick={() => {
              router.push("/projects/480_7th_Ave");
            }}
          >
            <div className="project-left">
              <div className="project-left-content">
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0}
                  gyroscope={true}
                  transitionSpeed={300}
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                >
                  <h1>480 7th Ave</h1>
                </Tilt>
                <br />
                <h5>Retail</h5>
                <h4>
                  The NYC retail experience is diverse and multifaceted, and for
                  the AAPC team, the challenge at 480 7th Ave was one we
                  enthusiastically embraced. Combining multiple programs within
                  this project, which included two retail floors...
                </h4>
              </div>
            </div>
            <div className="project-right">
              <Tilt
                className="project-right-pic"
                style={{
                  background: "url('/project/content/480 7th ave/2.jpg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
          </div>
          <div
            className="flex-container width-full"
            onClick={() => {
              router.push("/projects/525_7th_Ave");
            }}
          >
            <div className="project-left">
              <Tilt
                className="project-left-pic"
                style={{
                  background: "url('/project/content/525 7th ave/2.jpg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
            <div className="project-right">
              <div className="project-right-content">
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0}
                  gyroscope={true}
                  transitionSpeed={300}
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                >
                  <h1>525 7th Ave</h1>
                </Tilt>
                <br />
                <h5>Offices</h5>
                <h4>
                  Elegance and high quality were the dual focal points guiding
                  the development of the executive offices situated at 525 7th
                  Ave. For the AAPC team, it was imperative to not only infuse a
                  sense of sophistication...
                </h4>
              </div>
            </div>
          </div>
          <div
            className="flex-container width-full reverse"
            onClick={() => {
              router.push("/projects/712_W_125th");
            }}
            style={{ display: "none" }}
          >
            <div className="project-left">
              <div className="project-left-content">
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0}
                  gyroscope={true}
                  transitionSpeed={300}
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                >
                  <h1>712 w 125th</h1>
                </Tilt>
                <br />
                <h5>Restaurant</h5>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  ut porta metus. Quisque justo ipsum, auctor id lorem ut,
                  hendrerit eleifend enim. Cras eleifend lorem sit amet odio
                  consectetur tempus.
                </h4>
              </div>
            </div>
            <div className="project-right">
              <Tilt
                className="project-right-pic"
                style={{
                  background: "url('/project/content/712w125/4.JPG')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
          </div>
          <div
            className="flex-container width-full reverse"
            onClick={() => {
              router.push("/projects/113_Franklin");
            }}
            style={{ marginBottom: "0" }}
          >
            <div className="project-left">
              <div className="project-left-content">
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0}
                  gyroscope={true}
                  transitionSpeed={300}
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                >
                  <h1>113 Franklin</h1>
                </Tilt>
                <br />
                <h5>Restaurant</h5>
                <h4>
                  The 113 Franklin project involves extensive interior
                  renovations and the meticulous process of legalizing the
                  changes through detailed sets and close collaboration with the
                  interior design team. The focus is not only on transforming
                  the physical space...
                </h4>
              </div>
            </div>
            <div className="project-right">
              <Tilt
                className="project-right-pic"
                style={{
                  background:
                    "url('/project/content/113 Franklin/IMG_6182.jpeg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
          </div>
          <div
            className="flex-container width-full"
            onClick={() => {
              router.push("/projects/113_Franklin");
            }}
            style={{ display: "none" }}
          >
            <div className="project-left">
              <Tilt
                className="project-left-pic"
                style={{
                  background:
                    "url('/project/content/113 Franklin/IMG_6182.jpeg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
            <div className="project-right">
              <div className="project-right-content">
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0}
                  gyroscope={true}
                  transitionSpeed={300}
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                >
                  <h1> 113 Franklin</h1>
                </Tilt>
                <br />
                <h5>Restaurants</h5>
                <h4>
                  The 113 Franklin project involves extensive interior
                  renovations and the meticulous process of legalizing the
                  changes through detailed sets and close collaboration with the
                  interior design team. The focus is not only on transforming
                  the physical space...
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
