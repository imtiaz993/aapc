import React from "react";
import "../../../public/css/home.css";
import "../../../public/css/projects.css";

export const metadata = {
  title: "AAPC | Projects",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Projects = () => {
  return (
    <div>
      <div style={{ position: "relative", height: "90vh" }}>
        <div
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
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.1"
        ></div>

        <div
          style={{
            position: "absolute",
            width: "45%",
            height: "60vh",
            background: "url('/img/project-top.png')",
            left: "15%",
            top: "15vh",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            backgroundSize: "cover",
          }}
        ></div>

        <div class="top-wrapper">
          <h1
            class="topper-title"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            Projects
          </h1>
          <div class="title-wrapper">
            <h3 class="topper-subtitle">What We Do</h3>
          </div>

          <h3 id="planning-top" class="topper-blurb">
            AAPC, which stands for Azarkian Architecture P.C., is a dedicated
            and team With a comprehensive approach, they take pride in their
            work, not only focusing on the physical structures but also
            investing in the long-term success of their clients. Their ethos
            revolves around a holistic understanding of the built environment,
            ensuring that their expertise contributes to sustainable and
            forward-thinking solutions.{" "}
          </h3>
        </div>
      </div>

      <div class="flex-container" style={{ position: "relative" }}>
        <div id="side" class="flex-item-left">
          <h1 class="left-text" id="hotels-title">
            Featured Projects
          </h1>
        </div>
        <div class="flex-item-right" style={{ position: "relative" }}>
          <div id="hotels">
            <div
              class="flex-container width-full"
              onclick="nav1412OF()"
              style={{ display: "none" }}
            >
              <div class="project-left">
                <div
                  class="project-left-pic"
                  data-tilt
                  data-tilt-glare
                  data-tilt-max-glare="0.1"
                ></div>
              </div>
              <div class="project-right">
                <div class="project-right-content">
                  <h1 data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                    1412 Offices Floors
                  </h1>
                  <br />
                  <h5>Luxury Showrooms</h5>
                  <h4>
                    AAPC was entrusted with the responsibility of creating an
                    office space that goes beyond mere elegance, excelling in
                    both aesthetic appeal and functionality...
                  </h4>
                </div>
              </div>
            </div>
            <div
              class="flex-container width-full reverse"
              onclick="location.assign('/project/Gotham_Hall');"
              style={{ marginTop: "5%" }}
            >
              <div class="project-left">
                <div class="project-left-content">
                  <h1 data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                    Gotham Hall
                  </h1>
                  <br />
                  <h5>Hospitality</h5>
                  <h4>
                    1356 Broadway stands as a building unlike any other, steeped
                    in multiple layers of history. As a protected landmark, AAPC
                    embraced the responsibility of restoring its interior,
                    meticulously ensuring alignment with the building's rich
                    history...
                  </h4>
                </div>
              </div>
              <div class="project-right">
                <div
                  class="project-right-pic"
                  style={{
                    background: "url('/project/content/gotham/1.JPEG')",
                    backgroundSize: "cover",
                  }}
                  data-tilt
                  data-tilt-glare
                  data-tilt-max-glare="0.1"
                ></div>
              </div>
            </div>
            <div
              class="flex-container width-full"
              onclick="location.assign('/project/4428_55th_Ave');"
            >
              <div class="project-left">
                <div
                  class="project-left-pic"
                  style={{
                    background:
                      "url('/project/content/44-28 55th ave/Render Edited.jpg')",
                    backgroundSize: "cover",
                  }}
                  data-tilt
                  data-tilt-glare
                  data-tilt-max-glare="0.1"
                ></div>
              </div>
              <div class="project-right">
                <div class="project-right-content">
                  <h1 data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                    44-28 55th Ave
                  </h1>
                  <br />
                  <h5>Industrial</h5>
                  <h4>
                    Our team successfully lead the extension of a manufacturing
                    facility situated at 44-28 55th Ave, Maspeth, Queens. The
                    project posed unique challenges, not only due to the
                    rigorous regulations...
                  </h4>
                </div>
              </div>
            </div>
            <div
              class="flex-container width-full reverse"
              onclick="location.assign('/project/480_7th_Ave');"
            >
              <div class="project-left">
                <div class="project-left-content">
                  <h1 data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                    480 7th Ave
                  </h1>
                  <br />
                  <h5>Retail</h5>
                  <h4>
                    The NYC retail experience is diverse and multifaceted, and
                    for the AAPC team, the challenge at 480 7th Ave was one we
                    enthusiastically embraced. Combining multiple programs
                    within this project, which included two retail floors...
                  </h4>
                </div>
              </div>
              <div class="project-right">
                <div
                  class="project-right-pic"
                  style={{
                    background: "url('/project/content/480 7th ave/2.jpg')",
                    backgroundSize: "cover",
                  }}
                  data-tilt
                  data-tilt-glare
                  data-tilt-max-glare="0.1"
                ></div>
              </div>
            </div>
            <div
              class="flex-container width-full"
              onclick="location.assign('/project/525_7th_Ave');"
            >
              <div class="project-left">
                <div
                  class="project-left-pic"
                  style={{
                    background: "url('/project/content/525 7th ave/2.jpg')",
                    backgroundSize: "cover",
                  }}
                  data-tilt
                  data-tilt-glare
                  data-tilt-max-glare="0.1"
                ></div>
              </div>
              <div class="project-right">
                <div class="project-right-content">
                  <h1 data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                    525 7th Ave
                  </h1>
                  <br />
                  <h5>Offices</h5>
                  <h4>
                    Elegance and high quality were the dual focal points guiding
                    the development of the executive offices situated at 525 7th
                    Ave. For the AAPC team, it was imperative to not only infuse
                    a sense of sophistication...
                  </h4>
                </div>
              </div>
            </div>
            <div
              class="flex-container width-full reverse"
              onclick="location.assign('/project/712_W_125th');"
              style={{ display: "none" }}
            >
              <div class="project-left">
                <div class="project-left-content">
                  <h1 data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                    712 w 125th
                  </h1>
                  <br />
                  <h5>Restaurant</h5>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ut porta metus. Quisque justo ipsum, auctor id lorem
                    ut, hendrerit eleifend enim. Cras eleifend lorem sit amet
                    odio consectetur tempus.
                  </h4>
                </div>
              </div>
              <div class="project-right">
                <div
                  class="project-right-pic"
                  style={{
                    background: "url('/project/content/712w125/4.JPG')",
                    backgroundSize: "cover",
                  }}
                  data-tilt
                  data-tilt-glare
                  data-tilt-max-glare="0.1"
                ></div>
              </div>
            </div>
            <div
              class="flex-container width-full reverse"
              onclick="location.assign('/project/113_Franklin');"
              style={{ marginBottom: "0" }}
            >
              <div class="project-left">
                <div class="project-left-content">
                  <h1 data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                    113 Franklin
                  </h1>
                  <br />
                  <h5>Restaurant</h5>
                  <h4>
                    The 113 Franklin project involves extensive interior
                    renovations and the meticulous process of legalizing the
                    changes through detailed sets and close collaboration with
                    the interior design team. The focus is not only on
                    transforming the physical space...
                  </h4>
                </div>
              </div>
              <div class="project-right">
                <div
                  class="project-right-pic"
                  style={{
                    background:
                      "url('/project/content/113 Franklin/IMG_6182.jpeg')",
                    backgroundSize: "cover",
                  }}
                  data-tilt
                  data-tilt-glare
                  data-tilt-max-glare="0.1"
                ></div>
              </div>
            </div>
            <div
              class="flex-container width-full"
              onclick="location.assign('/project/113_Franklin');"
              style={{ display: "none" }}
            >
              <div class="project-left">
                <div
                  class="project-left-pic"
                  style={{
                    background:
                      "url('/project/content/113 Franklin/IMG_6182.jpeg')",
                    backgroundSize: "cover",
                  }}
                  data-tilt
                  data-tilt-glare
                  data-tilt-max-glare="0.1"
                ></div>
              </div>
              <div class="project-right">
                <div class="project-right-content">
                  <h1 data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                    113 Franklin
                  </h1>
                  <br />
                  <h5>Restaurants</h5>
                  <h4>
                    The 113 Franklin project involves extensive interior
                    renovations and the meticulous process of legalizing the
                    changes through detailed sets and close collaboration with
                    the interior design team. The focus is not only on
                    transforming the physical space...
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*


<script>
    $(document).scroll(function () {
        var wrapper = $('#side');
        var box = $('#hotels-title');

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

export default Projects;
