import { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { Helmet } from 'react-helmet';

const DashboardLayout = () => {
    const {  logOut  } = useContext(AuthContext);
    const [isAdmin] = useAdmin()
    const [isOpen, setIsOpen] = useState(false); // for mobile drawer toggle

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="flex h-screen min-h-screen relative">

            <Helmet>

                <title>KindHive |  Dashboard</title>
            </Helmet>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 h-full bg-gradient-to-r from-indigo-700 to-cyan-400 text-white p-4 transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:relative md:translate-x-0 w-64 md:min-h-screen`}
            >
                {/* Close Button (mobile only) */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-white text-2xl absolute top-4 right-4 md:hidden"
                >
                    ✖
                </button>

                <h2 className="text-3xl font-bold my-9">Dashboard</h2>

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
                                to="/dashboard/manageAllPosts"
                                className="block hover:underline"
                                onClick={() => setIsOpen(false)}
                            >
                                Manage All Posts
                            </Link>
                            <Link
                                to="/dashboard/manageVolunteers"
                                className="block hover:underline"
                                onClick={() => setIsOpen(false)}
                            >
                                Manage Volunteers
                            </Link>
                            <Link
                                to="/dashboard/manageUsers"
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
                                to="/dashboard/addVolunteerNeed"
                                className="block hover:underline"
                                onClick={() => setIsOpen(false)}
                            >
                                Add Volunteer Need Post
                            </Link>
                            <Link
                                to="/dashboard/myVolunteerNeed"
                                className="block hover:underline mb-5"
                                onClick={() => setIsOpen(false)}
                            >
                                My Volunteer Need Posts
                            </Link>
                            <Link
                                to="/dashboard/myVolunteerRequest"
                                className="block hover:underline mb-5"
                                onClick={() => setIsOpen(false)}
                            >
                                My Volunteer Request Posts
                            </Link>
                        </>
                    )}
                    <div className="border-2 bg-white "></div>
                    <div className="mt-2 block hover:underline mb-5">
                        <Link to={"/"}>
                            Home
                        </Link>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="block hover:underline mb-5"
                    >
                        Logout
                    </button>
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
            <main className="flex-1 overflow-y-auto p-4 md:p-6 h-screen">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
