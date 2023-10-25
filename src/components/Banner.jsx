import React from "react";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <section className="inner">
        <div>
          <h1 className="fw-bold">Explore Community</h1>
          <h2 className="red">
            Meet the Tech Innovators who fuel our community’s growth.
          </h2>
          <h3>
            Whether you're seeking collaboration, finding talents, or simply
            looking to expand your network, you've come to the right place.
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Banner;
