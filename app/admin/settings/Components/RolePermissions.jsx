"use client";

import React, { useState } from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import General from "./General";
import Sessions from "./Sessions";
import Roles from "./Roles";

const RolePermissions = () => {
  // State to manage the open/close status of each dropdown
  const [dropdownState, setDropdownState] = useState({
    generalSettings: false,
    sessionsSettings: false,
    rolesPermissions: false,
  });

  // Handle dropdown toggle with only one open at a time
  const toggleDropdown = (dropdownName) => {
    setDropdownState((prevState) => {
      const newState = {
        generalSettings: false,
        sessionsSettings: false,
        rolesPermissions: false,
      };
      return {
        ...newState,
        [dropdownName]: !prevState[dropdownName], // Toggle the selected dropdown
      };
    });
  };

  return (
    <div>
      <div className="space-y-4">
        {/* General Settings Dropdown */}
        <div className="bg-white p-4 rounded-xl">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => toggleDropdown("generalSettings")}
          >
            <p className="font-medium">General Settings</p>
            {dropdownState.generalSettings ? (
              <CgChevronUp size={20} />
            ) : (
              <CgChevronDown size={20} />
            )}
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              dropdownState.generalSettings
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="my-2 border-t-2 border-gray-100">
              <General />
            </div>
          </div>
        </div>

        {/* Sessions Settings Dropdown */}
        <div className="bg-white p-4 rounded-xl">
          <div
            className="flex items-center gap-4 cursor-pointer mt-4"
            onClick={() => toggleDropdown("sessionsSettings")}
          >
            <p className="font-medium">Sessions Settings</p>
            {dropdownState.sessionsSettings ? (
              <CgChevronUp size={20} />
            ) : (
              <CgChevronDown size={20} />
            )}
          </div>
          <div
            style={{
              scrollbarWidth: "thin" /* For Firefox */,
              WebkitScrollbarWidth: "thin" /* For WebKit-based browsers */,
              scrollbarTrackColor:
                "#f1f1f1" /* Background color of the scrollbar track */,
              scrollbarColor:
                "#E2E4E8 #ffffff" /* Color of the scrollbar thumb and track */,
              borderRadius: "8px" /* Radius of the scrollbar thumb */,
            }}
            className={`transition-all duration-500 ease-in-out overflow-y-scroll ${
              dropdownState.sessionsSettings
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="my-2 border-t-2 border-gray-100">
              <Sessions />
            </div>
          </div>
        </div>

        {/* Roles & Permissions Dropdown */}
        <div className="bg-white p-4 rounded-xl">
          <div
            className="flex items-center gap-4 cursor-pointer mt-4"
            onClick={() => toggleDropdown("rolesPermissions")}
          >
            <p className="font-medium">Roles & Permissions</p>
            {dropdownState.rolesPermissions ? (
              <CgChevronUp size={20} />
            ) : (
              <CgChevronDown size={20} />
            )}
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              dropdownState.rolesPermissions
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="my-2 border-t-2 border-gray-100">
              <Roles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolePermissions;
