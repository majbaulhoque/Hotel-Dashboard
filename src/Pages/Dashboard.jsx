
import BookingStatus from '../Component/BookingStatus';
import PropertyData from '../Component/PropertyData';
import PropertyForm from '../Component/PropertyForm';

const Dashboard = () => {
    return (
        <div>
            <BookingStatus />
            <div className='flex mx-auto gap-5'>
                <div className='w-3/6'>
                    <PropertyForm />
                </div>
                <div className='w-3/6'>
                    <PropertyData />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;