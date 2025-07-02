import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/user")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Failed to fetch users:", err));
  }, [axiosSecure]);

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/user/admin/${id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Success!", "User is now an Admin.", "success");
          setUsers(prev => prev.map(u => u._id === id ? { ...u, role: "admin" } : u));
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been removed.", "success");
              setUsers(users.filter(user => user._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mt-6 mb-10 text-center bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text">Manage Users</h2>

      <div className="overflow-x-auto shadow-lg rounded-lg max-w-5xl mx-auto">
        <table className="table table-fixed w-full text-left">
          <thead className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
            <tr>
              <th className="p-4 w-12">#</th>
              <th className="p-4 w-40">Name</th>
              <th className="p-4 w-64">Email</th>
              <th className="p-4 w-28">Role</th>
              <th className="p-4 w-64">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-100 transition">
                <td className="p-4">{index + 1}</td>
                <td className="p-4 font-medium">{user.name || "No Name"}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4 capitalize">{user.role || "user"}</td>
                <td className="p-4 space-x-2">
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    disabled={user.role === "admin"}
                    className={`px-4 py-1 rounded-md text-white font-semibold ${
                      user.role === "admin" ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="px-4 py-1 rounded-md text-white font-semibold bg-red-600 hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
