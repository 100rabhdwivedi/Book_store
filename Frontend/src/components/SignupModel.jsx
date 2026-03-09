import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SignupModel = ({ isOpen, setIsOpen, setIsOpenLogin }) => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post("http://localhost:4001/users/signup", userInfo);

            console.log(res.data);

            if (res.data) {
                toast.success("Registration successful! Please login.");
                reset(); // ✅ clear form after successful submit
                setIsOpen(false);
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
        } catch (err) {
            if(err.response){
                toast.error(err.response.data.message);
            }
            else {      
                toast.error("An error occurred during registration. Please try again.");
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white w-105 rounded-2xl shadow-2xl p-6 relative animate-fadeIn">

                {/* Close Button */}
                <button
                    className="absolute top-3 right-4 text-pink-500 text-2xl font-bold"
                    onClick={() => {
                        setIsOpen(false);
                        setIsOpenLogin(false);
                    }}
                >
                    ×
                </button>

                <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
                    Sign Up
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="block text-pink-500 mb-1 font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            {...register("fullname", { required: "Name is required" })}
                            className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                        {errors.fullname && (
                            <p className="text-red-500 text-sm">{errors.fullname.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-pink-500 mb-1 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-pink-500 mb-1 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Create password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6">
                        <label className="block text-pink-500 mb-1 font-medium">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            {...register("confirmPassword", {
                                required: "Confirm your password",
                                validate: (value) =>
                                    value === password || "Passwords do not match"
                            })}
                            className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-all duration-300"
                    >
                        Register
                    </button>

                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{" "}
                    <span
                        onClick={() => {
                            setIsOpen(false);
                            setIsOpenLogin(true);
                        }}
                        className="text-pink-500 font-medium cursor-pointer"
                    >
                        Login
                    </span>
                </p>

            </div>
        </div>
    );
};

export default SignupModel;