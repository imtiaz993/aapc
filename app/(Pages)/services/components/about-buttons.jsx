const AboutButtons = ({ setActiveTab }) => {
  return (
    <div
      className="about-buttons"
      style={{ marginTop: "0", paddingBottom: "1vmax" }}
    >
      <button
        className="button"
        id="planning-button"
        style={{ height: "10vh", width: "10vh" }}
        onClick={() => {
          setActiveTab("Planning");
        }}
      >
        <h1 className="button-text">Planning</h1>
      </button>
      <button
        className="button"
        id="visualization-button"
        style={{ height: "10vh", width: "10vh" }}
        onClick={() => {
          setActiveTab("Visualization");
        }}
      >
        <h1 className="button-text">Visualization</h1>
      </button>
      <button
        className="button"
        id="project-management-button"
        style={{ height: "10vh", width: "10vh" }}
        onClick={() => {
          setActiveTab("ProjectManagement");
        }}
      >
        <h1 className="button-text">Project Management</h1>
      </button>
    </div>
  );
};

export default AboutButtons;
