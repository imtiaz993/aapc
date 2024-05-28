const Topper = () => {
  return (
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

        <div className="top-wrapper">
          <h1
            className="topper-title"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            Contact Us
          </h1>
          <div className="title-wrapper">
            <h3 className="topper-subtitle">Get in Touch</h3>
          </div>

          <h3 className="topper-blurb">
            Are you a property manager, real estate mogul or an Architect? We
            invite you to learn more about us and discover the vast ways that we
            can assist you. We look forward to the opportunity to discuss
            potential collaborations and build mutually beneficial partnerships.
          </h3>
        </div>
      </div>
  )
}

export default Topper