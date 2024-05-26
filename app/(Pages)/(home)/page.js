import React from "react";
import "../../../public/css/home.css";
import "../../../public/css/home-services.css";

export const metadata = {
  title: "AAPC | Home",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Home = () => {
  return (
    <div>
      <div class="home-topper">
        <div
          class="box-1"
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.1"
        ></div>
        <div
          class="box-2"
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.1"
        ></div>
        <h1 class="topper-text">Efficiency From</h1>
        <h1 class="topper-text-2">the Inside Out</h1>
      </div>

      <div
        class="flex-container"
        style={{
          position: "relative",
        }}
      >
        <div class="flex-item-left" id=""></div>
        <div class="flex-item-right">
          <div
            class="glass-section-header"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            <h1 class="g-s-h-text">Our Process</h1>
          </div>
          <div id="stepContainer">
            <img
              loading="lazy"
              id="stepImg"
              class="step-section-img"
              src="/project/content/113 Franklin/IMG_6183.jpeg"
              alt="building"
            />
            <div
              class="glass-section-content"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
            >
              <h1 id="stepTitle" class="g-s-c-text-top">
                Feasibility
              </h1>
              <div
                style={{
                  width: "100%",
                  height: "78%",
                  overflow: "auto",
                }}
              >
                <h4 id="stepBody" class="g-s-c-text">
                  Our Team, Commences with an in-depth discussion to ascertain
                  the project's scope, objectives, and financial parameters,
                  which Involves a comprehensive assessment to gauge the
                  project's viability, taking into account zoning regulations
                  and other relevant considerations.
                </h4>
              </div>
              <button id="stepButton">Next</button>
              <button id="stepButton2">Previous</button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-container">
        <div class="flex-item-left" id="about-left">
          <h1 class="left-text" id="about-left-text">
            Who We Are
          </h1>
        </div>
        <div class="flex-item-right">
          <h1 class="section-title">
            About{" "}
            <b
              style={{
                color: "#FFDC32",
              }}
            >
              AAPC
            </b>
          </h1>
          <h3 class="about-text">
            AAPC operates in seamless collaboration with the NYC Department of
            Buildings (DOB) and other pertinent entities throughout the
            architectural process demonstrating a meticulous commitment to not
            only adhere to regulations but also navigate them with precision
            when intervening in established spaces. Our dynamic team stands out
            in addressing client challenges through innovative solutions,
            ensuring unwavering compliance with all codes and regulations
            mandated in New York City. Our pride in our craft is substantiated
            by years of experience and thorough code research, underpinning
            every decision we make.
          </h3>
          <br />
          <br />
        </div>
      </div>

      <div class="flex-container">
        <div class="flex-item-left" id="services-left">
          <h1 class="left-text" id="services-left-text">
            Our Team
          </h1>
        </div>
        <div class="flex-item-right">
          <div id="biosection" class="flex-container home-service">
            <div
              style={{
                flex: "30%",
              }}
            >
              <div class="container">
                <div class="card-stack">
                  <ul class="ul-card card-list">
                    <li
                      class="li-card card"
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
                      class="li-card card"
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
                  <a class="buttons button next" onclick="toggleContent()">
                    <h1 class="bio-button">Next</h1>
                  </a>
                </div>
              </div>
            </div>
            <div style={{ flex: "70%" }}>
              <h1 id="testtitle">Allen Azarkian RA, AIA</h1>
              <p id="personTitle">Principal Architect</p>
              <h6
                id="personDescription"
                class="services-subtext"
                style={{ color: "rgba(255, 255, 255, 0.65)" }}
              >
                Allen, a dynamic professional at the intersection of business
                and architecture, possesses a unique blend of academic prowess
                and practical experience, exemplified by his undergraduate
                degree in Finance and a master's in architecture.
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* <script>
        $(document).scroll(function () {
            var wrapper = $('#about-left');
            var box = $('#about-left-text');
    
            var offsetTop = -wrapper.offset().top + $(window).scrollTop() + 90;
            var offsetBottom = wrapper.offset().top - $(window).scrollTop() + wrapper.outerHeight() - box.outerHeight() - 90;
    
            if (offsetBottom > 0 && offsetTop < 0) {
                box.css({
                    'top': 0
                });
            } else if (offsetBottom > 0 && offsetTop > 0) {
                box.css({
                    'top': offsetTop + 'px'
                });
            } else {
                box.offset({
                    'top': $(window).scrollTop() + offsetBottom
                });
            }
    
        });
    </script>
    <script>
        $(document).scroll(function () {
            var wrapper = $('#services-left');
            var box = $('#services-left-text');
    
            var offsetTop = -wrapper.offset().top + $(window).scrollTop() + 90;
            var offsetBottom = wrapper.offset().top - $(window).scrollTop() + wrapper.outerHeight() - box.outerHeight() - 90;
    
            if (offsetBottom > 0 && offsetTop < 0) {
                box.css({
                    'top': 0
                });
            } else if (offsetBottom > 0 && offsetTop > 0) {
                box.css({
                    'top': offsetTop + 'px'
                });
            } else {
                box.offset({
                    'top': $(window).scrollTop() + offsetBottom
                });
            }
    
        });
    </script>
    
    <script>
        $(document).scroll(function () {
            var wrapper = $('#projects-left');
            var box = $('#projects-left-text');
    
            var offsetTop = -wrapper.offset().top + $(window).scrollTop() + 90;
            var offsetBottom = wrapper.offset().top - $(window).scrollTop() + wrapper.outerHeight() - box.outerHeight() - 90;
    
            if (offsetBottom > 0 && offsetTop < 0) {
                box.css({
                    'top': 0
                });
            } else if (offsetBottom > 0 && offsetTop > 0) {
                box.css({
                    'top': offsetTop + 'px'
                });
            } else {
                box.offset({
                    'top': $(window).scrollTop() + offsetBottom
                });
            }
    
        });
    </script>
    
*/}
    </div>
  );
};

export default Home;
