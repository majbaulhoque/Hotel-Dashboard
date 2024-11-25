import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo/Logo';
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="flex flex-wrap justify-between items-center py-3 px-4 sm:px-6 md:px-8 lg:py-4 lg:px-12 border-b-2 shadow">
            {/* Logo Section */}
            <div className="flex-shrink-0">
                <Logo />
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:block">
                <ul className="flex space-x-3 sm:space-x-5 font-semibold">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                    ? "active"
                                    : "text-green-500 bg-[#EAEFE8] px-2 py-1.5 rounded-md sm:px-3"
                        }
                    >
                        <li>Dashboard</li>
                    </NavLink>
                    <li className="hover:text-green-500 cursor-pointer">Inbox</li>
                    <li className="hover:text-green-500 cursor-pointer">Insights</li>
                    <li className="hover:text-green-500 cursor-pointer">Listings</li>
                </ul>
            </div>

            {/* Icons Section */}
            <div className="flex space-x-3 text-xl sm:text-2xl items-center mt-2 sm:mt-0">
                <div className="flex space-x-3">
                    <FaSearch className="hover:text-green-600 cursor-pointer" />
                    <IoIosNotificationsOutline className="hover:text-green-600 cursor-pointer" />
                </div>
                <IoPersonCircleSharp className="text-3xl sm:text-4xl text-green-600 cursor-pointer" />
            </div>

            {/* Optional just using icon for mobile device */}
            <div className="block sm:hidden">
                <button className="text-green-600 text-2xl">☰</button>
            </div>
        </div>
    );
};

export default Navbar;
