"use client";
import { useEffect } from "react";
import $ from "jquery";

const Join = () => {
  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#join-left");
      var box = $("#join-left-text");

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
      <div id="join-left" className="flex-item-left">
        <h1 id="join-left-text" className="left-text">
          Join
        </h1>
      </div>
      <div className="flex-item-right" style={{ position: "relative" }}>
        <h1 id="apply-text" style={{ margin: "3vmax" }}>
          We are always looking for talented individuals to join our team.
          Interested? Connect with us by filling out the form below.
        </h1>
        <form
          action="https://formsubmit.co/talent@aapc.nyc"
          method="POST"
          enctype="multipart/form-data"
        >
          <input type="hidden" name="_next" value="https://www.aapc.nyc" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input
            type="hidden"
            name="_subject"
            value="AAPC - Job Application Submission"
          />

          <label for="name2" style={{ display: "none" }}></label>
          <label for="email2" style={{ display: "none" }}></label>
          <label for="message2" style={{ display: "none" }}></label>
          <input
            style={{ margin: "1vmax 3vmax" }}
            type="text"
            placeholder="Name"
            name="name"
            id="name2"
            required
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              style={{ width: "50%" }}
              type="email"
              placeholder="Email"
              name="email"
              id="email2"
              required
            />
            <input
              id="file"
              name="Attachment"
              type="file"
              placeholder="Resume"
              style={{ width: "50%" }}
              accept="application/vnd.ms-word.document.macroEnabled.12, application/pdf, image/png, image/jpeg"
              required
            />
          </div>
          <textarea
            placeholder="Message"
            name="message"
            id="message2"
          ></textarea>
          <button type="submit" className="button">
            <h1 style={{ marginLeft: "-6%" }} className="button-text">
              Apply
            </h1>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
