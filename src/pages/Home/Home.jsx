import React from "react";
import VolunteersPost from "./VolunteersPost";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Volunteer Wave | Home</title>
      </Helmet>
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
