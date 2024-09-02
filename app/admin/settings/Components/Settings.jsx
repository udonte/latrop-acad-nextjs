"use client";

import React, { useState } from "react";
import UserManagement from "./UserManagement";
import CourseManagement from "./CourseManagement";
import RolePermissions from "./RolePermissions";
import NewInstructor from "./NewInstructor";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(false);
  const [instructorTab, setInstructorTab] = useState(false);
  const [addInstructorModalOpen, setAddInstructorModalOpen] = useState(false);

  const closeAddInstructorModal = () =>
    setAddInstructorModalOpen((prev) => !prev);

  return (
    <div
      className="p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen py-10 bg-gray-100 bg-center"
      style={{
        backgroundImage: "url('/assets/lms/lmsbg.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="">
        <div className="w-full flex flex-col lg:flex-row items-start">
          <div className="flex items-center border-b border-gray-300 w-fit">
            <button
              className={`px-4 py-2 focus:outline-none text-sm md:text-base ${
                activeTab === false
                  ? "border-b-2 border-[#A020F0] text-[#A020F0]"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(false)}
            >
              Roles & Permissions
            </button>
            <button
              className={`px-4 py-2 focus:outline-none  text-sm md:text-base ${
                activeTab === true
                  ? "border-b-2 border-[#A020F0] text-[#A020F0]"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(true)}
            >
              User Management
            </button>
            <button
              className={`px-4 py-2 focus:outline-none  text-sm md:text-base ${
                activeTab === undefined
                  ? "border-b-2 border-[#A020F0] text-[#A020F0]"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(undefined)}
            >
              Course Management
            </button>
          </div>

          {activeTab && instructorTab && (
            <div className="md:ml-auto mt-8 md:mt-0">
              <button
                className="border-[1.5px] w-fit buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
                onClick={() => setAddInstructorModalOpen((prev) => !prev)}
              >
                Add Instructor
              </button>
            </div>
          )}
        </div>

        <div className="py-4">
          {activeTab === false ? (
            <div className="">
              <RolePermissions />
            </div>
          ) : activeTab === true ? (
            <div className="">
              <UserManagement instructorTab={setInstructorTab} />
            </div>
          ) : (
            <div className="">
              <CourseManagement />
            </div>
          )}
        </div>
      </div>
      <NewInstructor
        isOpen={addInstructorModalOpen}
        onClose={closeAddInstructorModal}
      />
    </div>
  );
};

export default Settings;
