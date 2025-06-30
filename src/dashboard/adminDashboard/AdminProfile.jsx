import { useContext, useEffect, useState } from "react";
import { FaUsers, FaClipboardList, FaHandsHelping } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  const [adminData, setAdminData] = useState(null);
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalUsers: 0,
    totalVolunteers: 0,
  });

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await axiosSecure.get("/user");
        const admin = usersRes.data.find((u) => u.email === user.email);
        setAdminData(admin);
        setStats((prev) => ({ ...prev, totalUsers: usersRes.data.length }));

        const postsRes = await axiosSecure.get("/volunteer");
        setStats((prev) => ({ ...prev, totalPosts: postsRes.data.length }));

        const requestRes = await axiosSecure.get("/volunteer-application");
        setStats((prev) => ({ ...prev, totalVolunteers: requestRes.data.length }));
      } catch (err) {
        console.error("Admin data load failed:", err);
      }
    };

    fetchData();
  }, [axiosSecure]);

  return (
    <div className="flex justify-center py-10 px-4  min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
        {adminData ? (
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src={user.photoURL}
                alt="Admin"
                className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-md"
              />
            </div>
            <h2 className="text-3xl font-bold mt-4 text-gray-800">{adminData.name || "Admin"}</h2>
            <p className="text-gray-500">{adminData.email}</p>
            <p className="text-sm text-gray-400 mt-1">Role: Admin</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <StatCard icon={<FaClipboardList />} label="Total Posts" value={stats.totalPosts} bg="bg-blue-100" />
              <StatCard icon={<FaUsers />} label="Registered Users" value={stats.totalUsers} bg="bg-green-100" />
              <StatCard icon={<FaHandsHelping />} label="Volunteers" value={stats.totalVolunteers} bg="bg-purple-100" />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, bg }) => (
  <div className={`p-4 rounded-lg shadow-md ${bg} flex items-center gap-4`}>
    <div className="text-3xl text-cyan-600">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold">{label}</h4>
      <p className="text-xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default AdminProfile;
