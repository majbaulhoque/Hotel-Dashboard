import React, { useState } from "react";

const PropertyForm = () => {
    const [formData, setFormData] = useState({
        propertyName: "",
        propertyType: "",
        location: "",
        rentalStatus: "",
        price: "",
        checkIns: "",
        checkOuts: "",
        ownerContact: "",
        addedDate: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Check out validation
        if (name === "checkOuts" && formData.checkIns && Number(value) < Number(formData.checkIns)) {
            setErrors({ ...errors, checkOuts: "Check-Outs must be after Check-Ins." });
        } else {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (!value) newErrors[key] = "This field is required.";
        });
        if (formData.checkIns && formData.checkOuts && Number(formData.checkOuts) < Number(formData.checkIns)) {
            newErrors.checkOuts = "Check-Outs must be after Check-Ins.";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const propertyId = `PROP-${Date.now()}`;
        const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];
        localStorage.setItem("properties", JSON.stringify([...storedProperties, { ...formData, propertyId }]));
        alert("Property added successfully!");

        // Reset form
        setFormData({
            propertyName: "",
            propertyType: "",
            location: "",
            rentalStatus: "",
            price: "",
            checkIns: "",
            checkOuts: "",
            ownerContact: "",
            addedDate: "",
        });
    };

    const renderInput = (label, name, type = "text", placeholder = "") => (
        <div>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className={`w-full px-4 py-2 border ${errors[name] ? "border-red-500" : "border-gray-300"} 
                    rounded-lg focus:outline-none focus:ring-2 ${errors[name] ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
            />
            {errors[name] && <p className="text-sm text-red-500">{errors[name]}</p>}
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Add New Property</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderInput("Property Name", "propertyName", "text", "e.g., Bashundhara City")}
                    <div>
                        <label className="block text-sm font-medium mb-1">Property Type</label>
                        <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${errors.propertyType ? "border-red-500" : "border-gray-300"} 
                                rounded-lg focus:outline-none focus:ring-2 ${errors.propertyType ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
                        >
                            <option value="">Select Type</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="Commercial">Commercial</option>
                        </select>
                        {errors.propertyType && <p className="text-sm text-red-500">{errors.propertyType}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderInput("Location", "location", "text", "e.g., Jamuna Tower")}
                    <div>
                        <label className="block text-sm font-medium mb-1">Rental Status</label>
                        <select
                            name="rentalStatus"
                            value={formData.rentalStatus}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${errors.rentalStatus ? "border-red-500" : "border-gray-300"} 
                                rounded-lg focus:outline-none focus:ring-2 ${errors.rentalStatus ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
                        >
                            <option value="">Select Status</option>
                            <option value="Available">Available</option>
                            <option value="Rented">Rented</option>
                        </select>
                        {errors.rentalStatus && <p className="text-sm text-red-500">{errors.rentalStatus}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderInput("Price ($)", "price", "number", "e.g., 1500")}
                    {renderInput("Check-Ins", "checkIns", "number", "e.g., 5")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderInput("Check-Outs", "checkOuts", "number", "e.g., 10")}
                    {renderInput("Owner Contact", "ownerContact", "text", "e.g., 017*********")}
                </div>
                {renderInput("Added Date", "addedDate", "date")}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
                >
                    Add Property
                </button>
            </form>
        </div>
    );
};

export default PropertyForm;
