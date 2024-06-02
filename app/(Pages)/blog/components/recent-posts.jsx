"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import $ from "jquery";
import Tilt from "react-parallax-tilt";

const RecentPosts = ({ filteredPosts }) => {
  const router = useRouter();

  const rfc3986EncodeURIComponent = (str) => {
    return encodeURIComponent(str).replace(/[!'()*]/g, escape);
  };

  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#side");
      var box = $("#hotels-title");

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
    <div className="flex-container" style={{ position: "relative" }}>
      <div id="side" className="flex-item-left">
        <h1 className="left-text" id="hotels-title">
          Recent Posts
        </h1>
      </div>
      <div
        className="flex-item-right"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div id="hotels">
          <div id="hotels">
            {filteredPosts.map((item) => (
              <div
                key={item.identifier}
                className="flex-container width-full reverse"
                onClick={() => {
                  router.push(
                    `/blog/${rfc3986EncodeURIComponent(
                      item.identifier
                    )}`
                  );
                }}
                style={{ marginTop: "5%", borderTop: "0px" }}
              >
                <div className="project-left">
                  <div className="project-left-content">
                    <Tilt
                      glareEnable={true}
                      glareMaxOpacity={0}
                      gyroscope={true}
                      transitionSpeed={300}
                      tiltMaxAngleX={2}
                      tiltMaxAngleY={2}
                    >
                      <h1>{item.title}</h1>
                    </Tilt>
                    <br />
                    <h5>{item.author}</h5>
                    <h5 style={{ float: "right" }}>
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        month: "long", // Use "short" for abbreviated month
                        day: "numeric",
                        year: "numeric",
                      })}
                    </h5>
                    <h4>{item.clincher}</h4>
                  </div>
                </div>
                <div className="project-right">
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    gyroscope={true}
                    transitionSpeed={300}
                    tiltMaxAngleX={2}
                    tiltMaxAngleY={2}
                    className="project-right-pic"
                    style={{
                      background: `url(${item.photo})`,
                      backgroundSize: "cover",
                    }}
                  ></Tilt>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
