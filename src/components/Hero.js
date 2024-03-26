"use client";
import { useState } from 'react';
import { client } from '../lib/client';
import imageUrlBuilder from '@sanity/image-url';



export default  function Hero({ images, events }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    // const bannerQuery = '*[_type == "banner"]';
    // const bannerData = await client.fetch(bannerQuery);

    // const banner = bannerData[0]
    // const builder = imageUrlBuilder(client);
    // const imageUrl = builder.image(banner.image.asset).url();
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };
    return (
        <div className="relative w-full mt-20">
            <div className="flex overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`w-full ${index === currentSlide ? 'block' : 'hidden'}`}
                    >
                        <img src={image.src} alt={`Slide ${index + 1}`} className="w-full" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <button className='btn bg-yellow-300 px-4 rounded-lg py-2 hover:bg-yellow-600'>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-opacity-50 text-black py-2 px-4 rounded-l focus:outline-none">
                <span class="text-2xl" aria-hidden="true">
                    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </span>
                <span class="sr-only">Previous</span>
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2  bg-opacity-50 text-black py-2 px-4 rounded-r focus:outline-none">
                <span class="sr-only">Next</span>
                <span class="text-2xl" aria-hidden="true">
                    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </span>
            </button>
        </div>
    );
}
