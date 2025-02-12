import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const AllVolunteerNeedPosts = () => {
  const posts = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Volunteer Wave | All Volunteer Need Post</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-bold text-center my-6">
          Volunteer Opportunities
        </h1>
        <p className="text-center text-lg mb-6">
          Find volunteer opportunities that match your interests and skills.
        </p>
      </div>
      {/* Search Input */}
      <div className="mt-8 mb-4 mr-8 text-right">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by post title..."
          className="input input-bordered border-2 w-full md:w-1/3 lg:w-1/4 mx-auto"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {filteredPosts.map((post) => (
          <div key={post._id} className="card w-full bg-base-100 border">
            <div className="card-body p-5">
              <img
                src={post.thumbnail}
                alt=""
                className="h-64 w-full rounded-md"
              />
              <h3 className="card-title">{post.title}</h3>
              <div className="flex justify-between py-4">
                <p>
                  <span className="font-semibold">Category: </span>
                  {post.category}
                </p>
                <p>
                  <span className="font-semibold">Deadline: </span>
                  {post.deadline}
                </p>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/volunteers/${post._id}`}>
                  <button className="btn bg-[#2985b4] hover:bg-[#275C87] text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerNeedPosts;
