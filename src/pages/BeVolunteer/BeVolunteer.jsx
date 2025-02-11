import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const BeVolunteer = () => {
  const data = useLoaderData();
  const { user } = useAuth();
  const [volunteersLeft, setVolunteersLeft] = useState(data.noOfVolunteers);

  const {
    _id,
    thumbnail,
    title,
    category,
    description,
    location,
    deadline,
    name,
    email,
  } = data;

  const submitRequest = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    initialData.volunteer_id = _id;

    // console.log(initialData);

    fetch(
      "https://volunteer-management-server-gilt.vercel.app/volunteer-request",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(initialData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your request has been submitted!",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => setVolunteersLeft(volunteersLeft - 1));
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Volunteer Wave | Be Volunteer</title>
      </Helmet>
      <div className="max-w-4xl mx-auto p-6 my-8 border bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Volunteer for {title}
        </h2>

        <form onSubmit={submitRequest}>
          {/* Thumbnail Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium">Thumbnail</label>
            <input
              name="thumbnail"
              type="url"
              value={thumbnail}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>

          {/* Post Title, Category, Location, No. of Volunteers Needed */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="flex gap-6">
              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Post Title
                </label>
                <input
                  name="title"
                  type="text"
                  value={title}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <input
                  name="category"
                  type="text"
                  value={category}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Location
                </label>
                <input
                  name="location"
                  type="text"
                  value={location}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  No. of Volunteers Needed
                </label>
                <input
                  name="noOfVolunteers"
                  type="number"
                  value={volunteersLeft}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Deadline
                </label>
                <input
                  name="deadline"
                  type="text"
                  value={deadline}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Organizer Name
                </label>
                <input
                  name="organizerName"
                  type="text"
                  value={name}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-2">
                Organizer Email
              </label>
              <input
                name="organizerEmail"
                type="email"
                value={email}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={description}
              rows="4"
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>

          {/* Volunteer Info */}
          <div className="mb-6">
            <div className="text-lg font-semibold mb-2">Volunteer Info</div>
            <div className="flex gap-6">
              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Volunteer Name
                </label>
                <input
                  name="volunteerName"
                  type="text"
                  value={user.displayName}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-2">
                  Volunteer Email
                </label>
                <input
                  name="volunteerEmail"
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Suggestion */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Suggestion</label>
            <textarea
              name="suggestion"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your suggestion"
            />
          </div>

          {/* Status */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Status</label>
            <input
              name="status"
              type="text"
              value="Requested"
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>

          {/* Request Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary w-full py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
            >
              Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BeVolunteer;
