import React from "react";
import MyVolunteerNeedPost from "./MyVolunteerNeedPost";
import MyVolunteerRequest from "./MyVolunteerRequest";
import { Helmet } from "react-helmet-async";

const ManageMyPosts = () => {
  return (
    <div>
      <Helmet>
        <title>Volunteer Wave | Manage My Posts</title>
      </Helmet>
      <section>
        <MyVolunteerNeedPost></MyVolunteerNeedPost>
      </section>
      <section>
        <MyVolunteerRequest></MyVolunteerRequest>
      </section>
    </div>
  );
};

export default ManageMyPosts;
