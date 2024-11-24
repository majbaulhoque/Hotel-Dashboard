import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            <Navbar />
            <div className="max-w-7xl mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;