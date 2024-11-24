import React, { useEffect, useState } from "react";
import { FaHotel } from 'react-icons/fa'; // FontAwesome hotel icon
import { MdExitToApp } from 'react-icons/md'; // Material Design exit icon
import { Bar } from 'react-chartjs-2'; // Import Bar chart from react-chartjs-2
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register chart components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BookingStatus = () => {
    const [checkInCount, setCheckInCount] = useState(12);
    const [checkOutCount, setCheckOutCount] = useState(0);

    useEffect(() => {
        // Fetch properties from localStorage
        const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];

        // Count check-ins and check-outs
        let checkIns = 12;
        let checkOuts = 0;

        storedProperties.forEach(property => {
            if (property.checkIns) checkIns += Number(property.checkIns);
            if (property.checkOuts) checkOuts += Number(property.checkOuts);
        });

        setCheckInCount(checkIns);
        setCheckOutCount(checkOuts);
    }, []);

    // Data for the Bar chart
    const data = {
        labels: ['Check In', 'Check Out'],  // Labels for each bar
        datasets: [
            {
                label: 'Booking Count',
                data: [checkInCount, checkOutCount], // Data values for check-in and check-out
                backgroundColor: ['#4CAF50', '#2196F3'], // Colors for bars
                borderColor: ['#388E3C', '#1976D2'],
                borderWidth: 1,
            },
        ],
    };

    // Options for the Bar chart
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true, // Make sure the y-axis starts at 0
            },
        },
    };

    return (
        <div className="flex flex-col items-center my-5">
            <div className="flex space-x-5 justify-center items-center h-full">
                {/* Check In Card */}
                <div className="h-52 w-80 p-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-xl shadow-lg text-white flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="flex items-center mb-4">
                        <FaHotel size={30} color="blue" />
                        <h3 className="ml-2 text-3xl font-bold text-black">Check In</h3>
                    </div>
                    <p className="text-4xl font-semibold text-black">{checkInCount}</p>
                </div>

                {/* Check Out Card */}
                <div className="h-52 w-80 p-6 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-xl shadow-lg text-white flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="flex items-center mb-4">
                        <MdExitToApp size={30} color="red" />
                        <h3 className="ml-2 text-3xl font-bold text-black">Check Out</h3>
                    </div>
                    <p className="text-4xl font-semibold text-black">{checkOutCount}</p>
                </div>
                {/* Bar chart for Check-In and Check-Out */}
                <div className="w-full max-w-lg mb-6">
                    <Bar data={data} options={options} />
                </div>
            </div>


        </div>
    );
};

export default BookingStatus;
