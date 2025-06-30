import { useContext, useEffect, useState } from "react";
import { FaClipboard, FaHeart } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [myStats, setMyStats] = useState({
    myPosts: 0,
    myRequests: 0,
  });

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postRes = await axiosSecure.get(`/volunteer?email=${user.email}`);
        setMyStats((prev) => ({ ...prev, myPosts: postRes.data.length }));

        const requestRes = await axiosSecure.get(`/volunteer-application?email=${user.email}`);
        setMyStats((prev) => ({ ...prev, myRequests: requestRes.data.length }));
      } catch (err) {
        console.error("User profile fetch failed:", err);
      }
    };

    fetchData();
  }, [axiosSecure, user.email]);

  return (
    <div className="flex justify-center py-10 px-4 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src={user.photoURL}
              alt="User"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
            />
          </div>
          <h2 className="text-3xl font-bold mt-4 text-gray-800">{user.displayName}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-400 mt-1">Role: User</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <StatCard icon={<FaClipboard />} label="My Posts" value={myStats.myPosts} bg="bg-yellow-100" />
            <StatCard icon={<FaHeart />} label="Volunteer Requests" value={myStats.myRequests} bg="bg-pink-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, bg }) => (
  <div className={`p-4 rounded-lg shadow-md ${bg} flex items-center gap-4`}>
    <div className="text-3xl text-indigo-600">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold">{label}</h4>
      <p className="text-xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default UserProfile;
