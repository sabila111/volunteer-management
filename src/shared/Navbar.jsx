import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDarkMode(savedTheme === 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((pre) => !pre);
        const newTheme = !isDarkMode ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li className="text-white"><NavLink to='/' className={`dark:text-white`}>Home</NavLink></li>
        <li className="text-white"><NavLink to='/allVolunteerNeed' className={`dark:text-white`}>All volunteer Need posts</NavLink></li>

    </>
    const links2 = <>
        <li className="text-black"></li>
        <li></li>


    </>



    return (
       <div className="bg-gradient-to-r from-cyan-400 to-indigo-700  text-black dark:text-white">
         <div className="navbar max-w-7xl mx-auto  py-4  text-black  relative z-[20]">
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
                        className=" dropdown-content bg-indigo-600 mt-3 z-[50] p-2 shadow  rounded-box w-52">
                        {links}
                        <li>
                            <a className="dark:bg-gray-800 p-4 text-black dark:text-white">My Profile</a>
                            <ul className="p-2">
                                {links2}
                            </ul>
                        </li>

                    </ul>
                </div>
                <a className="text-xl font-semibold"><span className="text-4xl font-bold text-indigo-600  mb-3">Kind</span>Hive</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="  active mx-5  flex justify-center items-center gap-6 px-1 menu-horizontal font-medium text-lg ">

                    {links}
                    {/* <li className="relative">
                        <details className="group">
                            <summary className="flex items-center cursor-pointer  group-open:text-indigo-500 group-open:border-b-2 border-indigo-500    dark:text-white">
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
                            <ul className="absolute left-0 p-4 my-2 hidden w-60 rounded-md bg-white shadow-md z-[50] group-open:block">
                                {links2}
                            </ul>
                        </details>
                    </li> */}

                </ul>
            </div>
            <div className="navbar-end gap-2 relative z-[50]">
                {
                    user ?
                    <div className="flex items-center gap-1 md:gap-4 lg:gap-4">
                    {user.photoURL && (
                        <div className="relative">
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-12 h-12 rounded-full cursor-pointer"
                                onClick={toggleDropdown}
                            />

                            {isDropdownOpen && (
                                <div className="absolute -right-10 mt-2 w-48 bg-white shadow-md rounded-lg p-3 z-[100]">
                                    <span className="block pb-2 text-center text-sm font-medium text-gray-700">{user.displayName}</span>
                                    <NavLink to='/addVolunteerNeed' className={({ isActive }) => 
    `block py-2 text-black text-center rounded-lg ${
      isActive ? 'bg-gradient-to-r from-cyan-400 to-indigo-700 text-white' : 'hover:bg-gray-100'
    }`
  }>Add Volunteer need Post</NavLink>
                                    <NavLink 
  to='/manage' 
  className={({ isActive }) => 
    `block py-2 text-black text-center rounded-lg ${
      isActive ? 'bg-gradient-to-r from-cyan-400 to-indigo-700 text-white' : 'hover:bg-gray-100'
    }`
  }
>
  Manage My Posts
</NavLink>



                                    <button
                                        onClick={handleSignOut}
                                        className="w-full px-4 py-2 mt-2 bg-gradient-to-r from-indigo-700 to-cyan-400 text-white rounded hover:bg-gradient-to-r from-indigo-700 to-cyan-400"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>


                        :
                        <div className='flex items-center gap-4'>
                            <Link to={'/login'}>
                                <button className="py-3 px-5 text-white font-medium rounded-lg bg-gradient-to-r from-indigo-700 to-cyan-400  ">Login</button>
                            </Link>
                            <Link to={'/register'}>
                                <button className="py-3 px-5 text-white font-medium rounded-lg bg-gradient-to-r from-indigo-700 to-cyan-400">Register</button>
                            </Link>
                        </div>


                }

                <button
                    onClick={toggleTheme}
                    className="px-2 py-2 rounded-3xl bg-black text-white dark:bg-gray-700 dark:text-gray-300"
                >

                    {isDarkMode ? <CiLight className="text-2xl" /> : <MdOutlineDarkMode className="text-2xl" />}
                </button>
            </div>
        </div>
       </div>
    );
};

export default Navbar;