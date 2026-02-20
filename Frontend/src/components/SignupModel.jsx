import React from "react";

const SignupModel = ({ isOpen, onClose }) => {
    // if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white w-105 rounded-2xl shadow-2xl p-6 relative animate-fadeIn">

                {/* Close Button */}
                <button
                    className="absolute top-3 right-4 text-pink-500 text-2xl font-bold"
                    onClick={onClose}
                >
                    ×
                </button>

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
                    Sign Up
                </h2>

                {/* Full Name */}
                <div className="mb-4">
                    <label className="block text-pink-500 mb-1 font-medium">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-pink-500 mb-1 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block text-pink-500 mb-1 font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Create password"
                        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                {/* Confirm Password */}
                <div className="mb-6">
                    <label className="block text-pink-500 mb-1 font-medium">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                {/* Button */}
                <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-all duration-300">
                    Register
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{" "}
                    <span className="text-pink-500 font-medium cursor-pointer">
                        Login
                    </span>
                </p>

            </div>
        </div>
    );
};

export default SignupModel;