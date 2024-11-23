import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="flex justify-between">
            <Link to='/'>
                <div className="flex items-center">
                    <MdSpaceDashboard className="text-4xl text-green-600 mr-2" />
                    <h3 className="text-3xl text-black font-semibold">Rentify</h3>
                </div>
            </Link>
            
        </div>
    );
};

export default Logo;
