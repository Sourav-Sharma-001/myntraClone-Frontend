import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const apiUrl = process.env.REACT_APP_API_URL;
    const userData = () => {
        axios.get(`${apiUrl}/User`)
            .then((res) => res.data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.email.includes("@")) newErrors.email = "Invalid email";
        if (formData.password.length < 6) newErrors.password = "Password too short";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm() && (formData.email !== userData.email || formData.password !== userData.password)) {
            console.log('User does not exist');
            alert('User does not exists, register first.')
        }
        else {
            console.log("Logging in with:", formData);
            alert("Login Successful!");
        }
    };

    

    return (
        <>
        <Navbar/>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit} className="mt-4">
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
                        Login
                    </button>
                </form>
                <p className="text-center mt-4">
                    Don't have an account? <a href="/register" className="text-pink-500"><Link to='./Register'>Register</Link></a>
                </p>
            </div>
        </div>
        </>
    );
};

export default Login;
