"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PAYMENT_HISTORY_DATA } from "../constants";

const PaymentHistory = () => {
  const router = useRouter();

  return (
    <div
      className="p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen py-10 bg-gray-100 bg-center"
      style={{
        backgroundImage: "url('/assets/lms/lmsbg.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-between items-center mb-3 flex-wrap -mt-6">
        <h1 className="sm:text-lg md:text-xl font-semibold">
          {PAYMENT_HISTORY_DATA.title}
        </h1>
        <button
          className="bg-[#A020F0] text-white py-3.5 px-6 rounded-md text-sm md:text-sm border-[1.5px] buttons text-[14px] leading-[25px] mt-2 sm:mt-0"
          onClick={() => router.push("/lms/payment/paymentdetails")}
        >
          {PAYMENT_HISTORY_DATA.buttonLabel}
        </button>
      </div>
      <div className="bg-white rounded-lg p-4 sm:p-6">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm md:text-base">
            <thead className="bg-gray-100 border">
              <tr>
                {PAYMENT_HISTORY_DATA.tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="text-left font-normal text-xs sm:text-sm text-[#22222280] py-2 sm:py-3 px-2 sm:px-4 border-b"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PAYMENT_HISTORY_DATA.paymentRecords.map((record, index) => (
                <tr
                  key={index}
                  className="border-b font-sans text-sm hover:bg-purple-50 border rounded-md"
                >
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-l">
                    {record.courseTitle}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    {record.courseFee}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    {record.amountPaid}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    {record.paymentBalance}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    {record.paymentMode}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-r">
                    {record.paymentStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
