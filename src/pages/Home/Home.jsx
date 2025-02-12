import React from "react";
import VolunteersPost from "./VolunteersPost";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Review from "./Review";

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
      <section>
        <Review></Review>
      </section>
    </div>
  );
};

export default Home;
