import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
    const [, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser(null);
            toast.success("Logout successful!");
            setTimeout(() => {
                localStorage.removeItem("Users");
                window.location.reload()
            }, 2000)

        } catch (error) {
            toast.error("An error occurred during logout. Please try again.");
            setTimeout(() => {
                
            }, 2000);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="px-5 py-2 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
            Logout
        </button>
    );
};

export default Logout;