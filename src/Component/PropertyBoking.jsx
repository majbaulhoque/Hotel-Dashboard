import React, { useEffect, useState } from "react";
import { FaBuilding, FaHome, FaCity } from "react-icons/fa"; // Importing icons from react-icons

const PropertyBooking = () => {
    const [properties, setProperties] = useState({
        all: [],
        apartments: [],
        houses: [],
        commercials: [],
    });

    useEffect(() => {
        // Fetch stored properties from localStorage
        const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];

        // Categorize properties by type
        const apartments = storedProperties.filter(property => property.propertyType === "Apartment");
        const houses = storedProperties.filter(property => property.propertyType === "House");
        const commercials = storedProperties.filter(property => property.propertyType === "Commercial");

        setProperties({
            all: storedProperties,
            apartments,
            houses,
            commercials,
        });
    }, []);

    // Sum the total price of all properties
    const totalPrice = properties.all.reduce((sum, property) => sum + Number(property.price), 0);
    const apartmentPrice = properties.apartments.reduce((sum, property) => sum + Number(property.price), 0);
    const housePrice = properties.houses.reduce((sum, property) => sum + Number(property.price), 0);
    const commercialPrice = properties.commercials.reduce((sum, property) => sum + Number(property.price), 0);

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Booking Status</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Total Price Card */}
                <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-blue-600 flex items-center">
                        <FaBuilding className="mr-2 text-xl" /> Total Price
                    </h3>
                    <p className="text-2xl text-gray-700">${totalPrice}</p>
                </div>

                {/* Apartment Card */}
                <div className="bg-green-100 p-4 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-green-600 flex items-center">
                        <FaHome className="mr-2 text-xl" /> Apartments
                    </h3>
                    <p className="text-2xl text-gray-700">${apartmentPrice}</p>
                    <p className="text-sm text-gray-500">Total: {properties.apartments.length} Apartments</p>
                </div>

                {/* House Card */}
                <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-yellow-600 flex items-center">
                        <FaHome className="mr-2 text-xl" /> Houses
                    </h3>
                    <p className="text-2xl text-gray-700">${housePrice}</p>
                    <p className="text-sm text-gray-500">Total: {properties.houses.length} Houses</p>
                </div>

                {/* Commercial Card */}
                <div className="bg-red-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-red-600 flex items-center">
                        <FaCity className="mr-2 text-xl" /> Commercial
                    </h3>
                    <p className="text-2xl text-gray-700">${commercialPrice}</p>
                    <p className="text-sm text-gray-500">Total: {properties.commercials.length} Commercials</p>
                </div>
            </div>
        </div>
    );
};

export default PropertyBooking;
