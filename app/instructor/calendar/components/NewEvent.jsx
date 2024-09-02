"use client";

import Button from "@/app/components/Button";
import CustomDropdown from "@/app/components/CustomDropdown";
import CustomInput from "@/app/components/CustomInput";
import Modal from "@/app/components/Modal/Modal";
import Image from "next/image";
import React, { useState } from "react";
import Recurrence from "./Recurrence";

function NewEvent({ isOpen, onClose }) {
  const [isRecurrenceModalOpen, setRecurrenceModalOpen] = useState(false);
  const [recurrenceData, setRecurrenceData] = useState({});

  const closeRecurrence = () => setRecurrenceModalOpen(false);

  const handleRecurrenceData = (data) => {
    setRecurrenceData(data);
    setFormData((prev) => ({
      ...prev,
      recurrence: data,
    }));
    setRecurrenceModalOpen(false);
  };

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    recurrence: "", // Recurrence data will be an object, not just a string
    start: "",
    end: "",
    details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelect = (name, value) => {
    if (name === "recurrence" && value === "custom") {
      setRecurrenceModalOpen(true);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSave = () => {
    // Gather all form data including recurrence details
    const finalData = {
      ...formData,
      recurrence: recurrenceData,
    };

    // Process the finalData (e.g., send to an API or handle as needed)
    console.log("Saving event data:", finalData);

    // Close the modal after saving
    onClose();
  };

  const recurrenceOptions = [
    { value: "no-repeat", label: "Does not repeat" },
    { value: "weekday", label: "Every Weekday" },
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "month", label: "Month" },
    { value: "yearly", label: "Yearly" },
    { value: "custom", label: "Custom" },
  ];

  return (
    <>
      <Modal
        isOpen={isOpen}
        title="New Class"
        width="sm"
        position="center"
        onClose={onClose}
        showHeader={true}
        showCloseIcon={true}
      >
        <div className="mt-4 w-full">
          {/* title */}
          <div className="flex items-center gap-4 w-full mb-2">
            <Image
              src={"/assets/calendar/pencil.svg"}
              width={25}
              height={25}
              alt="arrow"
              quality={100}
            />
            <div className="w-full">
              <CustomInput
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Title"}
                name="title"
                value={formData.title}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* date */}
            <div className="flex items-center gap-4 w-full mb-2">
              <Image
                src={"/assets/calendar/calendar.svg"}
                width={25}
                height={25}
                alt="arrow"
                quality={100}
              />
              <div className="w-full">
                <CustomInput
                  type={"date"}
                  size={"medium"}
                  inputClassName={"w-full mt-1"}
                  placeholder={"Select Date"}
                  name="date"
                  value={formData.date}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
            {/* recurrence */}
            <div className="flex items-center gap-4 w-full mb-2">
              <Image
                src={"/assets/calendar/reload.svg"}
                width={25}
                height={25}
                alt="arrow"
                quality={100}
              />
              <div className="w-full">
                <CustomDropdown
                  size={"medium"}
                  inputClasses={"w-full mt-1"}
                  name="recurrence"
                  placeHolder={"Select recurrence"}
                  options={recurrenceOptions}
                  onSelect={(name, value) => handleSelect(name, value)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* start time */}
            <div className="flex items-center gap-4 w-full mb-2">
              <Image
                src={"/assets/calendar/clock.svg"}
                width={25}
                height={25}
                alt="arrow"
                quality={100}
              />
              <div className="w-full">
                <CustomInput
                  type={"time"}
                  size={"medium"}
                  inputClassName={"w-full mt-1"}
                  placeholder={"Select Time"}
                  name="start"
                  value={formData.start}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
            {/* end time */}
            <div className="flex items-center gap-4 w-full mb-2">
              <Image
                src={"/assets/calendar/clock.svg"}
                width={25}
                height={25}
                alt="arrow"
                quality={100}
              />
              <div className="w-full">
                <CustomInput
                  type={"time"}
                  size={"medium"}
                  inputClassName={"w-full mt-1"}
                  placeholder={"Select Time"}
                  name="end"
                  value={formData.end}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          {/* details */}
          <div className="flex items-center gap-4 w-full mb-2">
            <Image
              src={"/assets/calendar/book.svg"}
              width={25}
              height={25}
              alt="arrow"
              quality={100}
            />
            <div className="w-full">
              <CustomInput
                size={"medium"}
                type={"textarea"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter class details here"}
                name="details"
                value={formData.details}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          <div className="my-4">
            <Button fullWidth={true} onClick={handleSave}>
              Save Now
            </Button>
          </div>
        </div>
      </Modal>

      <Recurrence
        isOpen={isRecurrenceModalOpen}
        onClose={closeRecurrence}
        onSave={handleRecurrenceData}
      />
    </>
  );
}

export default NewEvent;
