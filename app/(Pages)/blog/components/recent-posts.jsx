"use client";
import { useEffect } from "react";
import $ from "jquery";

const RecentPosts = () => {
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
        <div id="hotels"></div>
      </div>
    </div>
  );
};

export default RecentPosts;
