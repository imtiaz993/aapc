"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div
      style={{
        position: "relative",
        width: "85%",
        borderTop: "rgba(255, 255, 255, 0.40) solid 1px",
        margin: "auto",
      }}
    >
      <footer
        style={{
          position: "relative",
          borderBottom: "rgba(255, 255, 255, 0.40) solid 1px",
          marginBottom: "1vh",
          display: "flex",
        }}
      >
        <div className="footer-left">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            src="/img/AAPC_Logo.png"
            id="footer-img"
            className="nav-img h-auto"
            alt="AAPC_Logo"
          />

          {/* <img
            loading="lazy"
            src="/img/AAPC_Logo.png"
            id="footer-img"
            className="nav-img"
            alt="AAPC_Logo"
          /> */}
          <p
            style={{
              opacity: 0.6,
              marginBottom: "3vh",
              lineHeight: 2.5,
            }}
          >
            AAPC is an all-encompassing, conscious team of experts that take
            pride in investing in the future of buildings, our clients and their
            clients.
          </p>
        </div>
        <div className="footer-middle">
          <h2
            style={{
              borderBottom: "#FFDC32 2px solid",
              display: "inline-block",
            }}
          >
            Contact Us
          </h2>
          <p
            onClick={() => {
              window.open(
                "https://maps.app.goo.gl/3S2kgXWk48vREADu9",
                "_blank"
              );
            }}
          >
            <span className="fas fa-location-arrow text-white"></span> 130 W
            37th Street New York, NY 10018
          </p>
          <p
            onClick={() => {
              window.location.href = "tel:212-547-9050";
            }}
          >
            <span className="fas fa-phone text-white"></span>212-547-9050
          </p>
          <p
            onClick={() => {
              window.location.href = "mailto:admin@aapc.nyc";
            }}
          >
            <span className="fas fa-envelope text-white"></span>admin@aapc.nyc
          </p>
        </div>
        <div className="footer-right">
          <h2
            style={{
              borderBottom: "#FFDC32 2px solid",
              display: "inline-block",
            }}
          >
            Pages
          </h2>
          <p
            onClick={() => {
              window.location.href="/";
            }}
          >
            Home
          </p>
          <p
            onClick={() => {
              router.push("/services");
            }}
          >
            Services
          </p>
          <p
            onClick={() => {
              router.push("/projects");
            }}
          >
            Projects
          </p>
          <p
            onClick={() => {
              router.push("/contact");
            }}
          >
            Contact
          </p>
          <p
            onClick={() => {
              router.push("/blog");
            }}
          >
            Blog
          </p>
        </div>
      </footer>
      <Link className="pptos" href="/privacy-policy">
        Privacy Policy
      </Link>
    </div>
  );
};

export default Footer;
