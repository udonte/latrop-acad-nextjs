"use client";

import ToggleButton from "@/app/components/ToggleButton";
import React, { useState } from "react";

const General = () => {
  const [formData, setFormData] = useState({
    name: false,
    preferredName: false,
    phoneNumber: false,
    country: false,
    residence: false,
    gender: false,
    course: false,
  });

  // Handle toggle
  const handleToggle = (name) => {
    setFormData({
      ...formData,
      [name]: !formData[name], // Invert the current state of the toggle
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 lg:gap-[80px]  mt-8 text-[#222222]">
      {/* left */}
      <div className="w-full">
        <p className="font-bold">Editable Information</p>
        <p>Manage users information that can&apos;t edit</p>
      </div>
      {/* right */}
      <div className="w-full">
        <div className="flex items-center justify-between w-full md:w-[300px] border-b-2 border-dashed py-3 ">
          <p>Name</p>
          <ToggleButton
            size="sm"
            name="name"
            isToggled={formData.name}
            onToggle={() => handleToggle("name")}
          />
        </div>
        <div className="flex items-center justify-between w-full md:w-[300px] border-b-2 border-dashed py-3 ">
          <p>Preferred Name</p>
          <ToggleButton
            size="sm"
            name="preferredName"
            isToggled={formData.preferredName}
            onToggle={() => handleToggle("preferredName")}
          />
        </div>
        <div className="flex items-center justify-between w-full md:w-[300px] border-b-2 border-dashed py-3 ">
          <p>Phone Number</p>
          <ToggleButton
            size="sm"
            name="phoneNumber"
            isToggled={formData.phoneNumber}
            onToggle={() => handleToggle("phoneNumber")}
          />
        </div>
        <div className="flex items-center justify-between w-full md:w-[300px] border-b-2 border-dashed py-3 ">
          <p>Country</p>
          <ToggleButton
            size="sm"
            name="residence"
            isToggled={formData.residence}
            onToggle={() => handleToggle("residence")}
          />
        </div>
        <div className="flex items-center justify-between w-full md:w-[300px] border-b-2 border-dashed py-3 ">
          <p>State of Residence</p>
          <ToggleButton
            size="sm"
            name="country"
            isToggled={formData.country}
            onToggle={() => handleToggle("country")}
          />
        </div>
        <div className="flex items-center justify-between w-full md:w-[300px] border-b-2 border-dashed py-3 ">
          <p>Gender</p>
          <ToggleButton
            size="sm"
            name="phoneNumber"
            isToggled={formData.gender}
            onToggle={() => handleToggle("gender")}
          />
        </div>
        <div className="flex items-center justify-between w-full md:w-[300px] border-b-2 border-dashed py-3 ">
          <p>Course</p>
          <ToggleButton
            size="sm"
            name="course"
            isToggled={formData.course}
            onToggle={() => handleToggle("course")}
          />
        </div>
      </div>
    </div>
  );
};

export default General;
