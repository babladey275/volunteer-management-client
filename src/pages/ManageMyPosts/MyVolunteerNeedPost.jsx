import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyVolunteerNeedPost = () => {
  const { user } = useAuth();
  const [volunteersNeed, setVolunteersNeed] = useState([]);

  useEffect(() => {
    fetch(
      `https://volunteer-management-server-gilt.vercel.app/my-volunteers?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setVolunteersNeed(data));
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        setVolunteersNeed((prevVolunteers) =>
          prevVolunteers.filter((volunteers) => volunteers._id !== id)
        );

        fetch(
          `https://volunteer-management-server-gilt.vercel.app/volunteers-need/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your volunteer need post has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 border shadow-xl rounded-lg">
      <h2 className="text-2xl md:text-4xl text-center font-semibold my-6">
        My Volunteer Need Post: {volunteersNeed.length}
      </h2>

      <div className="p-10">
        {volunteersNeed.length === 0 ? (
          <div className="text-center text-xl font-medium text-gray-600 mb-10">
            <p>No volunteer need posts found. You can create a new one!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Deadline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {volunteersNeed.map((post) => (
                  <tr key={post._id}>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>{post.deadline}</td>
                    <td>
                      <Link to={`/volunteers-need/${post._id}`}>
                        <button className="btn btn-accent btn-xs mr-4">
                          <FaEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(post._id)}
                        className="btn btn-error btn-xs"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyVolunteerNeedPost;
