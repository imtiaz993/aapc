const Topper = () => {
  return (
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

      <div className="top-wrapper">
        <h1
          className="topper-title"
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.1"
        >
          Blog Posts
        </h1>
        <div className="title-wrapper">
          <h3 className="topper-subtitle">What We Do</h3>
        </div>

        <h3 id="planning-top" className="topper-blurb">
          Explore our blog for the latest news and tips on everything
          architecture related.
        </h3>
      </div>
    </div>
  );
};

export default Topper;
