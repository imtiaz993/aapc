import "../../../public/css/home.css";
import "../../../public/css/blog.css";

export const metadata = {
  title: "AAPC | Blog Posts",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const Blog = () => {
  return (
    <div>
      <div style={{ position: "relative", height: "90vh" }}>
        <div
          style={{
            position: "absolute",
            width: "45%",
            height: "60vh",
            background:
              "linear-gradient(127deg, rgba(176, 156, 59, .49) 0%, rgba(125, 105, 3, 0.28) 100%)",
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
            background: "url('/img/service-top.jpg')",
            left: "15%",
            top: "15vh",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            backgroundSize: "cover",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: "45%",
            height: "60vh",
            background:
              "url('https://images.unsplash.com/photo-1604933762023-7213af7ff7a7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
            Blog Posts
          </h1>
          <div class="title-wrapper">
            <h3 class="topper-subtitle">What We Do</h3>
          </div>

          <h3 id="planning-top" class="topper-blurb">
            Explore our blog for the latest news and tips on everything
            architecture related.
          </h3>
        </div>
      </div>

      <div class="flex-container" style={{ position: "relative" }}>
        <div id="side" class="flex-item-left">
          <h1 class="left-text" id="hotels-title">
            Recent Posts
          </h1>
        </div>
        <div
          class="flex-item-right"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div id="hotels"></div>
        </div>
      </div>

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
            return ` <div class="flex-container width-full reverse" onclick="location.assign('blog-single.html?id=${rfc3986EncodeURIComponent(item.identifier)}');" style={{marginTop: "5%"}>
                <div class="project-left">
                    <div class="project-left-content">
                        <h1 data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                           ${item.title}
                        </h1><br/>
                        <h5>${item.author}</h5>
                        <h5 style={{float: "right"}}>${formattedCreated}</h5>
                        <h4>${item.clincher}</h4>
                        </div>
                </div>
                <div class="project-right">
                    <div class="project-right-pic" style={{background: "url(${item.photo})", backgroundSize: "cover"}} data-tilt data-tilt-glare data-tilt-max-glare="0.1"></div>
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



<script>
    $(document).scroll(function () {
        var wrapper = $('#side');
        var box = $('#hotels-title');

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

 */}
    </div>
  );
};

export default Blog;
