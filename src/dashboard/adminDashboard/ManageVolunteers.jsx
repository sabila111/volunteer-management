import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageVolunteers = () => {
  const axiosSecure = useAxiosSecure();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axiosSecure.get("/volunteer-application")
      .then(res => setRequests(res.data))
      .catch(err => console.error("Failed to fetch requests:", err));
  }, [axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This volunteer request will be removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/volunteer-application/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "The request has been removed.", "success");
              setRequests(prev => prev.filter(req => req._id !== id));
            }
          });
      }
    });
  };

  const handleView = (request) => {
    Swal.fire({
      title: `<strong>Volunteer Details</strong>`,
      html: `
        <p><b>Name:</b> ${request.name}</p>
        <p><b>Email:</b> ${request.email}</p>
        <p><b>Post:</b> ${request.postTitle}</p>
        <p><b>Category:</b> ${request.category}</p>
        <p><b>Suggestion:</b> ${request.suggestion}</p>
        <p><b>Status:</b> ${request.status}</p>
      `,
      icon: "info"
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mt-6 mb-14 text-center bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text">
    Manage Volunteer Requests
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table table-fixed w-full text-left">
          <thead className="bg-gradient-to-r from-indigo-700 to-cyan-400 text-white">
            <tr>
              <th className="p-4 w-10">#</th>
              <th className="p-4 w-40">Name</th>
              <th className="p-4 w-56">Email</th>
              <th className="p-4 w-40">Post Title</th>
              <th className="p-4 w-32">Category</th>
              <th className="p-4 w-24">Status</th>
              <th className="p-4 w-56">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={req._id} className="hover:bg-gray-100 transition">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{req.name}</td>
                <td className="p-4 truncate">{req.email}</td>
                <td className="p-4">{req.postTitle}</td>
                <td className="p-4 capitalize">{req.category}</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                    {req.status}
                  </span>
                </td>
                <td className="p-4 space-x-2">
                  <button
                    onClick={() => handleView(req)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(req._id)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No volunteer requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageVolunteers;
