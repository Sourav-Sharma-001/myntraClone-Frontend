import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Navbar from "../Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate(); // ✅ Correctly define navigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSuccess = (msg) => {
        toast.success(msg, { position: "top-right" });
    };

    const handleError = (msg) => {
        toast.error(msg, { position: "top-right" });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4001/auth/login", formData);
            const { success, message, token } = res.data; // ✅ Extract correct response data

            if (success) {
                handleSuccess(message || "Login successful!");
                localStorage.setItem("token", token); // ✅ Store token (if applicable)
                setTimeout(() => {
                    navigate("/home"); // ✅ Redirect to dashboard after login
                }, 1000);
            } else {
                handleError(message || "Invalid email or password");
            }
        } catch (error) {
            handleError(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
                        <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded mt-2">Login</button>
                    </form>
                    <p className="text-center mt-4 ">
                        Don't have an account? <Link to="/register" className="text-pink-500" replace>Register</Link>
                    </p>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default Login;
