"use client";

import CustomDropdown from "@/app/components/CustomDropdown";
import CustomInput from "@/app/components/CustomInput";
import Modal from "@/app/components/Modal/Modal";
import React, { useState } from "react";

function NewInstructor({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    preferredName: "",
    emailAddress: "",
    code: "",
    phone: "",
    country: "",
    gender: "",
    residenc: "",
    course: "",
    courseOptional: "",
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

  const handleAddUser = () => {
    // Process the finalData (e.g., send to an API or handle as needed)
    console.log("Saving event data:", formData);

    // Close the modal after saving
    onClose();
  };

  const codeOptions = [
    { value: "hr", label: "+234" },
    { value: "eng", label: "+245" },
    { value: "sales", label: "+244" },
  ];

  const countryOptions = [
    { value: "hr", label: "Nigeria" },
    { value: "eng", label: "United Kingdom" },
    { value: "sales", label: "Jamaica" },
  ];

  const courseOptions = [
    { value: "hr", label: "Human Resources" },
    { value: "eng", label: "Engineering" },
    { value: "sales", label: "Sales" },
  ];

  return (
    <>
      <Modal
        isOpen={isOpen}
        title="Add New User"
        width="md"
        position="center"
        onClose={onClose}
        showHeader={true}
        showCloseIcon={true}
      >
        <p className="text-xs">Enter user details to complete registration</p>
        <div className="mt-4 w-full">
          {/* first name and last name */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
            <div className="w-full">
              <p>First Name</p>
              <CustomInput
                type={"text"}
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter Firstname"}
                name="firstName"
                value={formData.firstName}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <p>Last Name</p>
              <CustomInput
                type={"text"}
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter Lastname"}
                name="lastName"
                value={formData.lastName}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>

          {/* preferred and email */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
            <div className="w-full">
              <p className="flex items-center justify-between">
                <span>Preferred Name</span>{" "}
                <span className="text-xs text-[#A020F0]">Optional</span>
              </p>
              <CustomInput
                type={"text"}
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter Preferred Name"}
                name="preferredName"
                value={formData.preferredName}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <p>Email Address</p>
              <CustomInput
                type={"email"}
                size={"medium"}
                inputClassName={"w-full mt-1"}
                placeholder={"Enter email"}
                name="emailAddress"
                value={formData.emailAddress}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          {/* phone number and country */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
            <div className="w-full">
              <p>Phone Number</p>
              <div className="flex items-center gap-1">
                <div className="w-[30%] ">
                  <CustomDropdown
                    size={"medium"}
                    inputClasses={"w-full mt-1"}
                    name="code"
                    placeHolder={"234"}
                    options={codeOptions}
                    onSelect={(value) => handleSelect("code", value)}
                  />
                </div>
                <div className="w-full flex-1">
                  <CustomInput
                    type={"tel"}
                    size={"medium"}
                    inputClassName={"w-full mt-1"}
                    placeholder={"Enter Phone Number"}
                    name="phone"
                    value={formData.phone}
                    handleInputChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="w-full ">
              <p>Country</p>
              <CustomDropdown
                size={"medium"}
                inputClasses={"w-full mt-1"}
                name="country"
                placeHolder={"Select State"}
                options={countryOptions}
                onSelect={(value) => handleSelect("country", value)}
              />
            </div>
          </div>
          {/* gender and state of residence */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
            <div className="w-full">
              <p>Gender</p>
              <CustomDropdown
                size={"medium"}
                inputClasses={"w-full mt-1"}
                name="gender"
                placeHolder={"Select Gender"}
                options={[
                  { value: "hr", label: "Male" },
                  { value: "eng", label: "Female" },
                ]}
                onSelect={(value) => handleSelect("gender", value)}
              />
            </div>
            <div className="w-full">
              <p>State/City of Residence</p>
              <CustomDropdown
                size={"medium"}
                inputClasses={"w-full mt-1"}
                name="state"
                placeHolder={"Select State"}
                options={[
                  { value: "hr", label: "Lagos" },
                  { value: "eng", label: "Abuja" },
                ]}
                onSelect={(value) => handleSelect("state", value)}
              />
            </div>
          </div>
          {/* course options */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
            <div className="w-full">
              <p>Course</p>
              <CustomDropdown
                size={"medium"}
                inputClasses={"w-full mt-1"}
                name="course"
                placeHolder={"Select Course"}
                options={courseOptions}
                onSelect={(value) => handleSelect("course", value)}
              />
            </div>
            <div className="w-full">
              <p className="flex items-center justify-between">
                <span>Course</span>{" "}
                <span className="text-xs text-[#A020F0]">Optional</span>
              </p>
              <CustomDropdown
                size={"medium"}
                inputClasses={"w-full mt-1"}
                name="courseOptional"
                placeHolder={"Select Course"}
                options={courseOptions}
                onSelect={(value) => handleSelect("courseOptional", value)}
              />
            </div>
          </div>
          <div className="w-full my-8">
            <button
              className="border-[1.5px] w-full buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
              onClick={handleAddUser}
            >
              Add Instructor
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default NewInstructor;
