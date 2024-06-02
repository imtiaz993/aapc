"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const Process = () => {
  return (
    <div
      className="flex-container"
      style={{
        position: "relative",
      }}
    >
      <div className="flex-item-left" id=""></div>
      <div className="flex-item-right">
        <Tilt
          className="glass-section-header"
          glareEnable={true}
          glareMaxOpacity={0.1}
          gyroscope={true}
          transitionSpeed={300}
          tiltMaxAngleX={2}
          tiltMaxAngleY={2}
        >
          <h1 className="g-s-h-text">Our Process</h1>
        </Tilt>
        <div id="stepContainer">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            id="stepImg"
            className="step-section-img"
            src="/project/content/113 Franklin/IMG_6183.jpeg"
            alt="building"
          />
          <Tilt
            className="glass-section-content"
            glareEnable={true}
            glareMaxOpacity={0.1}
            gyroscope={true}
            transitionSpeed={300}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
          >
            <h1 id="stepTitle" className="g-s-c-text-top">
              Feasibility
            </h1>
            <div
              style={{
                width: "100%",
                height: "78%",
                overflow: "auto",
              }}
            >
              <h4 id="stepBody" className="g-s-c-text">
                Our Team, Commences with an in-depth discussion to ascertain the
                project&apos;s scope, objectives, and financial parameters,
                which Involves a comprehensive assessment to gauge the
                project&apos;s viability, taking into account zoning regulations
                and other relevant considerations.
              </h4>
            </div>
            <button id="stepButton">Next</button>
            <button id="stepButton2">Previous</button>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Process;
