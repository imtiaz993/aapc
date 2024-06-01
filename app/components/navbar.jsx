"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand d-md-none" href="/">
          <img loading="lazy" src="/img/AAPC_Logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                aria-current="page"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname.includes("/services") ? "active" : ""
                }`}
                href="/services"
              >
                Services
              </Link>
            </li>
            <Link className="navbar-brand d-none d-md-block" href="/">
              <img loading="lazy" src="/img/AAPC_Logo.png" alt="" />
            </Link>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname.includes("/projects") ? "active" : ""
                }`}
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname.includes("/contact") ? "active" : ""
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
