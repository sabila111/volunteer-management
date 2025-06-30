import { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin()
  const [isOpen, setIsOpen] = useState(false); // for mobile drawer toggle

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 h-full bg-gradient-to-r from-indigo-700 to-cyan-400 text-white p-4 transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 w-64 md:min-h-screen`}
      >
        {/* Close Button (mobile only) */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl absolute top-4 right-4 md:hidden"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <nav className="space-y-4">
          {isAdmin ? (
            <>
              <Link
                to="/dashboard/adminProfile"
                className="block hover:underline"
                onClick={() => setIsOpen(false)}
              >
                My Profile
              </Link>
              <Link
                to="/dashboard/admin/manage-posts"
                className="block hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Manage All Posts
              </Link>
              <Link
                to="/dashboard/admin/manage-volunteers"
                className="block hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Manage Volunteers
              </Link>
              <Link
                to="/dashboard/admin/manage-users"
                className="block hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Manage Users
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard/userProfile"
                className="block hover:underline"
                onClick={() => setIsOpen(false)}
              >
                My
              </Link>
              <Link
                to="/dashboard/user/add-post"
                className="block hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Add Volunteer Need Post
              </Link>
              <Link
                to="/dashboard/user/manage-posts"
                className="block hover:underline mb-5"
                onClick={() => setIsOpen(false)}
              >
                Manage My Posts
              </Link>
            </>
          )}
          <div className="border-2 bg-white "></div>
          <div className="mt-2">
            <Link to={"/"}>
               Home
            </Link>
          </div>
        </nav>
      </div>

      {/* Hamburger Menu (mobile only) */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-4 left-4 text-3xl md:hidden z-30 text-cyan-700"
      >
        ☰
      </button>

      {/* Main Content */}
      <main className="flex-1  w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
