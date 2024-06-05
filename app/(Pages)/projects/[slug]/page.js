"use client";

import { useEffect } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";
import $ from "jquery";
import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import Detail from "./components/detail";
import { projects } from "./data";
import "../../../../public/css/home.css";
import "../../../../public/css/project-details.css";

const ProjectDetail = () => {
  const pathname = usePathname();
  const project = projects.find(
    (project) => project.slug === pathname.split("/")[2]
  );

//   useEffect(() => {
//     $("#myCarousel").carousel({
//       interval: false,
//     });
//     $("#carousel-thumbs").carousel({
//       interval: false,
//     });

//     // handles the carousel thumbnails
//     // https://stackoverflow.com/questions/25752187/bootstrap-carousel-with-thumbnails-multiple-carousel
//     $("[id^=carousel-selector-]").click(function () {
//       var id_selector = $(this).attr("id");
//       var id = parseInt(id_selector.substr(id_selector.lastIndexOf("-") + 1));
//       $("#myCarousel").carousel(id);
//     });
//     // Only display 3 items in nav on mobile.
//     if ($(window).width() < 575) {
//       $("#carousel-thumbs .row div:nth-child(4)").each(function () {
//         var rowBoundary = $(this);
//         $('<div class="row mx-0">')
//           .insertAfter(rowBoundary.parent())
//           .append(rowBoundary.nextAll().addBack());
//       });
//       $("#carousel-thumbs .carousel-item .row:nth-child(even)").each(
//         function () {
//           var boundary = $(this);
//           $('<div class="carousel-item">')
//             .insertAfter(boundary.parent())
//             .append(boundary.nextAll().addBack());
//         }
//       );
//     }
//     // Hide slide arrows if too few items.
//     if ($("#carousel-thumbs .carousel-item").length < 2) {
//       $("#carousel-thumbs [class^=carousel-control-]").remove();
//       $(".machine-carousel-container #carousel-thumbs").css("padding", "0 5px");
//     }
//     // when the carousel slides, auto update
//     $("#myCarousel").on("slide.bs.carousel", function (e) {
//       var id = parseInt($(e.relatedTarget).attr("data-slide-number"));
//       $("[id^=carousel-selector-]").removeClass("selected");
//       $("[id=carousel-selector-" + id + "]").addClass("selected");
//     });
//     // when user swipes, go next or previous
//     $("#myCarousel").swipe({
//       fallbackToMouseEvents: true,
//       swipeLeft: function (e) {
//         $("#myCarousel").carousel("next");
//       },
//       swipeRight: function (e) {
//         $("#myCarousel").carousel("prev");
//       },
//       allowPageScroll: "vertical",
//       preventDefaultEvents: false,
//       threshold: 75,
//     });
//     /*
// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
//   event.preventDefault();
//   $(this).ekkoLightbox();
// });
// */

//     $("#myCarousel .carousel-item img").on("click", function (e) {
//       var src = $(e.target).attr("data-remote");
//       if (src) $(this).ekkoLightbox();
//     });
//   }, []);

  return (
    <>
      <Head>
        <title>{project.name}</title>
        <meta name="description" content={project.about} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
        />
      </Head>
      <div>
        <Navbar />
        <Topper project={project} />
        <Detail project={project} />
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
