import React from "react";
import { Link } from "react-router-dom";

const VolunteersPostCard = ({ item }) => {
  const { _id, thumbnail, title, category, deadline } = item;

  return (
    <div className="card w-full bg-base-100 border">
      <div className="card-body p-5">
        <img src={thumbnail} alt="" className="h-64 w-full rounded-md" />
        <h3 className="card-title">{title}</h3>
        <div className="flex justify-between py-4">
          <p>
            <span className="font-semibold">Category: </span>
            {category}
          </p>
          <p>
            <span className="font-semibold">Deadline: </span>
            {deadline}
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/volunteers/${_id}`}>
            <button className="btn btn-outline">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteersPostCard;
