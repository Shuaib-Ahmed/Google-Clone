import React from "react";
import showcaseImage from "../Image/showcase-1.jpg";

import { Navbar } from "../Components";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="emptySection">
        <img src={showcaseImage} alt="showcase pics" width={300} />
        <h1>DOODLE IS THE NEW WAY TO SEARCH</h1>
      </section>
    </>
  );
};

export default Home;
