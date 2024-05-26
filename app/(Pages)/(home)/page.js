import React from "react";
import Link from "next/link";

export const metadata = {
  title: "AAPC | Home",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Home = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <Link class="navbar-brand d-md-none" href="/">
            <img loading="lazy" src="/img/AAPC_Logo.png" alt="" />
          </Link>
          <button
            class="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <Link class="navbar-brand d-none d-md-block" href="/">
                <img loading="lazy" src="/img/AAPC_Logo.png" alt="" />
              </Link>
              <li class="nav-item">
                <Link class="nav-link" href="/projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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

      <div
        style={{
          position: "relative",
          width: "85%",
          borderTop: "rgba(255, 255, 255, 0.40) solid 1px",
          margin: "auto",
        }}
      >
        <footer
          style={{
            position: "relative",
            borderBottom: "rgba(255, 255, 255, 0.40) solid 1px",
            marginBottom: "1vh",
            display: "flex",
          }}
        >
          <div class="footer-left">
            <img
              loading="lazy"
              src="/img/AAPC_Logo.png"
              id="footer-img"
              class="nav-img"
              alt="AAPC_Logo"
            />
            <p
              style={{
                opacity: 0.6,
                marginBottom: "3vh",
                lineHeight: 2.5,
              }}
            >
              AAPC is an all-encompassing, conscious team of experts that take
              pride in investing in the future of buildings, our clients and
              their clients.
            </p>
          </div>
          <div class="footer-middle">
            <h2
              style={{
                borderBottom: "#FFDC32 2px solid",
                display: "inline-block",
              }}
            >
              Contact Us
            </h2>
            <p onclick="window.open('https://maps.app.goo.gl/3S2kgXWk48vREADu9', '_blank')">
              <span class="fas fa-location-arrow text-white"></span> 130 W 37th
              Street New York, NY 10018
            </p>
            <p onclick="window.location.href = 'tel:212-547-9050'">
              <span class="fas fa-phone text-white"></span>212-547-9050
            </p>
            <p onclick="window.location.href = 'mailto:admin@aapc.nyc';">
              <span class="fas fa-envelope text-white"></span>admin@aapc.nyc
            </p>
          </div>
          <div class="footer-right">
            <h2
              style={{
                borderBottom: "#FFDC32 2px solid",
                display: "inline-block",
              }}
            >
              Pages
            </h2>
            <p onclick="location.assign('/');">Home</p>
            <p onclick="location.assign('/services');">Services</p>
            <p onclick="location.assign('/projects');">Projects</p>
            <p onclick="location.assign('/contact');">Contact</p>
            <p onclick="location.assign('/blog');">Blog</p>
          </div>
        </footer>
        <Link class="pptos" href="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
      <script src="/js/script.js"></script>
      <script src="/js/vanilla-tilt.js"></script>

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
    
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
    <script type="text/javascript">window.onload = function () {
        Calendly.initBadgeWidget({
            url: 'https://calendly.com/general-services',
            text: 'Free Consultation',
            color: '#FFDC32',
            textColor: '#1b1b1b',
            branding: false,
            zIndex: 100
        })
    }</script> */}
    </div>
  );
};

export default Home;
