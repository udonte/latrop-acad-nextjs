import FullnameTag from "@/app/components/FullnameTag";
import Image from "next/image";
import React from "react";
import { FiCheckCircle, FiPenTool } from "react-icons/fi";

function Permission() {
  return (
    <div className="relative">
      <div className="flex items-center md:justify-end md:absolute md:right-0 md:top-[-70px] ">
        <div className="w-[300px] relative">
          <Image
            src={"/assets/calendar/Search.svg"}
            width={16}
            height={16}
            alt="arrow"
            quality={100}
            className="absolute top-3 left-4"
          />
          <input
            placeholder={"Search for Instructor, course, etc.."}
            className={`w-full border-2 border-gray-200 outline-none bg-white text-xs placeholder:text-deskit-gray-400  rounded-lg placeholder:font-light pl-10 px-4 py-3`}
            type={"text"}
          />
          <Image
            src={"/assets/calendar/filter.svg"}
            width={16}
            height={16}
            alt="arrow"
            quality={100}
            className="absolute top-4 right-4"
          />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-gray-500 font-bold mb-4">Today</p>
        <div className="flex items-start w-full gap-4">
          {/* card */}
          <div className="bg-white rounded-xl p-3 md:p-6 w-full md:w-1/2 text-[#222222]">
            <div className="flex flex-col-reverse md:flex-row items-start gap-3 border-b-2 border-gray-100 pb-4 ">
              <div className="flex items-start gap-4">
                {/* name tag */}
                <div className="bg-[#D9D9D9] text-black font-bold rounded-full flex items-center justify-center w-[50px] h-[50px]">
                  OU
                </div>
                {/* intructor details */}
                <div>
                  <p className="font-bold">Obinzi Michael</p>
                  <p>Product Management</p>
                  <p>obinizi@gmail.com</p>
                </div>
              </div>
              {/* approved */}
              <div className="flex items-center gap-2 md:ml-auto">
                <pencil />
                <FiCheckCircle size={20} className=" text-[#A020F0]" />
                <p className="font-semibold">Approved</p>
              </div>
            </div>
            {/* details */}
            <div className=" px-6 space-y-4 mt-4">
              <div className="flex items-start gap-4 w-full mb-2">
                <div className="h-[30px] w-[30px]">
                  <Image
                    src={"/assets/calendar/book.svg"}
                    width={22}
                    height={22}
                    alt="arrow"
                    quality={100}
                    className=""
                  />
                </div>
                <div className="w-full space-y-1">
                  <p className="font-bold">Product Management</p>
                  <p>Module 1: Introduction to Product Management</p>
                  <p>Instructor: Meredith Gray</p>
                </div>
              </div>
              <div className="flex items-start gap-4 w-full mb-2">
                <div className="h-[30px] w-[30px]">
                  <Image
                    src={"/assets/calendar/clock.svg"}
                    width={22}
                    height={22}
                    alt="arrow"
                    quality={100}
                    className=""
                  />
                </div>
                <div className="w-full space-y-1">
                  <p>12.00PM - 1.00PM</p>
                  <p>July 16th 2024</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex item gap-4">
              <button className="border-[1.5px] buttons rounded-[5px] py-4 px-6 border-[#A020F026] text-[#A020F0] text-[15px] leading-[20px] font-medium">
                Decline
              </button>
              <button className="border-[1.5px] buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Permission;
