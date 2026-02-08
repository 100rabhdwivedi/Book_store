import React from "react";

const Banner = () => {
    return (
        <section className="w-screen bg-white mt-16">
            <div className="max-w-[100vw] mx-auto px-2 md:px-16 py-24 flex flex-col md:flex-row items-center gap-12">

                {/* Left Side */}
                <div className="flex-1 ">
                    <h1 className="text-[2.2rem] md:text-[3rem] font-bold leading-tight">
                        Hello, welcomes here to learn <br />
                        something{" "}
                        <span className="text-pink-500">new everyday!!!</span>
                    </h1>

                    <p className="mt-[1.2rem] text-gray-600 max-w-[40vw]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et
                        totam. Tempora amet atque expedita, quae corrupti totam sed pariatur
                        corporis at veniam est voluptas animi!
                    </p>

                    {/* Email Input */}
                    <div className="mt-6">
                        <input
                            type="email"
                            placeholder="Enter your email to login"
                            className="w-[40vw] min-w-[18rem] px-4 py-[0.8rem] border rounded-md outline-none focus:border-black"
                        />
                    </div>

                    {/* Button */}
                    <button className="mt-6 px-8 py-[0.8rem] bg-pink-500 text-white rounded-md hover:opacity-90 transition">
                        Secondary
                    </button>
                </div>

                {/* Right Side Image */}
                <div className="flex-1 w-full md:w-1/2  flex xl:justify-end">
                    <img
                        src="https://images.unsplash.com/photo-1687346360881-26ea53307773?q=80&w=1964&auto=format&fit=crop"
                        alt="Books"
                        className=" xl:aspect-5/3 object-cover rounded-2xl "
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
