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
      <div className="text-center my-6 md:my-10">
        <h2 className="md:text-3xl text-xl font-bold text-gray-700">
          Upcoming Volunteer Opportunities
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {volunteers.map((item) => (
          <VolunteersPostCard item={item} key={item._id}></VolunteersPostCard>
        ))}
      </div>
      <div className="flex justify-center mr-8 -mt-5 mb-10">
        <Link to={"/all-volunteer-need-posts"}>
          <button className="btn bg-[#2985b4] hover:bg-[#275C87] text-white md:text-xl">
            See all <FaLongArrowAltRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteersPost;
