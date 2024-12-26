import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MyVolunteerRequest = () => {
  const { user } = useAuth();
  const [volunteerRequest, setVolunteerRequest] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/volunteer-request?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setVolunteerRequest(data));
  }, [user.email]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        setVolunteerRequest((prevRequests) =>
          prevRequests.filter((request) => request._id !== id)
        );

        fetch(`http://localhost:5000/volunteer-request/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your volunteer request has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto border shadow-xl rounded-lg my-10 p-10">
      <h2 className="text-2xl md:text-4xl text-center font-semibold my-6">
        My Volunteer Request Posts: {volunteerRequest.length}
      </h2>
      <div>
        {volunteerRequest.length === 0 ? (
          <div className="text-center text-xl font-medium text-gray-600 mb-10">
            <p>
              No volunteer requests found. You can create a new volunteer
              request!
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {volunteerRequest.map((request) => (
                  <tr key={request._id}>
                    <td>{request.title}</td>
                    <td>{request.category}</td>
                    <td>{request.location}</td>
                    <td>{request.deadline}</td>
                    <td>
                      <button
                        onClick={() => handleCancel(request._id)}
                        className="btn btn-error btn-xs"
                      >
                        Cancel
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

export default MyVolunteerRequest;
