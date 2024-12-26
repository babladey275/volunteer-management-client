import React from "react";
import VolunteersPost from "./VolunteersPost";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <VolunteersPost></VolunteersPost>
      </section>
    </div>
  );
};

export default Home;
