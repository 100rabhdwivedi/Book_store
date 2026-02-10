import React from 'react'

const Cards = ({item}) => {
    return (
        <div className="w-[320px] bg-white rounded-[18px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)]">

            {/* Image Section */}
            <div className="bg-[#eaf3ff] p-2 flex justify-center">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full  rounded-xl   object-cover "
                />
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Title + Badge */}
                <div className="flex items-center gap-2">
                    <h3 className="text-[18px] font-semibold text-gray-900">
                        {item.title}
                    </h3>
                    <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                        {item.category}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-2">
                    {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-medium text-gray-600">$0</span>

                    <button className="bg-gray-100 text-sm px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards