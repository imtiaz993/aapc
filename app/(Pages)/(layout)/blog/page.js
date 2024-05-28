import Topper from "./components/topper";
import RecentPosts from "./components/recent-posts";
import "../../../../public/css/home.css";
import "../../../../public/css/blog.css";

export const metadata = {
  title: "AAPC | Blog Posts",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Blog = () => {
  return (
    <div>
      <Topper />
      <RecentPosts />

      {/* <script>
    const BLOG_URL = 'https://azark-blog-backend.onrender.com/api/posts';

    async function customFetch() {
        try {
            const res = await fetch(BLOG_URL);
            if (!res.ok) {
                throw new Error(`${res.status} : ${res.statusText}`)
            }

            const json = await res.json();
            console.log(json)
            return json;
        } catch (err) {
            console.error(err.message)
        }
    }

    const createListItem = (item) => {

        function rfc3986EncodeURIComponent (str) {
            return encodeURIComponent(str).replace(/[!'()*]/g, escape);
        }

        if (item.categories.includes("aapc") && item.published === true) {

            // const date = new Date(item.updatedAt);
            // const formattedDate = date.getDate() +  " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();
            const formattedCreated = new Date(item.createdAt).toLocaleDateString('en-US', {
                month: "long",  // Use "short" for abbreviated month
                day: "numeric",
                year: "numeric",
            })
            return ` <div className="flex-container width-full reverse" onclick="location.assign('blog-single.html?id=${rfc3986EncodeURIComponent(item.identifier)}');" style={{marginTop: "5%"}>
                <div className="project-left">
                    <div className="project-left-content">
                        <h1 data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                           ${item.title}
                        </h1><br/>
                        <h5>${item.author}</h5>
                        <h5 style={{float: "right"}}>${formattedCreated}</h5>
                        <h4>${item.clincher}</h4>
                        </div>
                </div>
                <div className="project-right">
                    <div className="project-right-pic" style={{background: "url(${item.photo})", backgroundSize: "cover"}} data-tilt data-tilt-glare data-tilt-max-glare="0.1"></div>
                </div>
            </div>`
        }
    }

    const getPosts = async () => {
        const data = await customFetch();
        const posts = data.reverse().map(posts => posts);
        const listItems = posts.map(t => createListItem(t)).join("")

        const insertBefore = (element, htmlString) => element.insertAdjacentHTML("afterbegin", htmlString);

        const element = document.getElementById("hotels");

        return insertBefore(element, `${listItems}`)
    }

    getPosts()


    /*fetch(BLOG_URL)
       .then(res => res.json())
       .then(console.log); */
      /*

</script>


 */}
    </div>
  );
};

export default Blog;
