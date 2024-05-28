"use client";
import { useEffect } from "react";
import $ from "jquery";
import ServicesWrapper from "./ServicesWrapper";

const ProjectManagement = () => {
  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#service-text-section");
      var box = $("#project-management-title");

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
    <ServicesWrapper>
      <div
        class="flex-item-right"
        id="project-management"
        style={{ position: "relative" }}
      >
        <div
          class="flex-container service-section"
          style={{
            borderTop: "none",
            marginBottom: "0",
            paddingBottom: "0",
            width: "100%",
          }}
        >
          <div class="section-left-projects">
            <div
              class="vendor-box left-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div class="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/project-man-pic.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Architect of Record (AOR) Filing
              </h1>
              <h3
                style={{
                  margin: "auto 2vmax",
                  lineHeight: 2,
                  position: "relative",
                  paddingBottom: "2vmax",
                  zIndex: 2,
                }}
              >
                Submission of official documents by the designated Architect of
                Record to regulatory authorities, ensuring compliance with
                building regulations.
              </h3>
            </div>
            <div
              class="vendor-box left-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div class="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/project-man-pic.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Landmark Filing Sets (Interior/Exterior Renovation)
              </h1>
              <h3
                style={{
                  margin: "auto 2vmax",
                  lineHeight: 2,
                  position: "relative",
                  paddingBottom: "2vmax",
                  zIndex: 2,
                }}
              >
                Creation and submission of documentation for obtaining approval
                from authorities for renovations in designated landmarked
                structures.
              </h3>
            </div>
            <div
              class="vendor-box left-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div class="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/project-man-pic.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Construction Administration
              </h1>
              <h3
                style={{
                  margin: "auto 2vmax",
                  lineHeight: 2,
                  position: "relative",
                  paddingBottom: "2vmax",
                  zIndex: 2,
                }}
              >
                Oversight and management of the construction phase to ensure
                adherence to design specifications.
              </h3>
            </div>
          </div>
          <div class="section-right-projects">
            <div
              class="vendor-box right-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div class="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/project-man-pic.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Restorations and Fill Outs
              </h1>
              <h3
                style={{
                  margin: "auto 2vmax",
                  lineHeight: 2,
                  position: "relative",
                  paddingBottom: "2vmax",
                  zIndex: 2,
                }}
              >
                Services involving the restoration of existing structures and
                completion of vacant spaces within a building.
              </h3>
            </div>
            <div
              class="vendor-box right-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div class="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/project-man-pic.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Bidding
              </h1>
              <h3
                style={{
                  margin: "auto 2vmax",
                  lineHeight: 2,
                  position: "relative",
                  paddingBottom: "2vmax",
                  zIndex: 2,
                }}
              >
                Facilitation of the contractor proposal submission process for
                construction or renovation projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </ServicesWrapper>
  );
};

export default ProjectManagement;
