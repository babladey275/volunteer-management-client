import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AddVolunteerPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();

  const handleAddPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    fetch("http://localhost:5000/volunteers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(initialData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your volunteer post successfully added!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border-2 space-y-6 my-8">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Add Volunteer Need Post
      </h2>

      <form onSubmit={handleAddPost} className="space-y-6">
        {/* Thumbnail */}
        <div>
          <label className="block text-sm font-medium">Thumbnail</label>
          <input
            type="url"
            name="thumbnail"
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
            defaultValue=""
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
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddVolunteerPost;
