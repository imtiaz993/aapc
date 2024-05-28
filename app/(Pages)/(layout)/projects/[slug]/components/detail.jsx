import Link from "next/link";
const Detail = () => {
  return (
    <div className="flex-container" style={{ position: "relative" }}>
      <div className="flex-item-left"></div>

      <div className="flex-item-right">
        <div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row mx-0">
                <div
                  id="carousel-selector-0"
                  className="thumb col-4 col-sm-2 px-1 py-2 selected"
                  data-target="#myCarousel"
                  data-slide-to="0"
                >
                  <img
                    src="/project/content/gotham/1.JPEG"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div
                  id="carousel-selector-1"
                  className="thumb col-4 col-sm-2 px-1 py-2"
                  data-target="#myCarousel"
                  data-slide-to="1"
                >
                  <img
                    src="/project/content/gotham/2.JPEG"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div
                  id="carousel-selector-2"
                  className="thumb col-4 col-sm-2 px-1 py-2"
                  data-target="#myCarousel"
                  data-slide-to="2"
                >
                  <img
                    src="/project/content/gotham/3.JPEG"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div
                  id="carousel-selector-3"
                  className="thumb col-4 col-sm-2 px-1 py-2"
                  data-target="#myCarousel"
                  data-slide-to="3"
                >
                  <img
                    src="/project/content/gotham/4.JPEG"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div
                  id="carousel-selector-4"
                  className="thumb col-4 col-sm-2 px-1 py-2"
                  data-target="#myCarousel"
                  data-slide-to="4"
                >
                  <img
                    src="/project/content/gotham/5.JPEG"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div
                  id="carousel-selector-5"
                  className="thumb col-4 col-sm-2 px-1 py-2"
                  data-target="#myCarousel"
                  data-slide-to="5"
                >
                  <img
                    src="/project/content/gotham/6.JPEG"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mx-0">
                <div
                  id="carousel-selector-6"
                  className="thumb col-4 col-sm-2 px-1 py-2"
                  data-target="#myCarousel"
                  data-slide-to="6"
                >
                  <img
                    src="/project/content/gotham/7.JPEG"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div
                  id="carousel-selector-7"
                  className="thumb col-4 col-sm-2 px-1 py-2"
                  data-target="#myCarousel"
                  data-slide-to="7"
                >
                  <img
                    src="/project/content/gotham/8.JPEG"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div
                  id="carousel-selector-8"
                  className="thumb col-4 col-sm-2 px-1 py-2"
                  data-target="#myCarousel"
                  data-slide-to="8"
                >
                  <img
                    src="/project/content/gotham/9.JPEG"
                    className="img-fluid"
                    alt="..."
                  />
                </div>

                <div className="col-2 px-1 py-2"></div>
                <div className="col-2 px-1 py-2"></div>
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
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
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
        <h3 className="about-text">
          1356 Broadway stands as a building unlike any other, steeped in
          multiple layers of history. As a protected landmark, AAPC embraced the
          responsibility of restoring its interior, meticulously ensuring
          alignment with the building&apos;s rich history. We approached this
          endeavor with care, crafting each entrusted area to unveil a story
          that had been entwined within the passing years of the building. These
          meticulously restored spaces not only narrate a tale but also invite
          guests to experience each room in a distinct manner, transporting them
          to a space that is truly like no other.{" "}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut porta
          metus. Quisque justo ipsum, auctor id lorem ut, hendrerit eleifend
          enim. Cras eleifend lorem sit amet odio consectetur tempus. Mauris et
          metus id turpis varius luctus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis ut porta metus. Quisque justo ipsum, auctor id
          lorem ut, hendrerit eleifend enim.
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

        <div className="other-projects">
          <div
            className="other-project-single"
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
            <button className="button project-button">
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
            className="other-project-single"
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
            <button className="button project-button">
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
            className="other-project-single"
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
            <button className="button project-button">
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
  );
};

export default Detail;
