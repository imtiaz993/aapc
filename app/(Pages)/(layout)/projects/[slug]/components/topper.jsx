const Topper = () => {
  return (
    <div>
      {" "}
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
      </div>
    </div>
  );
};

export default Topper;