"use client";
import { useEffect } from "react";
import $ from "jquery";
import ServicesWrapper from "./ServicesWrapper";

const Visualization = () => {
  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#service-text-section");
      var box = $("#visualization-title");

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
        className="flex-item-right"
        id="visualization"
        style={{ position: "relative" }}
      >
        <div
          className="flex-container service-section"
          style={{
            borderTop: "none",
            marginBottom: "0",
            paddingBottom: "0",
            width: "100%",
          }}
        >
          <div className="section-left-projects">
            <div
              className="vendor-box left-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Existing As-Built Plans
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
                Documentation of the actual construction post-completion for
                future reference.
              </h3>
            </div>
            <div
              className="vendor-box left-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Structural Coordination
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
                Integration and coordination of structural elements within the
                architectural design.
              </h3>
            </div>
            <div
              className="vendor-box left-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Mechanical System Coordination{" "}
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
                Integration and coordination of mechanical systems (e.g., HVAC)
                within the overall design.
              </h3>
            </div>
            <div
              className="vendor-box left-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Construction Fence, Shed, Scaffold
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
                Installation and management of temporary structures during
                construction.
              </h3>
            </div>
            <div
              className="vendor-box left-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Construction Documents
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
                Comprehensive set of drawings and specifications guiding
                construction or renovation.
              </h3>
            </div>
            <div
              className="vendor-box left-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Sprinkler and Standpipe Coordination
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
                Planning and coordination of sprinkler and standpipe systems for
                fire protection.
              </h3>
            </div>
            <div
              className="vendor-box left-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Acoustical Coordination
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
                Planning and coordination of acoustical elements within the
                building design.
              </h3>
            </div>
            <div
              className="vendor-box left-service"
              style={{ marginBottom: "10%" }}
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                ADA Compliance
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
                Ensuring design and construction comply with the Americans with
                Disabilities Act standards.
              </h3>
            </div>
            <div
              className="vendor-box left-service"
              style={{ marginBottom: "10%" }}
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Vertical Transportation
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
                Planning and coordination of vertical transportation systems
                within the building.
              </h3>
            </div>
          </div>
          <div className="section-right-projects">
            <div
              className="vendor-box right-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Bidding Documents
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
                Comprehensive set of documents provided to potential bidders
                containing project specifications.
              </h3>
            </div>
            <div
              className="vendor-box right-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Plumbing Coordination
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
                Planning and coordination of plumbing systems within the
                building design.
              </h3>
            </div>
            <div
              className="vendor-box right-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Ansul System Coordination
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
                Planning and coordination of Ansul fire suppression systems
                within the building design.
              </h3>
            </div>
            <div
              className="vendor-box right-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Fire Department Applications
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
                Submission of applications to the fire department for necessary
                approvals and permits.
              </h3>
            </div>
            <div
              className="vendor-box right-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                DOB Filling / Permit Drawings sets
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
                Submission of drawings to the Department of Buildings for permit
                approval.
              </h3>
            </div>
            <div
              className="vendor-box right-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Fire Alarm System Coordination
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
                Planning and coordination of fire alarm systems for early
                detection.
              </h3>
            </div>
            <div
              className="vendor-box right-service"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Use and Occupancy Filling Sets
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
                Submission of documentation for approval of the building&apos;s
                intended use and occupancy.
              </h3>
            </div>
            <div
              className="vendor-box right-service"
              style={{ marginBottom: "10%" }}
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <div className="gold-bg"></div>
              <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              />
              <h1
                style={{
                  padding: "2vmax 2vmax 1vmax",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Refrigeration and Insulation
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
                Planning and coordination of refrigeration systems and
                insulation.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </ServicesWrapper>
  );
};

export default Visualization;
