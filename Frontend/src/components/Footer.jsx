import React from "react";

const Footer = () => {
    return (
        <footer className="w-screen bg-white border-t mt-16">
            <div className="max-w-[100vw] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand */}
                <div>
                    <h2 className="text-[1.4rem] font-semibold">BookStore</h2>
                    <p className="mt-4 text-gray-600 max-w-[20rem]">
                        Learn something new every day with our curated books and courses.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-[1.1rem] font-medium">Quick Links</h3>
                    <ul className="mt-4 space-y-[0.6rem]">
                        <li className="footer-link">Home</li>
                        <li className="footer-link">Course</li>
                        <li className="footer-link">About</li>
                        <li className="footer-link">Contact</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-[1.1rem] font-medium">Support</h3>
                    <ul className="mt-4 space-y-[0.6rem]">
                        <li className="footer-link">Help Center</li>
                        <li className="footer-link">Privacy Policy</li>
                        <li className="footer-link">Terms & Conditions</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-[1.1rem] font-medium">Contact</h3>
                    <p className="mt-4 text-gray-600">support@bookstore.com</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t text-center py-4 text-gray-500 text-[0.9rem]">
                © {new Date().getFullYear()} BookStore. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
