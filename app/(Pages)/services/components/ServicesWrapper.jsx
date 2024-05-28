const ServicesWrapper = ({ children }) => {
  return (
    <div class="flex-container" style={{ position: "relative" }}>
      <div id="service-text-section" class="flex-item-left">
        <h1 class="left-text" id="planning-title">
          Planning
        </h1>
        <h1 class="left-text" id="visualization-title">
          Visualization
        </h1>
        <h1 class="left-text" id="project-management-title">
          Project Management
        </h1>
      </div>
      {children}
    </div>
  );
};

export default ServicesWrapper;
