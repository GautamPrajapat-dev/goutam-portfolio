import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-right" className="container text-danger">
      hellow gotuam
    </div>
  );
};

export default Home;
