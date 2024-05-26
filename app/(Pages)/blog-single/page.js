import React from "react";

export const metadata = {
  title: "AAPC | Blog Single",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
};

const BlogSingle = () => {
  return (
    <div>
      {/* <style>
    #the-text{
        margin: 5vmax;
    }

    #hotels img{
        width: 100%;
        padding: 5%;
    }
    </style> */}

      <div data-tilt data-tilt-glare data-tilt-max-glare="0.1"></div>
      <div id="hotels">{/* <!-- partial:index.partial.html --> */}</div>

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
            return `  */}   <div class="container" style={{position: "relative"}}>
        <div  class="carousel-container row">
            <h1 class="project-title" data-tilt data-tilt-glare data-tilt-max-glare="0.1">${item.title}</h1>

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <img src="${item.photo}" style={{width: "100%"}}/>

            </div>

            <div class="stats" data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                <h3>${item.author}</h3>
                <h3 id="createdDate">Written: ${formattedCreated}</h3>
                {/* <!--<h3>stat</h3>
                <h3 style={{borderRight: "none"}}>stat</h3>--> */}
            </div>
        </div> 
        {/* {<!-- /row -->} */}
    </div> 
    {/* <!-- /container --> */}

    <div class="flex-container" style={{position: "relative"}}>
        <div class="flex-item-left">
        </div>

        <div class="flex-item-right">
            <div id="the-text" class="about-text">
                ${item.desc}
            </div>

        </div>
    </div>
 {/* `}
            return `  */}
            <div class="container" style={{position: "relative"}}>
        <div  class="carousel-container row">
            <h1 class="project-title" data-tilt data-tilt-glare data-tilt-max-glare="0.1">${item.title}</h1>

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <img src="${item.photo}" style={{width: "100%"}}/>

            </div>

            <div class="stats" data-tilt data-tilt-glare data-tilt-max-glare="0.1">
                <h3>${item.author}</h3>
                <h3 id="createdDate">Written: ${formattedCreated}</h3>
                <h3 id="updatedDate">Updated: ${formattedUpdated}</h3>
                {/* <!--<h3>stat</h3>
                <h3 style={{borderRight: "none"}}>stat</h3>--> */}
            </div>
        </div>
         {/* <!-- /row --> */}
    </div> 
    {/* <!-- /container --> */}

    <div class="flex-container" style={{position:"relative"}}>
        <div class="flex-item-left">
        </div>

        <div class="flex-item-right">
            <div id="the-text" class="about-text">
                ${item.desc}
            </div>

        </div>
    </div>`
        {/* }
    } */}
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
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'></script>
<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/js/bootstrap.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.js'></script>
<script src="/js/vanilla-tilt.js"></script>
<script src="/js/project-details.js"></script>


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
}</script>  */}
    </div>
  );
};

export default BlogSingle;
