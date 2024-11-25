
import BookingStatus from '../Component/BookingStatus';
import PropertyBooking from '../Component/PropertyBoking';
import PropertyData from '../Component/PropertyData';
import PropertyForm from '../Component/PropertyForm';

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-6">Dashboard Overview</h1>
            <BookingStatus />
            <PropertyBooking />
            <div className="flex flex-col md:flex-row mx-auto gap-5 mt-8">
                <div className="w-full md:w-3/6">
                    <PropertyForm />
                </div>
                <div className="w-full md:w-3/6">
                    <PropertyData />
                </div>
            </div>
        </div>

    );
};

export default Dashboard;