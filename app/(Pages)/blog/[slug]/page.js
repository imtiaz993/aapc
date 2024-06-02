import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import "../../../../public/css/home.css";
import "../../../../public/css/blog-details.css";

export const metadata = {
  title: "AAPC | Blog Single",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const BlogSingle = async ({ params }) => {
  const BLOG_URL = "https://azark-blog-backend.onrender.com/api/posts/title/";
  const ID = params["slug"];

  let post;
  try {
    const res = await fetch(BLOG_URL + ID);
    const json = await res.json();
    post = json;
  } catch (e) {
    if (e.data) {
      return { status: e.status, data: e.data };
    }
  }

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
    <div>
      <Navbar />
      <div className="container" style={{ position: "relative" }}>
        <div className="carousel-container row">
          <h1
            className="project-title"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            {post.title}
          </h1>

          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <img src={post.photo} style={{ width: "100%" }} alt={post.title} />
          </div>

          <div
            className="stats"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            <h3>{post.author}</h3>
            <h3 id="createdDate">Written: {formattedCreated}</h3>
            {formattedCreated !== formattedUpdated && (
              <h3 id="updatedDate">Updated: {formattedUpdated}</h3>
            )}
          </div>
        </div>
      </div>
      <div className="flex-container" style={{ position: "relative" }}>
        <div className="flex-item-left"></div>
        <div className="flex-item-right">
          <div
            id="the-text"
            className="about-text"
            dangerouslySetInnerHTML={{ __html: post.desc }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogSingle;
