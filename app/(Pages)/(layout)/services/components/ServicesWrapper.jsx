const ServicesWrapper = ({ children }) => {
  return (
    <div className="flex-container" style={{ position: "relative" }}>
      <div id="service-text-section" className="flex-item-left">
        <h1 className="left-text" id="planning-title">
          Planning
        </h1>
        <h1 className="left-text" id="visualization-title">
          Visualization
        </h1>
        <h1 className="left-text" id="project-management-title">
          Project Management
        </h1>
      </div>
      {children}
    </div>
  );
};

export default ServicesWrapper;
