import React, { useEffect, useState } from "react";
import VolunteersPostCard from "./VolunteersPostCard";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const VolunteersPost = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("https://volunteer-management-server-gilt.vercel.app/volunteers")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data
          .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
          .slice(0, 6);
        setVolunteers(sortedData);
      });
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {volunteers.map((item) => (
          <VolunteersPostCard item={item} key={item._id}></VolunteersPostCard>
        ))}
      </div>
      <div className="flex justify-end mr-8 -mt-5 mb-10">
        <Link to={"/all-volunteer-need-posts"}>
          <button className="btn btn-warning">
            <FaLongArrowAltRight /> See all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteersPost;
