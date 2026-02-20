import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar/>
        <div className="min-h-screen  flex items-center justify-center px-4">

            <div className="max-w-4xl bg-white rounded-2xl shadow-2xl p-10 animate-fadeIn">

                {/* Heading */}
                <h1 className="text-4xl font-bold text-center text-pink-500 mb-6">
                    About Us
                </h1>

                {/* Content */}
                <p className="text-gray-600 text-lg text-center mb-4">
                    Welcome to our platform! We are committed to providing high-quality
                    services and creating a seamless experience for our users.
                </p>

                <p className="text-gray-600 text-lg text-center mb-4">
                    Our goal is to build secure and scalable applications that solve
                    real-world problems while maintaining simplicity and performance.
                </p>

                <p className="text-gray-600 text-lg text-center">
                    This project focuses on delivering a modern solution using the latest
                    technologies to ensure efficiency, reliability, and user satisfaction.
                </p>

                {/* Section */}
                <div className="mt-8 text-center">
                    <h2 className="text-2xl font-semibold text-pink-500 mb-2">
                        Our Mission
                    </h2>
                    <p className="text-gray-600">
                        To empower users with reliable and efficient digital solutions that
                        enhance productivity and simplify everyday tasks.
                    </p>
                </div>

            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default About;