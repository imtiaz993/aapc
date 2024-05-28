const Topper = () => {
  return (
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
          AAPC, which stands for Azarkian Architecture P.C., is a dedicated and
          team With a comprehensive approach, they take pride in their work, not
          only focusing on the physical structures but also investing in the
          long-term success of their clients. Their ethos revolves around a
          holistic understanding of the built environment, ensuring that their
          expertise contributes to sustainable and forward-thinking solutions.{" "}
        </h3>
      </div>
    </div>
  );
};

export default Topper;
