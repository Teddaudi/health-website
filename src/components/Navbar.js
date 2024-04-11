"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    function handleToggleNavbarClick() {
        setToggleNavbar((prev) => !prev)
    }
    return (
        <nav id="header" className="fixed w-full z-10 top-0 text-white green">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between ">
                <div className="pl-2 flex items-center">
                    <Link className="toggleColour no-underline hover:no-underline font-bold text-lg " href="/">
                        <img src='/logo.png' alt='logo' className="h-20 fill-current inline pr-0 -mr-4" />
                        TODO HEALTHCARE
                    </Link>
                </div>
                <div className="block lg:hidden mr-4">
                    <button onClick={handleToggleNavbarClick} id="nav-toggle" className="flex items-center text-gray-400 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={toggleNavbar ?
                    "w-full flex-grow lg:flex lg:items-center lg:w-auto  mt-2 lg:mt-0 green lg:bg-transparent text-white p-4 lg:p-0 z-20" :
                    "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 green lg:bg-transparent text-black p-4 lg:p-0 z-20"} id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <Link className="inline-block py-2 px-4 text-white font-bold text-lg hover:text-red-800 no-underline" href="/">Home</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-white no-underline font-bold text-lg hover:text-red-800 hover:text-underline py-2 px-4" href="/what-we-do">What We Do</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-white no-underline font-bold text-lg hover:text-red-800 hover:text-underline py-2 px-4" href="/about-us">About Us</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-white no-underline font-bold text-lg hover:text-red-800 hover:text-underline py-2 px-4" href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                    <Link href={'/appointments'}>
                        <button
                            id="navAction"
                            className="mx-auto lg:mx-0 hover:bg-green-400 hover:text-white bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        >
                            Book an Appointment
                        </button>
                    </Link>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    );
};

export default Navbar;
