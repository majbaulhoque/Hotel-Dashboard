import React, { useEffect, useState } from "react";

const PropertyData = () => {
    const [properties, setProperties] = useState([
        {
            propertyId: "PROP-1",
            propertyName: "Dhanmondi Tower",
            propertyType: "Apartment",
            location: "Dhaka",
            price: 15000,
            addedDate: "2024-11-01",
        },
        {
            propertyId: "PROP-2",
            propertyName: "Kuwasha Hills",
            propertyType: "House",
            location: "Sylhet",
            price: 25000,
            addedDate: "2024-11-15",
        },
        {
            propertyId: "PROP-3",
            propertyName: "Chittagong Hills",
            propertyType: "Commercial",
            location: "Sylhet",
            price: 25000,
            addedDate: "2024-11-15",
        },
    ]);
    const [filteredType, setFilteredType] = useState(""); // State for selected property type

    useEffect(() => {
        // Fetch stored properties from localStorage
        const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];
        if (storedProperties.length > 0) {
            setProperties(storedProperties);
        }
    }, []);

    // Filter properties based on the selected type
    const filteredProperties = filteredType
        ? properties.filter(property => property.propertyType === filteredType)
        : properties;

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-blue-600">Property List</h2>
                <div>
                    <label className="block text-sm font-medium mb-1">Filter by Property Type</label>
                    <select
                        value={filteredType}
                        onChange={(e) => setFilteredType(e.target.value)} // Update the filter state
                        className="border border-gray-300 rounded px-3 py-2"
                    >
                        <option value="">All</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                </div>
            </div>
            {filteredProperties.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Property Name</th>
                                <th className="border border-gray-300 px-4 py-2">Type</th>
                                <th className="border border-gray-300 px-4 py-2">Location</th>
                                <th className="border border-gray-300 px-4 py-2">Price</th>
                                <th className="border border-gray-300 px-4 py-2">Added Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProperties.map((property, index) => (
                                <tr key={property.propertyId} className="hover:bg-gray-100 text-center">
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {property.propertyName}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {property.propertyType}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {property.location}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 ">
                                        ${property.price}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {new Date(property.addedDate).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-500 text-center">No properties available.</p>
            )}
        </div>
    );
};

export default PropertyData;
