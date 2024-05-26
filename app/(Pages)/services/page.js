import React from "react";

export const metadata = {
  title: "AAPC | Services",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Services = () => {
  return (
    <div>
      <div style={{ position: "relative", height: "90vh" }}>
        <div
          style={{
            position: "absolute",
            width: "45%",
            height: "60vh",
            background:
              "linear-gradient(127deg, rgba(176, 156, 59, 0.49) 0%, rgba(125, 105, 3, 0.28) 100%)",
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
            background: "url('img/service-top.jpg')",
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
            Services
          </h1>
          <div class="title-wrapper">
            <h3 id="planning-top-title" class="topper-subtitle">
              Planning
            </h3>
            <h3 id="visualization-top-title" class="topper-subtitle">
              Visualization
            </h3>
            <h3 id="project-management-top-title" class="topper-subtitle">
              Project Management
            </h3>
          </div>

          <h3 id="planning-top" class="topper-blurb">
            This multifaceted discipline involves collaborating with clients to
            understand their needs, conceptualizing innovative design solutions,
            and navigating regulatory frameworks. From the initial stages of
            schematic design to the creation of detailed construction drawings
            and specifications, architectural planning is a dynamic process that
            integrates creativity, functionality, and compliance.{" "}
          </h3>
          <h3 id="visualization-top" class="topper-blurb">
            Architectural visualization services are an integral aspect of
            modern design, employing advanced technology to create immersive and
            realistic representations of architectural concepts. This not only
            facilitates effective communication between architects, clients, and
            stakeholders but also allows for informed decision-making by
            providing a vivid preview of the final built environment.{" "}
          </h3>
          <h3 id="project-management-top" class="topper-blurb">
            Project management services encompass the orchestration and
            coordination of all aspects involved in bringing an architectural
            vision to fruition. This comprehensive role involves overseeing
            project timelines, budgets, and resources while maintaining
            effective communication among clients, architects, contractors, and
            regulatory authorities. Our expertise lies in navigating challenges,
            mitigating risks, and optimizing efficiency to deliver successful
            architectural projects that align with client expectations and
            industry best practices.
          </h3>
        </div>
      </div>

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
        <div
          class="flex-item-right"
          id="planning"
          style={{ position: "relative" }}
        >
          <div
            class="flex-container service-section"
            style={{
              borderTop: "none",
              marginBottom: "0",
              paddingBottom: "0",
              width: "100%",
            }}
          >
            <div class="section-left-projects">
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/planning-pic.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Site Surveys
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Assessment and documentation of existing site conditions.
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/planning-pic.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Zoning Analysis
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Examination of zoning regulations to assess project
                  feasibility
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/planning-pic.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Feasibility Analysis
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Evaluation of project viability and potential challenges.
                </h3>
              </div>
            </div>
            <div class="section-right-projects">
              <div
                class="vendor-box right-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/planning-pic.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Build Code Analysis
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Review and analysis of building codes to ensure compliance.
                </h3>
              </div>
              <div
                class="vendor-box right-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/planning-pic.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Space Planning
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Design and arrangement of spaces within a building based on
                  functional requirements and user needs.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex-item-right"
          id="visualization"
          style={{ position: "relative" }}
        >
          <div
            class="flex-container service-section"
            style={{
              borderTop: "none",
              marginBottom: "0",
              paddingBottom: "0",
              width: "100%",
            }}
          >
            <div class="section-left-projects">
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Existing As-Built Plans
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Documentation of the actual construction post-completion for
                  future reference.
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Structural Coordination
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Integration and coordination of structural elements within the
                  architectural design.
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Mechanical System Coordination{" "}
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Integration and coordination of mechanical systems (e.g.,
                  HVAC) within the overall design.
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Construction Fence, Shed, Scaffold
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Installation and management of temporary structures during
                  construction.
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Construction Documents
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Comprehensive set of drawings and specifications guiding
                  construction or renovation.
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Sprinkler and Standpipe Coordination
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Planning and coordination of sprinkler and standpipe systems
                  for fire protection.
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Acoustical Coordination
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Planning and coordination of acoustical elements within the
                  building design.
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                style={{ marginBottom: "10%" }}
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  ADA Compliance
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Ensuring design and construction comply with the Americans
                  with Disabilities Act standards.
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                style={{ marginBottom: "10%" }}
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Vertical Transportation
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Planning and coordination of vertical transportation systems
                  within the building.
                </h3>
              </div>
            </div>
            <div class="section-right-projects">
              <div
                class="vendor-box right-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Bidding Documents
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Comprehensive set of documents provided to potential bidders
                  containing project specifications.
                </h3>
              </div>
              <div
                class="vendor-box right-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Plumbing Coordination
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Planning and coordination of plumbing systems within the
                  building design.
                </h3>
              </div>
              <div
                class="vendor-box right-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Ansul System Coordination
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Planning and coordination of Ansul fire suppression systems
                  within the building design.
                </h3>
              </div>
              <div
                class="vendor-box right-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Fire Department Applications
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Submission of applications to the fire department for
                  necessary approvals and permits.
                </h3>
              </div>
              <div
                class="vendor-box right-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  DOB Filling / Permit Drawings sets
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Submission of drawings to the Department of Buildings for
                  permit approval.
                </h3>
              </div>
              <div
                class="vendor-box right-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Fire Alarm System Coordination
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Planning and coordination of fire alarm systems for early
                  detection.
                </h3>
              </div>
              <div
                class="vendor-box right-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Use and Occupancy Filling Sets
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Submission of documentation for approval of the building's
                  intended use and occupancy.
                </h3>
              </div>
              <div
                class="vendor-box right-service"
                style={{ marginBottom: "10%" }}
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/visualization.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Refrigeration and Insulation
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Planning and coordination of refrigeration systems and
                  insulation.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex-item-right"
          id="project-management"
          style={{ position: "relative" }}
        >
          <div
            class="flex-container service-section"
            style={{
              borderTop: "none",
              marginBottom: "0",
              paddingBottom: "0",
              width: "100%",
            }}
          >
            <div class="section-left-projects">
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/project-man-pic.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Architect of Record (AOR) Filing
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Submission of official documents by the designated Architect
                  of Record to regulatory authorities, ensuring compliance with
                  building regulations.
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/project-man-pic.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Landmark Filing Sets (Interior/Exterior Renovation)
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Creation and submission of documentation for obtaining
                  approval from authorities for renovations in designated
                  landmarked structures.
                </h3>
              </div>
              <div
                class="vendor-box left-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/project-man-pic.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Construction Administration
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Oversight and management of the construction phase to ensure
                  adherence to design specifications.
                </h3>
              </div>
            </div>
            <div class="section-right-projects">
              <div
                class="vendor-box right-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/project-man-pic.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Restorations and Fill Outs
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Services involving the restoration of existing structures and
                  completion of vacant spaces within a building.
                </h3>
              </div>
              <div
                class="vendor-box right-service"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
              >
                <div class="gold-bg"></div>
                <img
                  loading="lazy"
                  alt="service-bg-img"
                  src="/img/project-man-pic.png"
                />
                <h1
                  style={{
                    padding: "2vmax 2vmax 1vmax",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Bidding
                </h1>
                <h3
                  style={{
                    margin: "auto 2vmax",
                    lineHeight: 2,
                    position: "relative",
                    paddingBottom: "2vmax",
                    zIndex: 2,
                  }}
                >
                  Facilitation of the contractor proposal submission process for
                  construction or renovation projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
<script src='js/vanilla-tilt.js'></script>
<script src='js/services.js'></script>

<script>
    $(document).scroll(function () {
        var wrapper = $('#service-text-section');
        var box = $('#planning-title');

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
        var wrapper = $('#service-text-section');
        var box = $('#visualization-title');

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
        var wrapper = $('#service-text-section');
        var box = $('#project-management-title');

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

<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<script type="text/javascript">window.onload = function () {
    Calendly.initBadgeWidget({
        url: 'https://calendly.com/general-services',
        text: 'Free Consultation',
        color: '#FFDC32',
        textColor: '#1b1b1b',
        branding: false,
        zIndex: 100
    });
}</script> */}
    </div>
  );
};

export default Services;
