"use client";

import Button from "@/app/components/Button";
import CustomDropdown from "@/app/components/CustomDropdown";
import CustomInput from "@/app/components/CustomInput";
import Modal from "@/app/components/Modal/Modal";
import React, { useState } from "react";

function Recurrence({ isOpen, onClose, onSave }) {
  const [recurrenceData, setRecurrenceData] = useState({
    startDate: "",
    every: {
      num: 0,
      frequency: "", // Initialize frequency as an empty string
    },
    endDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle number input for `num`
    if (name === "num") {
      setRecurrenceData((prevData) => ({
        ...prevData,
        every: {
          ...prevData.every,
          num: value,
        },
      }));
    } else {
      // Handle other inputs
      setRecurrenceData({
        ...recurrenceData,
        [name]: value,
      });
    }
  };

  const handleFrequencyChange = (value) => {
    setRecurrenceData((prevData) => ({
      ...prevData,
      every: {
        ...prevData.every,
        frequency: value,
      },
    }));
  };

  const handleSave = () => {
    onSave(recurrenceData);
  };

  const frequencyOptions = [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "bi-weekly", label: "Bi-Weekly" },
    { value: "month", label: "Month" },
  ];

  return (
    <div className="w-[500px]">
      <Modal
        isOpen={isOpen}
        title="Class Recurrence"
        width="sm"
        position="center"
        onClose={onClose}
        showHeader={true}
        showCloseIcon={true}
      >
        <div className="mt-4 w-full">
          {/* Start Date */}
          <div className="flex items-center gap-4 w-full mb-4">
            <div className="w-full">
              <CustomInput
                label={"Start Date"}
                type={"text"} // Changed to date type
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Start Date"}
                name="startDate"
                value={recurrenceData.startDate}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          {/* Frequency */}
          <div className="flex items-center gap-4 w-full mb-4">
            <div className="w-full">
              <CustomInput
                label={"Every"}
                type={"number"}
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"2"}
                name="num"
                value={recurrenceData.every.num}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <CustomDropdown
                label="Frequency"
                size={"medium"}
                inputClasses={"w-full mt-1"}
                name="frequency"
                placeHolder={"Select Frequency"}
                options={frequencyOptions}
                onSelect={handleFrequencyChange}
              />
            </div>
          </div>

          {/* End Date */}
          <div className="flex items-center gap-4 w-full mb-4">
            <div className="w-full">
              <CustomInput
                type={"text"} // Changed to date type
                size={"medium"}
                label={"End Date"}
                inputClassName={"w-full mt-1"}
                placeholder={"End Date"}
                name="endDate"
                value={recurrenceData.endDate}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          <div className="my-4 flex item gap-4">
            <button
              className="border-[1.5px] hover: w-[48%] buttons rounded-[5px] py-4 px-6 border-[#A020F026] text-[#A020F0] text-[15px] leading-[20px] font-medium"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="border-[1.5px] w-[48%] buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
              onClick={handleSave}
            >
              Save Occurrence
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Recurrence;
