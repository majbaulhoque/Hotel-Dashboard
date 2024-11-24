import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo/Logo';
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-3 px-8 border-b-2 shadow'>
            <div>
                <Logo />
            </div>
            <div>
                <ul className="flex space-x-5 font-semibold">
                    <NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "text-green-500 bg-[#EAEFE8] px-3 py-1.5"
                    }>
                        <li>Dashboard</li>
                    </NavLink>
                    <li>Inbox</li>
                    <li>Insights</li>
                    <li>Listings</li>
                </ul>
            </div>
            <div className='flex space-x-3 text-2xl items-center'>
                <div className='flex space-x-3'>
                    <FaSearch />
                    <IoIosNotificationsOutline />
                </div>
                <IoPersonCircleSharp className='text-4xl text-green-600' />
            </div>

        </div>
    );
};

export default Navbar;