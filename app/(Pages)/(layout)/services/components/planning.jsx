"use client";
import { useEffect } from "react";
import $ from "jquery";
import ServicesWrapper from "./ServicesWrapper";

const Planning = () => {
  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#service-text-section");
      var box = $("#planning-title");

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
        id="planning"
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
                src="/img/planning-pic.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Site Surveys
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
                Assessment and documentation of existing site conditions.
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
                src="/img/planning-pic.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Zoning Analysis
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
                Examination of zoning regulations to assess project feasibility
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
                src="/img/planning-pic.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Feasibility Analysis
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
                Evaluation of project viability and potential challenges.
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
                src="/img/planning-pic.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Build Code Analysis
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
                Review and analysis of building codes to ensure compliance.
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
                src="/img/planning-pic.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Space Planning
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
                Design and arrangement of spaces within a building based on
                functional requirements and user needs.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </ServicesWrapper>
  );
};

export default Planning;