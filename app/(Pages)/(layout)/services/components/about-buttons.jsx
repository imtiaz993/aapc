const AboutButtons = () => {
  return (
    <div
      class="about-buttons"
      style={{ marginTop: "0", paddingBottom: "1vmax" }}
    >
      <button
        class="button"
        id="planning-button"
        style={{ height: "10vh", width: "10vh" }}
      >
        <h1 class="button-text">Planning</h1>
      </button>
      <button
        class="button"
        id="visualization-button"
        style={{ height: "10vh", width: "10vh" }}
      >
        <h1 class="button-text">Visualization</h1>
      </button>
      <button
        class="button"
        id="project-management-button"
        style={{ height: "10vh", width: "10vh" }}
      >
        <h1 class="button-text">Project Management</h1>
      </button>
    </div>
  );
};

export default AboutButtons;
