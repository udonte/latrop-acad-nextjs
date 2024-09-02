"use client";

import Button from "@/app/components/Button";
import CustomDropdown from "@/app/components/CustomDropdown";
import CustomInput from "@/app/components/CustomInput";
import React, { useState } from "react";

const Sessions = () => {
  const [formData, setFormData] = useState({
    num: "",
    type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelect = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log(formData);
  };

  const typeOptions = [
    { value: "secs", label: "Seconds" },
    { value: "mins", label: "Minutes" },
    { value: "hrs", label: "Hours" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-[80px]  mt-8 text-[#222222]">
      {/* left */}
      <div className="w-full md:w-[300px]">
        <p className="font-bold">Set Sessions</p>
        <p>Set session timeouts for user inactivity</p>
      </div>
      {/* right */}
      <div className="w-full md:w-[400px]">
        <div className="">
          <p>Inactivity grace period</p>
          <div className="flex items-center gap-3">
            <div className="w-full md:w-[50%]">
              <CustomInput
                type={"number"}
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter figure"}
                name="num"
                value={formData.num}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-[50%]">
              <CustomDropdown
                size={"medium"}
                name="type"
                placeHolder={"Select type"}
                options={typeOptions}
                onSelect={(value) => handleSelect("type", value)}
              />
            </div>
          </div>
          <div className="my-4">
            <Button fullWidth={true} onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sessions;
