import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allVolunteer'>All volunteer Need posts</NavLink></li>

    </>
    const links2 = <>
        <li><NavLink to='/addVolunteer'>Add Volunteer need Post</NavLink></li>
        <li><NavLink to='/manage'>Manage My Posts</NavLink></li>


    </>



    return (
        <div className="navbar bg-base-100 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {links}
                        <li>
                            <a>My Profile</a>
                            <ul className="p-2">
                                {links2}
                            </ul>
                        </li>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-semibold"><span className="text-4xl font-bold text-indigo-600 -mr-2 mb-3">Kind</span>Hive</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="  active mx-5  flex justify-center items-center gap-6 px-1 menu-horizontal font-medium text-lg ">

                    {links}
                    <li className="relative">
                        <details className="group">
                            <summary className="flex items-center cursor-pointer  text-black group-open:text-blue-600 group-open:border-b-2 border-blue-600">
                                My Profile
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-2 h-4 w-4 "
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </summary>
                            <ul className="absolute left-0 p-4 my-2 hidden w-60 rounded-md bg-white shadow-md group-open:block">
                                {links2}
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="relative group flex items-center gap-1 md:gap-4 lg:gap-4">
                            {user.photoURL && (
                                <>
                                 
                                    <img
                                        src={user.photoURL}
                                        alt=""
                                        className="w-12 h-12 rounded-full cursor-pointer"
                                    />

                                 
                                    <div className="absolute top-16 left-0 hidden w-40 bg-white shadow-md p-3 rounded-lg text-center group-hover:flex flex-col gap-2">
                                        <span className="text-sm font-medium text-gray-700">{user.displayName}</span>
                                        <button
                                            onClick={handleSignOut}
                                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>


                        :
                        <div className='flex items-center gap-4'>
                            <Link to={'/login'}>
                                <button className="py-3 px-5 text-white font-medium rounded-lg bg-gradient-to-r from-orange-400 to-orange-600  ">Login</button>
                            </Link>
                            <Link to={'/register'}>
                                <button className="py-3 px-5 text-white font-medium rounded-lg bg-gradient-to-r from-orange-400 to-orange-600">Register</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;