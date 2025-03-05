import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginSuccess } from "../Redux/reducer";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4001/auth/login", formData);
            const { success, message, jwtToken, name, email } = res.data;

            if (success) {
                toast.success(message || "Login successful!");
                
                // Save token and user data in Redux
                dispatch(loginSuccess({ token: jwtToken, user: { name, email } }));

                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                toast.error(message || "Invalid email or password");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
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
                    <p className="text-center mt-4">
                        Don't have an account? <Link to="/register" className="text-pink-500" replace>Register</Link>
                    </p>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default Login;
