"use client";
import Tilt from "react-parallax-tilt";

const Topper = ({ post }) => {
  const formattedCreated = new Date(post.createdAt).toLocaleDateString(
    "en-US",
    {
      month: "long", // Use "short" for abbreviated month
      day: "numeric",
      year: "numeric",
    }
  );

  const formattedUpdated = new Date(post.updatedAt).toLocaleDateString(
    "en-US",
    {
      month: "long", // Use "short" for abbreviated month
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="container" style={{ position: "relative" }}>
      <div className="carousel-container row">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0}
          gyroscope={true}
          transitionSpeed={300}
          tiltMaxAngleX={2}
          tiltMaxAngleY={2}
          className="project-title"
        >
          {post.title}
        </Tilt>

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <img src={post.photo} style={{ width: "100%" }} alt={post.title} />
        </div>

        <Tilt
          glareEnable={true}
          glareMaxOpacity={0}
          gyroscope={true}
          transitionSpeed={300}
          tiltMaxAngleX={2}
          tiltMaxAngleY={2}
        >
          <div className="stats">
            <h3>{post.author}</h3>
            <h3 id="createdDate">Written: {formattedCreated}</h3>
            {formattedCreated !== formattedUpdated && (
              <h3 id="updatedDate">Updated: {formattedUpdated}</h3>
            )}
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Topper;
