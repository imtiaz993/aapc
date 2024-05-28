"use client";
import { useEffect } from "react";
import $ from "jquery";

const Team = () => {
  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#services-left");
      var box = $("#services-left-text");

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
    <div className="flex-container">
      <div className="flex-item-left" id="services-left">
        <h1 className="left-text" id="services-left-text">
          Our Team
        </h1>
      </div>
      <div className="flex-item-right">
        <div id="biosection" className="flex-container home-service">
          <div
            style={{
              flex: "30%",
            }}
          >
            <div className="container">
              <div className="card-stack">
                <ul className="ul-card card-list">
                  <li
                    className="li-card card"
                    style={{
                      background: "url('/img/pierre.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    data-tilt
                    data-tilt-glare
                    data-tilt-max-glare="0.1"
                  ></li>
                  <li
                    className="li-card card"
                    id="firstcard"
                    style={{
                      background: "url('/img/allen_azarkian.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    data-tilt
                    data-tilt-glare
                    data-tilt-max-glare="0.1"
                  ></li>
                </ul>
                <a className="buttons button next" onclick="toggleContent()">
                  <h1 className="bio-button">Next</h1>
                </a>
              </div>
            </div>
          </div>
          <div style={{ flex: "70%" }}>
            <h1 id="testtitle">Allen Azarkian RA, AIA</h1>
            <p id="personTitle">Principal Architect</p>
            <h6
              id="personDescription"
              className="services-subtext"
              style={{ color: "rgba(255, 255, 255, 0.65)" }}
            >
              Allen, a dynamic professional at the intersection of business and
              architecture, possesses a unique blend of academic prowess and
              practical experience, exemplified by his undergraduate degree in
              Finance and a master&apos;s in architecture.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
