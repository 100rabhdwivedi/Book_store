import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="overflow-x-hidden">
        <Navbar/>
        <div className="mt-30 flex  items-center justify-center px-4">

            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 animate-fadeIn">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
                    Contact Us
                </h2>

                {/* Name */}
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

                {/* Subject */}
                <div className="mb-4">
                    <label className="block text-pink-500 mb-1 font-medium">
                        Subject
                    </label>
                    <input
                        type="text"
                        placeholder="Enter subject"
                        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                {/* Message */}
                <div className="mb-6">
                    <label className="block text-pink-500 mb-1 font-medium">
                        Message
                    </label>
                    <textarea
                        rows="4"
                        placeholder="Write your message..."
                        className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    ></textarea>
                </div>

                {/* Button */}
                <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-all duration-300">
                    Send Message
                </button>

            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Contact;