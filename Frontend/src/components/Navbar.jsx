import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModel";
import SignupModel from "./SignupModel";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenSignup, setIsOpenSignup] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white border-b z-100">
                <div className="max-w-[100vw] mx-auto px-4 md:px-16 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-[1.4rem] font-semibold">
                        BookStore
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="nav">Home</Link>
                        <Link to="/courses" className="nav">Course</Link>
                        <Link to="/contact" className="nav">Contact</Link>
                        <Link to="/about" className="nav">About</Link>

                        <input
                            type="text"
                            placeholder="Search"
                            className="w-[12vw] min-w-32 px-3 py-2 border rounded-md"
                        />

                        <button onClick={() => setIsOpenLogin((prev) => !prev)} className="px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white">
                            Login
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 bg-white z-200 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-5 border-b">
                    <h1 className="text-xl font-semibold">BookStore</h1>
                    <button onClick={closeMenu} className="text-2xl">✕</button>
                </div>

                {/* Mobile Menu */}
                <div className="flex flex-col gap-6 px-6 py-8 text-lg">
                    <Link to="/" onClick={closeMenu} className="nav">Home</Link>
                    <Link to="/courses" onClick={closeMenu} className="nav">Course</Link>
                    <Link to="/contact" onClick={closeMenu} className="nav">Contact</Link>
                    <Link to="/about" onClick={closeMenu} className="nav">About</Link>

                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 border rounded-md"
                    />

                    <button onClick={()=>setIsOpenLogin((prev)=>!prev)} className="py-3 border border-black rounded-md">
                        Login
                    </button>
                </div>
            </div>
            <LoginModal isOpen={isOpenLogin} setIsOpen={setIsOpenLogin} setIsOpenSignup={setIsOpenSignup}  />
            <SignupModel isOpen={isOpenSignup} setIsOpen={setIsOpenSignup} setIsOpenLogin={setIsOpenLogin} />
            
            
        </>
    );
};

export default Navbar;
