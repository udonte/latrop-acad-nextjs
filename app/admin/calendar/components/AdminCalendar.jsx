"use client";

import Image from "next/image";
import React, { useState } from "react";
import CalendarTab from "./CalendarTab";
import Permission from "./Permission";

export const AdminCalendar = () => {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <div className="">
      <div className="w-full flex items-center">
        <div className="flex items-center border-b border-gray-300 w-fit">
          <button
            className={`px-4 py-2 focus:outline-none ${
              activeTab
                ? "border-b-2 border-[#A020F0] text-[#A020F0]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab(true)}
          >
            Calendar
          </button>
          <button
            className={`px-4 py-2 focus:outline-none ${
              !activeTab
                ? "border-b-2 border-[#A020F0] text-[#A020F0]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab(false)}
          >
            Permissions <span>(2)</span>
          </button>
        </div>
      </div>

      <div className="py-4">
        {activeTab ? (
          <div className="">
            <CalendarTab />
          </div>
        ) : (
          <div className="">
            <Permission />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCalendar;
