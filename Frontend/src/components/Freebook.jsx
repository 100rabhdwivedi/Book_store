import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Freebook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await axios.get("http://localhost:4001/books");
                const data  = response.data.filter(data => data.category === "Free")
                setBooks(data);
            } catch (error) {
                console.log("Error in fetching books:", error);
            }
        };
        getBooks();
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <h1 className='font-bold text-xl pb-2'>Free offered courses</h1>

                <p>we offer a great selection of free books that are perfect for all ages and interests.</p>
                <Slider {...settings}>
                    {books.map((item) => {
                        return <Cards key={item.id} item={item} />
                    })}
                </Slider>
            </div>
        </>
    )
}

export default Freebook