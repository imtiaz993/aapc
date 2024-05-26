import "../../../public/css/contact.css";

export const metadata = {
  title: "AAPC | Blog Contact",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Contact = () => {
  return (
    <div>
      <div style={{ position: "relative", height: "90vh" }}>
        <div
          style={{
            position: "absolute",
            width: "45%",
            height: "60vh",
            background:
              "linear-gradient(127deg, rgba(170, 139, 89, 0.49) 0%, rgba(170, 139, 89, 0.28) 100%)",
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
            background: "url('img/contact-top.png')",
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
            Contact Us
          </h1>
          <div class="title-wrapper">
            <h3 class="topper-subtitle">Get in Touch</h3>
          </div>

          <h3 class="topper-blurb">
            Are you a property manager, real estate mogul or an Architect? We
            invite you to learn more about us and discover the vast ways that we
            can assist you. We look forward to the opportunity to discuss
            potential collaborations and build mutually beneficial partnerships.
          </h3>
        </div>
      </div>

      <div class="flex-container" style={{ position: "relative" }}>
        <div id="contact-left" class="flex-item-left">
          <h1 id="contact-left-text" class="left-text">
            Contact
          </h1>
        </div>
        <div class="flex-item-right" style={{ position: "relative" }}>
          <h1 id="contact-us-text" style={{ margin: "3vmax" }}>
            For more information, business opportunities or any enquiries; reach
            out below
          </h1>
          <form action="https://formsubmit.co/admin@aapc.nyc" method="POST">
            <input type="hidden" name="_next" value="https://www.aapc.nyc" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <label for="name" style={{ display: "none" }}></label>
            <label for="subject" style={{ display: "none" }}></label>
            <label for="email" style={{ display: "none" }}></label>
            <label for="message" style={{ display: "none" }}></label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                style={{ width: "50%" }}
                type="text"
                placeholder="Subject"
                name="_subject"
                id="subject"
                required
              />
              <input
                style={{ width: "50%" }}
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
            </div>
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              required
            ></textarea>
            <button type="submit" class="button">
              <h1 class="button-text">Send</h1>
            </button>
          </form>
        </div>
      </div>

      <div class="flex-container" style={{ position: "relative" }}>
        <div id="join-left" class="flex-item-left">
          <h1 id="join-left-text" class="left-text">
            Join
          </h1>
        </div>
        <div class="flex-item-right" style={{ position: "relative" }}>
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
            <button type="submit" class="button">
              <h1 style={{ marginLeft: "-6%" }} class="button-text">
                Apply
              </h1>
            </button>
          </form>
        </div>
      </div>

      {/*

<script>
    $(document).scroll(function () {
        var wrapper = $('#contact-left');
        var box = $('#contact-left-text');

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
        var wrapper = $('#join-left');
        var box = $('#join-left-text');

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

export default Contact;
