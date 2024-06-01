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

const BlogSingle = () => {
  return (
    <div>
      <Navbar />
      <div data-tilt data-tilt-glare data-tilt-max-glare="0.1"></div>
      <div id="hotels">{/* <!-- partial:index.partial.html --> */}</div>
      <Footer />
      {/* <script>
    function GetURLParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam)
            {
                return sParameterName[1];
            }
        }
    }

    const BLOG_URL = 'https://azark-blog-backend.onrender.com/api/posts/title/';
    const ID = GetURLParameter('id').toString();

    async function customFetch() {
        try {
            const res = await fetch(BLOG_URL + ID);
            if (!res.ok) {
                throw new Error(`${res.status} : ${res.statusText}`)
            }

            const json = await res.json();
            return json;
        } catch (err) {
            console.error(err.message)
        }
    }

    const createListItem = (item) => {
        if (item.categories.includes("aapc")) {
            document.title = `AAPC | ${item.title}`;
            document.querySelector('meta[name="keywords"]').setAttribute("content", item.keywords);
            // const date = new Date(item.updatedAt);
            // const formattedDate = date.getDate() +  " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear()
            const formattedCreated = new Date(item.createdAt).toLocaleDateString('en-US', {
                month: "long",  // Use "short" for abbreviated month
                day: "numeric",
                year: "numeric",
            })
            const formattedUpdated =  new Date(item.updatedAt).toLocaleDateString('en-US', {
                month: "long",  // Use "short" for abbreviated month
                day: "numeric",
                year: "numeric",
            })
            //console.log(formattedCreated === formattedUpdated)

            // ISSUE: technically the dom elements are not loaded yet,
            // if (formattedCreated === formattedUpdated) document.getElementById('updatedDate').classList.add('hidden')
            // console.log(document.getElementById('updatedDate'));
            if(formattedCreated === formattedUpdated){
            return `  */}{" "}
      {/* <div className="container" style={{ position: "relative" }}>
        <div className="carousel-container row">
          <h1
            className="project-title"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            ${item.title}
          </h1>

          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <img src="${item.photo}" style={{ width: "100%" }} />
          </div>

          <div
            className="stats"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            <h3>${item.author}</h3>
            <h3 id="createdDate">Written: ${formattedCreated}</h3>
          </div>
        </div>
      </div> */}
      {/* <!-- /container --> */}
      {/* <div className="flex-container" style={{ position: "relative" }}>
        <div className="flex-item-left"></div>

        <div className="flex-item-right">
          <div id="the-text" className="about-text">
            ${item.desc}
          </div>
        </div>
      </div> */}
      {/* `}
            return `  */}
      {/* <div className="container" style={{ position: "relative" }}>
        <div className="carousel-container row">
          <h1
            className="project-title"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            ${item.title}
          </h1>

          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <img src="${item.photo}" style={{ width: "100%" }} />
          </div>

          <div
            className="stats"
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.1"
          >
            <h3>${item.author}</h3>
            <h3 id="createdDate">Written: ${formattedCreated}</h3>
            <h3 id="updatedDate">Updated: ${formattedUpdated}</h3>
          </div>
        </div>
      </div> */}
      {/* <!-- /container --> */}
      {/* <div className="flex-container" style={{ position: "relative" }}>
        <div className="flex-item-left"></div>

        <div className="flex-item-right">
          <div id="the-text" className="about-text">
            ${item.desc}
          </div>
        </div>
      </div> */}
      `
      {/* 
    const getPosts = async () => {
        const data = await customFetch();
        const post = createListItem(data)


        const insertBefore = (element, htmlString) => element.insertAdjacentHTML("afterbegin", htmlString);

        const element = document.getElementById("hotels");

        return insertBefore(element, `${post}`)
    }

    getPosts()

</script>


<script>
    function navTest() {
        location.assign('./project-details-template.html');
    }
</script>

<!-- partial -->




  */}
    </div>
  );
};

export default BlogSingle;
