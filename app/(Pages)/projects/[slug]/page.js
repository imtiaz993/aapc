import React from "react";
import Link from "next/link";
import "../../../public/css/home.css";
import "../../../public/css/project-details.css";

export const metadata = {
  title: "AAPC | Gotham Hall",
  description: "",
};

const projectDetail = () => {
  return (
    <div>
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
      <div class="container" style={{ position: "relative" }}>
        <div class="carousel-container row">
          <h1
            class="project-title"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            Gotham Hall [1356 Broadway]
          </h1>

          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-slide-number="0">
                <img
                  src="/project/content/gotham/1.JPEG"
                  class="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/1.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div class="carousel-item" data-slide-number="1">
                <img
                  src="./project/content/gotham/2.JPEG"
                  class="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/2.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div class="carousel-item" data-slide-number="2">
                <img
                  src="/project/content/gotham/3.JPEG"
                  class="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/3.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div class="carousel-item" data-slide-number="3">
                <img
                  src="/project/content/gotham/4.JPEG"
                  class="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/4.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div class="carousel-item" data-slide-number="4">
                <img
                  src="/project/content/gotham/5.JPEG"
                  class="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/5.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div class="carousel-item" data-slide-number="5">
                <img
                  src="/project/content/gotham/6.JPEG"
                  class="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/6.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div class="carousel-item" data-slide-number="6">
                <img
                  src="/project/content/gotham/7.JPEG"
                  class="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/7.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div class="carousel-item" data-slide-number="7">
                <img
                  src="/project/content/gotham/8.JPEG"
                  class="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/8.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
              <div class="carousel-item" data-slide-number="8">
                <img
                  src="/project/content/gotham/9.JPEG"
                  class="d-block w-100"
                  alt="..."
                  data-remote="./content/gotham/9.JPEG"
                  data-type="image"
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                />
              </div>
            </div>
          </div>

          <div
            class="stats"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            <h3>
              Company <br /> Ram Caterers
            </h3>
            <h3>
              Location <br /> Midtown
            </h3>
            <h3>
              Typology <br /> Hospitality
            </h3>
            <h3 style={{ borderRight: "none" }}>
              Year <br /> 1924
            </h3>
          </div>
        </div>{" "}
        {/* /row */}
      </div>{" "}
      {/* container */}
      <div class="flex-container" style={{ position: "relative" }}>
        <div class="flex-item-left"></div>

        <div class="flex-item-right">
          <div id="carousel-thumbs" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row mx-0">
                  <div
                    id="carousel-selector-0"
                    class="thumb col-4 col-sm-2 px-1 py-2 selected"
                    data-target="#myCarousel"
                    data-slide-to="0"
                  >
                    <img
                      src="/project/content/gotham/1.JPEG"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div
                    id="carousel-selector-1"
                    class="thumb col-4 col-sm-2 px-1 py-2"
                    data-target="#myCarousel"
                    data-slide-to="1"
                  >
                    <img
                      src="/project/content/gotham/2.JPEG"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div
                    id="carousel-selector-2"
                    class="thumb col-4 col-sm-2 px-1 py-2"
                    data-target="#myCarousel"
                    data-slide-to="2"
                  >
                    <img
                      src="/project/content/gotham/3.JPEG"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div
                    id="carousel-selector-3"
                    class="thumb col-4 col-sm-2 px-1 py-2"
                    data-target="#myCarousel"
                    data-slide-to="3"
                  >
                    <img
                      src="/project/content/gotham/4.JPEG"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div
                    id="carousel-selector-4"
                    class="thumb col-4 col-sm-2 px-1 py-2"
                    data-target="#myCarousel"
                    data-slide-to="4"
                  >
                    <img
                      src="/project/content/gotham/5.JPEG"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div
                    id="carousel-selector-5"
                    class="thumb col-4 col-sm-2 px-1 py-2"
                    data-target="#myCarousel"
                    data-slide-to="5"
                  >
                    <img
                      src="/project/content/gotham/6.JPEG"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row mx-0">
                  <div
                    id="carousel-selector-6"
                    class="thumb col-4 col-sm-2 px-1 py-2"
                    data-target="#myCarousel"
                    data-slide-to="6"
                  >
                    <img
                      src="/project/content/gotham/7.JPEG"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div
                    id="carousel-selector-7"
                    class="thumb col-4 col-sm-2 px-1 py-2"
                    data-target="#myCarousel"
                    data-slide-to="7"
                  >
                    <img
                      src="/project/content/gotham/8.JPEG"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div
                    id="carousel-selector-8"
                    class="thumb col-4 col-sm-2 px-1 py-2"
                    data-target="#myCarousel"
                    data-slide-to="8"
                  >
                    <img
                      src="/project/content/gotham/9.JPEG"
                      class="img-fluid"
                      alt="..."
                    />
                  </div>

                  <div class="col-2 px-1 py-2"></div>
                  <div class="col-2 px-1 py-2"></div>
                </div>
              </div>
            </div>

            <Link href="#carousel-thumbs">
              <div
                className="carousel-control-prev"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </div>
            </Link>

            <Link href="#carousel-thumbs">
              <div
                className="carousel-control-next"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </div>
            </Link>
          </div>
          <h3 class="about-text">
            1356 Broadway stands as a building unlike any other, steeped in
            multiple layers of history. As a protected landmark, AAPC embraced
            the responsibility of restoring its interior, meticulously ensuring
            alignment with the building's rich history. We approached this
            endeavor with care, crafting each entrusted area to unveil a story
            that had been entwined within the passing years of the building.
            These meticulously restored spaces not only narrate a tale but also
            invite guests to experience each room in a distinct manner,
            transporting them to a space that is truly like no other.{" "}
          </h3>

          <video style={{ width: "80%", padding: "5% 0" }} controls>
            <source
              src="/project/content/44-28 55th ave/The-Building-Finale.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <h3 className="about-text" style={{ textAlign: "right" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
            porta metus. Quisque justo ipsum, auctor id lorem ut, hendrerit
            eleifend enim. Cras eleifend lorem sit amet odio consectetur tempus.
            Mauris et metus id turpis varius luctus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Duis ut porta metus. Quisque justo
            ipsum, auctor id lorem ut, hendrerit eleifend enim.
          </h3>
          <video
            style={{
              position: "relative",
              width: "100%",
              padding: "5% 0 0",
              paddingLeft: "20%",
            }}
            controls
          >
            <source
              src="/project/content/44-28 55th ave/The-Building-Finale.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>

          <h2 style={{ margin: "5%" }}>Other Projects</h2>

          <div class="other-projects">
            <div
              class="other-project-single"
              style={{
                background: "url('../project/content/525 7th ave/1.jpg')",
                backgroundSize: "cover",
              }}
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
              onclick="location.assign('113_Franklin.html')"
            >
              <h3>113 Franklin</h3>
              <button class="button project-button">
                <h1
                  style={{
                    rotate: "-45deg",
                  }}
                >
                  ➛
                </h1>
              </button>
            </div>
            <div
              class="other-project-single"
              style={{
                background:
                  "url('../project/content/44-28 55th ave/Render Edited.jpg')",
                backgroundSize: "cover",
              }}
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
              onclick="location.assign('4428_55th_Ave.html')"
            >
              <h3>44-28 55th Ave</h3>
              <button class="button project-button">
                <h1
                  style={{
                    rotate: "-45deg",
                  }}
                >
                  ➛
                </h1>
              </button>
            </div>
            <div
              class="other-project-single"
              style={{
                background: "url('../project/content/525 7th ave/1.jpg')",
                backgroundSize: "cover",
              }}
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.1"
              onclick="location.assign('525_7th_Ave.html')"
            >
              <h3>525 7th Ave</h3>
              <button class="button project-button">
                <h1
                  style={{
                    rotate: "-45deg",
                  }}
                >
                  ➛
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <script>
    function navTest() {
        location.assign('project-details-template.html');
    }
</script>

<!-- partial -->


*/}
    </div>
  );
};

export default projectDetail;