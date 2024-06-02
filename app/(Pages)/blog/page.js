import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import RecentPosts from "./components/recent-posts";
import "../../../public/css/home.css";
import "../../../public/css/blog.css";

export const metadata = {
  title: "AAPC | Blog Posts",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Blog = async () => {
  const BLOG_URL = "https://azark-blog-backend.onrender.com/api/posts";
  let filteredPosts;
  try {
    const res = await fetch(BLOG_URL);
    const json = await res.json();

    filteredPosts = json
      .reverse()
      .filter(
        (item) => item.categories.includes("aapc") && item.published === true
      );
  } catch (e) {
    if (e.data) {
      return { status: e.status, data: e.data };
    }
  }

  return (
    <div>
      <Navbar />
      <Topper />
      <RecentPosts filteredPosts={filteredPosts} />
      <Footer />
    </div>
  );
};

export default Blog;
