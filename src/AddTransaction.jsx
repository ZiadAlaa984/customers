import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddTransaction() {
    let { id, customer_id } = useParams();
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    async function addTransaction(newTransaction) {
        try {
            const response = await fetch("http://localhost:3002/transactions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTransaction)
            });

            if (response.ok) {
                toast.success("Transaction added");
                const addedTransaction = await response.json();
                console.log("Transaction added:", addedTransaction);
            } else {
                console.error("Error adding transaction:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding transaction:", error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTransaction = {
            customer_id: customer_id,
            amount: amount,
            date: date,
            id: id
        };
        addTransaction(newTransaction);
        setAmount('');
        setDate('');
    };

    return (
        <>
            <div className='max-w-screen-2xl mx-auto'>
                <div className="container mx-auto original_height p-6 md:p-8 lg:p-12 xl:p-16">
                    <div className='flex max-w-xl mx-auto flex-col h-full justify-center items-center'>
                        <h1 className="text-4xl text-[#252422] pb-6 font-bold text-center">
                            Transaction
                        </h1>
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label htmlFor="amount-input" className="block mb-2 text-sm font-medium text-[#403d39] dark:text-white">Amount</label>
                                <input
                                    type="text"
                                    id="amount-input"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-[#403d39] text-sm rounded-lg focus:ring-[#252422] focus:border-[#252422] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="date-input" className="block mb-2 text-sm font-medium text-[#403d39] dark:text-white">Date</label>
                                <input
                                    type="date"
                                    id="date-input"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-[#403d39] text-sm rounded-lg focus:ring-[#252422] focus:border-[#252422] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div className='flex justify-center items-center'>
                                <button type="submit" className="text-[#403d39] transition-all duration-300 hover:text-white border border-[#403d39] hover:bg-[#403d39] focus:ring-4 focus:outline-none focus:ring-[#403d39] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Add Transaction</button>
                            </div>
                        </form>
                    </div>
                    <ToastContainer bottom-right />
                </div>
            </div>
        </>
    );
}
