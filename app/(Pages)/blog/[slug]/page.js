import Head from "next/head";
import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
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

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
        />
      </Head>

      <div>
        <Navbar />
        <Topper post={post} />
        <div className="flex-container" style={{ position: "relative", borderTop: "none" }}>
          <div className="flex-item-left"></div>
          <div className="flex-item-right">
            <div
              id="the-text"
              className="about-text hotels"
              dangerouslySetInnerHTML={{ __html: post.desc }}
            ></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogSingle;
