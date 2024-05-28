const Process = () => {
  return (
    <div
      class="flex-container"
      style={{
        position: "relative",
      }}
    >
      <div class="flex-item-left" id=""></div>
      <div class="flex-item-right">
        <div
          class="glass-section-header"
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.1"
        >
          <h1 class="g-s-h-text">Our Process</h1>
        </div>
        <div id="stepContainer">
          <img
            loading="lazy"
            id="stepImg"
            class="step-section-img"
            src="/project/content/113 Franklin/IMG_6183.jpeg"
            alt="building"
          />
          <div
            class="glass-section-content"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            <h1 id="stepTitle" class="g-s-c-text-top">
              Feasibility
            </h1>
            <div
              style={{
                width: "100%",
                height: "78%",
                overflow: "auto",
              }}
            >
              <h4 id="stepBody" class="g-s-c-text">
                Our Team, Commences with an in-depth discussion to ascertain the
                project&apos;s scope, objectives, and financial parameters,
                which Involves a comprehensive assessment to gauge the
                project&apos;s viability, taking into account zoning regulations
                and other relevant considerations.
              </h4>
            </div>
            <button id="stepButton">Next</button>
            <button id="stepButton2">Previous</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
