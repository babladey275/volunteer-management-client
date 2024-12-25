import React from "react";
import { FaCalendarAlt, FaLocationArrow, FaUsers } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const VolunteerPostDetails = () => {
  const data = useLoaderData();

  const {
    _id,
    thumbnail,
    title,
    category,
    description,
    location,
    noOfVolunteers,
    deadline,
    name,
    email,
  } = data;

  return (
    <div className="bg-base-100 py-12">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Program Thumbnail */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <img src={thumbnail} alt={title} className="w-full h-80" />
        </div>

        {/* Title and Category */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
          <span className="badge badge-lg bg-teal-500 text-white">
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">{description}</p>

        {/* Location, Number of Volunteers, and Deadline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Location */}
          <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaLocationArrow className="text-red-500 text-3xl" />
            <p className="text-gray-600">{location}</p>
          </div>

          {/* Number of Volunteers */}
          <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaUsers className="text-blue-500 text-3xl" />
            <p className="text-gray-600">Volunteers Needed: {noOfVolunteers}</p>
          </div>

          {/* Deadline */}
          <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaCalendarAlt className="text-green-500 text-3xl" />
            <p className="text-gray-600">Deadline: {deadline}</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Contact Information
          </h3>
          <p className="text-gray-700 mt-3">Organizer: {name}</p>
          <p className="text-gray-700">
            Email:{" "}
            <a className="text-blue-500 hover:text-blue-700 transition duration-200">
              {email}
            </a>
          </p>
        </div>

        {/* Be a Volunteer Button */}
        <div className="flex justify-center mt-8">
          <Link to={`/beVolunteer/${_id}`} className="btn btn-primary w-full">
            Be a Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPostDetails;
