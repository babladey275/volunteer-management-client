import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateNeedPost = () => {
  const { user } = useAuth();
  const data = useLoaderData();
  const {
    _id,
    thumbnail,
    title,
    description,
    category,
    location,
    noOfVolunteers,
    deadline,
  } = data;

  const [startDate, setStartDate] = useState(new Date(deadline));

  const submitUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    //send update data to the server
    fetch(
      `https://volunteer-management-server-gilt.vercel.app/volunteers-need/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(initialData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Volunteer post updated successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border-2 space-y-6 my-8">
      <Helmet>
        <title>Volunteer Wave | Update Post</title>
      </Helmet>
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Update Your Volunteer Need Post
      </h2>

      <form onSubmit={submitUpdate} className="space-y-6">
        {/* Thumbnail */}
        <div>
          <label className="block text-sm font-medium">Thumbnail</label>
          <input
            type="url"
            name="thumbnail"
            defaultValue={thumbnail}
            placeholder="Enter thumbnail URL"
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        {/* Post Title */}
        <div>
          <label className="block text-sm font-medium">Post Title</label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            placeholder="Enter post title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            defaultValue={description}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            placeholder="Enter description"
            rows="4"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            defaultValue={category}
            name="category"
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            required
          >
            <option value="" disabled>
              Pick a Category
            </option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social-service">Social Service</option>
            <option value="animal-welfare">Animal Welfare</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={location}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            placeholder="Enter location"
            required
          />
        </div>

        {/* No. of Volunteers Needed and Deadline (Single Row) */}
        <div className="flex items-center space-x-4">
          {/* No. of Volunteers Needed */}
          <div className="flex-1">
            <label className="block text-sm font-medium">
              No. of Volunteers Needed
            </label>
            <input
              type="number"
              name="noOfVolunteers"
              defaultValue={noOfVolunteers}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
              placeholder="Enter number of volunteers"
              min="1"
              required
            />
          </div>

          {/* Deadline */}
          <div className="">
            <label className="block text-sm font-medium mb-2">Deadline</label>
            <span>
              <DatePicker
                name="deadline"
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="border-2 border-gray-300"
                required
              />
            </span>
          </div>
        </div>

        {/* Organizer Name */}
        <div>
          <label className="block text-sm font-medium">Organizer Name</label>
          <input
            type="text"
            name="name"
            value={user.displayName}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            placeholder="Organizer Name"
            readOnly
          />
        </div>

        {/* Organizer Email */}
        <div>
          <label className="block text-sm font-medium">Organizer Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            placeholder="Organizer Email"
            readOnly
          />
        </div>

        {/* Add Post Button */}
        <div>
          <button type="submit" className="w-full btn btn-primary">
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateNeedPost;
