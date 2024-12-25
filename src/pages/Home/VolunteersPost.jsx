import React, { useEffect, useState } from "react";
import VolunteersPostCard from "./VolunteersPostCard";

const VolunteersPost = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/volunteers")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data
          .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
          .slice(0, 6);
        setVolunteers(sortedData);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {volunteers.map((item) => (
        <VolunteersPostCard item={item} key={item._id}></VolunteersPostCard>
      ))}
    </div>
  );
};

export default VolunteersPost;
