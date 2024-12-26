import React from "react";
import MyVolunteerNeedPost from "./MyVolunteerNeedPost";
import MyVolunteerRequest from "./MyVolunteerRequest";

const ManageMyPosts = () => {
  return (
    <div>
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
