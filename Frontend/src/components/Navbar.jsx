import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-white border-b z-50">
                <div className="max-w-[100vw] mx-auto px-2 md:px-16 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <h1 className="text-[1.4rem] font-semibold text-black">
                        BookStore
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a className="nav">Home</a>
                        <a className="nav">Course</a>
                        <a className="nav">Contact</a>
                        <a className="nav">About</a>

                        <input
                            type="text"
                            placeholder="Search"
                            className="w-[12vw] min-w-32 px-[0.8rem] py-[0.4rem] text-[0.9rem] border rounded-md outline-none focus:border-black"
                        />

                        <button className="px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
                            Login
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-[1.8rem]"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Full Screen Drawer */}
            <div
                className={`fixed top-0 left-0 h-screen w-screen bg-white z-100 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex justify-between items-center px-8 py-6 border-b">
                    <h1 className="text-[1.3rem] font-semibold">BookStore</h1>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-[1.8rem]"
                    >
                        ✕
                    </button>
                </div>

                {/* Menu */}
                <div className="flex flex-col gap-8 px-8 py-8 text-[1.1rem]">
                    <a className="nav">Home</a>
                    <a className="nav">Course</a>
                    <a className="nav">Contact</a>
                    <a className="nav">About</a>

                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-[0.6rem] border rounded-md"
                    />

                    <button className="py-[0.8rem] border border-black rounded-md">
                        Login
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar