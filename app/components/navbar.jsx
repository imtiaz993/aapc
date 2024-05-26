import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md">
      <div class="container-fluid">
        <Link class="navbar-brand d-md-none" href="/">
          <img loading="lazy" src="/img/AAPC_Logo.png" alt="" />
        </Link>
        <button
          class="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/services">
                Services
              </Link>
            </li>
            <Link class="navbar-brand d-none d-md-block" href="/">
              <img loading="lazy" src="/img/AAPC_Logo.png" alt="" />
            </Link>
            <li class="nav-item">
              <Link class="nav-link" href="/projects">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/contact">
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
