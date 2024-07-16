import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className=" max-w-screen-2xl mx-auto sticky z-[100]  inset-x-0 top-0 w-full border-b
    border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <div className="container mx-auto p-6  px-6 md:px-8 lg:px-12 xl:px-16">
                <div className=" flex gap-2 md:gap-6  items-center justify-between ">
                    <h1 className="md:text-3xl font-bold text-xl text-[#252422]  ">
                        Transactions
                    </h1>
                    <div className="  block w-auto" id="navbar-default">
                        <ul className="font-medium flex  p-0    rounded-lg  flex-row md:space-x-8  mt-0 border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to={'/'} className="block  md:py-2 px-3 text-gray-600 md:font-bold text-md md:text-xl  rounded md:bg-transparent  md:p-0 dark:text-white " aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/AddCustomes'} className="block  md:py-2 px-3 text-gray-600 md:font-bold text-md md:text-xl rounded  md:hover:bg-transparent md:border-0  md:p-0   dark:hover:text-white md:dark:hover:bg-transparent">AddCustomes</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}


