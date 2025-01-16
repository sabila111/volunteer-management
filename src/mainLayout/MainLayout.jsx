import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <div className=" max-w-7xl mx-auto">
            <div className="dark:bg-gray-900 text-black dark:text-white">
                <Navbar></Navbar>
                
            </div>
            <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default MainLayout;