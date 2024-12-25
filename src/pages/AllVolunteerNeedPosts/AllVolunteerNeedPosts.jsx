import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllVolunteerNeedPosts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {posts.map((post) => (
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
                  <button className="btn btn-outline">View Details</button>
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
