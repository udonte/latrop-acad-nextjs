"use client";

import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import InstructorManagement from "./InstructorManagement";
import StudentManagement from "./StudentManagement";
import NewInstructor from "./NewInstructor";

const UserManagement = ({ instructorTab }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [activeTab, setActiveTab] = useState(false);
  instructorTab(activeTab);

  const toggleDropDown = () => setShowDropDown(!showDropDown);
  const switchTab = (tab) => {
    setActiveTab(tab);
    setShowDropDown(false); // Close dropdown after switching tab
  };

  return (
    <div>
      <div className="relative flex flex-col md:flex-row items-start justify-between">
        <div
          className="flex items-center gap-2 text-[#222222]  w-fit"
          onClick={toggleDropDown}
        >
          <p className="font-bold text-xl cursor-pointer">
            {activeTab ? "Instructor Management" : "Student Management"}
          </p>
          <MdArrowDropDown size={22} className="cursor-pointer" />
        </div>

        {showDropDown && (
          <div
            onMouseLeave={() => setShowDropDown(false)}
            className="absolute z-50 left-0 top-[35px] text-deskit-blue-300 w-fit min-w-max border rounded-xl overflow-hidden bg-white shadow-lg"
          >
            <div className="px-3 py-3 gap-x-3 w-fit min-w-max text-sm hover:bg-gray-100 cursor-pointer border-b border-gray-100">
              <p className="text-left" onClick={() => switchTab(false)}>
                Student Management
              </p>
            </div>
            <div className="px-3 py-3 gap-x-3 w-fit min-w-max text-sm hover:bg-gray-100 cursor-pointer">
              <p className="text-left" onClick={() => switchTab(true)}>
                Instructor Management
              </p>
            </div>
          </div>
        )}
      </div>

      <div className=" mt-4">
        {activeTab ? <InstructorManagement /> : <StudentManagement />}
      </div>
    </div>
  );
};

export default UserManagement;
