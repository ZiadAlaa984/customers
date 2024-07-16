import { color } from 'chart.js/helpers';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddCustomes() {
    const [name, setName] = useState('');

    function generateRandomId() {
        return Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
    }

    async function addCustomer(newCustomer) {
        try {
            const response = await fetch("http://localhost:3002/customers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newCustomer)
            });

            if (response.ok) {
                toast.success("Customer added");
                const addedCustomer = await response.json();
                console.log("Customer added:", addedCustomer);
            } else {
                toast.error("Error adding customer");
                console.error("Error adding customer:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding customer:", error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCustomer = {
            name: name,
            id: generateRandomId()
        };
        addCustomer(newCustomer);
        setName('');
    };

    return (
        <>
            <div className='max-w-screen-2xl mx-auto'>
                <div className="container mx-auto original_height p-6 md:p-8 lg:p-12 xl:p-16">
                    <div className='flex max-w-xl mx-auto flex-col h-full justify-center items-center'>
                        <h1 className="text-4xl text-[#252422] pb-6 font-bold text-center">
                            AddCustomer
                        </h1>
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-[#403d39] dark:text-white">Name</label>
                                <input
                                    type="text"
                                    id="base-input"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-[#403d39] text-sm rounded-lg focus:ring-[#252422] focus:border-[#252422] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                                <button type="submit" className="text-[#403d39] transition-all duration-300 hover:text-white border border-[#403d39] hover:bg-[#403d39] focus:ring-4 focus:outline-none focus:ring-[#403d39] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">AddCustomer</button>
                            </div>
                        </form>
                    </div>
                    <ToastContainer bottom-right />
                </div>
            </div>
        </>
    );
}
