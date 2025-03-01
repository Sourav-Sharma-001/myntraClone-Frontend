import { useState } from "react";
import Navbar from "../Navbar";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email.includes("@")) newErrors.email = "Invalid email";
        if (formData.password.length < 6) newErrors.password = "Password too short";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Data:", formData);
            alert("Registered Successfully!");
        }
    };

    return (
        <>
        <Navbar/>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div>
                        <label className="block text-gray-600">Full Name</label>
                        <input type="text" name="name" value={formData.name}
                            onChange={handleChange} className="w-full p-2 border rounded" />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-600">Email</label>
                        <input type="email" name="email" value={formData.email}
                            onChange={handleChange} className="w-full p-2 border rounded" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-600">Password</label>
                        <input type="password" name="password" value={formData.password}
                            onChange={handleChange} className="w-full p-2 border rounded" />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded mt-4">
                        Register
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Register;
