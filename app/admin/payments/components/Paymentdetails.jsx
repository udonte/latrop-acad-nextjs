"use client";
import React, { useState } from "react";
import { PAYMENT_HISTORY } from "../constants";

const Paymentdetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(PAYMENT_HISTORY);
  const itemsPerPage = 11;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (term) => {
    const lowercasedTerm = term.toLowerCase();
    const filtered = PAYMENT_HISTORY.filter(
      (payment) =>
        payment.studentName.toLowerCase().includes(lowercasedTerm) ||
        payment.email.toLowerCase().includes(lowercasedTerm) ||
        payment.course.toLowerCase().includes(lowercasedTerm) ||
        payment.amount.toLowerCase().includes(lowercasedTerm) ||
        payment.date.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div
      className="container mx-auto p-4 bg-gray-100 bg-center"
      style={{
        backgroundImage: "url('/assets/lms/lmsbg.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Payment History</h2>
        <div className="relative">
          <input
            type="text"
            className="border text-xs rounded-md p-2 pl-10 w-72"
            placeholder="Search for student, course, or amount"
            value={searchTerm}
            onChange={handleSearch}
          />
          <svg
            className="absolute left-3 top-3 w-5 h-4 text-[#A020F0]"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l4.094 4.094a1 1 0 01-1.414 1.414l-4.094-4.094zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/*First card */}
      <div className="bg-white rounded-lg p-4 sm:p-6">
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm md:text-base">
          <thead className="bg-gray-100 border rounded-2xl">
            <tr>
              <th className="px-6 py-3 border-b text-sm text-left text-[#22222280]">
                Student Name
              </th>
              <th className="px-6 py-3 border-b text-sm text-left text-[#22222280]">
                Email
              </th>
              <th className="px-6 py-3 border-b text-sm text-left text-[#22222280]">
                Course
              </th>
              <th className="px-6 py-3 border-b text-sm text-left text-[#22222280]">
                Amount
              </th>
              <th className="px-6 py-3 border-b text-sm text-left text-[#22222280]">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((payment, index) => (
              <tr key={index} className="border-b font-sans text-sm hover:bg-purple-50 border">
                <td className="py-2 sm:py-3 px-2 sm:px-4 border-l">{payment.studentName}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">{payment.email}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">{payment.course}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">{payment.amount}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

      {/*Pagination*/}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="disabled:opacity-50 disabled:cursor-not-allowed text-sm text-[#555555]"
        >
          &lt; Previous
        </button>
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`${
                currentPage === i + 1
                  ? "bg-purple-600 text-white"
                  : "bg-white text-black"
              } px-3 py-1 rounded-sm`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="disabled:opacity-50 disabled:cursor-not-allowed text-sm text-[#555555]"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Paymentdetails;
