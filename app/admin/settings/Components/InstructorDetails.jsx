"use client";

import Modal from "@/app/components/Modal/Modal";
import React, { useState } from "react";
import ToggleButton from "@/app/components/ToggleButton";

function InstructorDetails({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    activateAccount: false,
    profileUpdate: false,
    disableLogin: false,
  });

  // Handle toggle
  const handleToggle = (name) => {
    setFormData({
      ...formData,
      [name]: !formData[name], // Invert the current state of the toggle
    });
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        title="User Information"
        width="sm"
        position="center"
        onClose={onClose}
        showHeader={true}
        showCloseIcon={true}
      >
        <div className="w-full">
          <p className="text-xs">
            See the instructor details and turn on specific information here
          </p>
          {/* infor */}
          <div className="my-8">
            <p className="font-medium mb-2">Instructor Information</p>
            <div className="flex flex-col md:flex-row items-start gap-4 bg-gray-100 rounded-xl p-4">
              {/* left */}
              <div className="w-full md:w-1/2">
                <div className="mb-2">
                  <p className="text-gray-400 text-sm ">Instructor Name</p>
                  <p>John Smith</p>
                </div>
                <div className="mb-2">
                  <p className="text-gray-400 text-sm">Country</p>
                  <p>Nigeria</p>
                </div>
                <div className="mb-2">
                  <p className="text-gray-400 text-sm">State of Residence</p>
                  <p>Abuja</p>
                </div>
                <div className="mb-2">
                  <p className="text-gray-400 text-sm">Course </p>
                  <p>Project Management</p>
                </div>
              </div>
              {/* right */}
              <div className="w-full md:w-1/2">
                <div className="mb-2">
                  <p className="text-gray-400 text-sm">Instructor Email</p>
                  <p>Johnsmith@gmail.com</p>
                </div>
                <div className="mb-2">
                  <p className="text-gray-400 text-sm">Phone Number</p>
                  <p>+2349035653117</p>
                </div>
                <div className="mb-2">
                  <p className="text-gray-400 text-sm">Gender </p>
                  <p>Male</p>
                </div>
                <div className="mb-2">
                  <p className="text-gray-400 text-sm">Date Created</p>
                  <p>08-08-2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* permissions */}
          <div>
            <p className="font-medium">Permission</p>

            <div className="flex items-center justify-between w-full border-b-2 border-dashed py-3 ">
              <p>Activate Account</p>
              <ToggleButton
                size="sm"
                name="name"
                isToggled={formData.activateAccount}
                onToggle={() => handleToggle("activateAccount")}
              />
            </div>
            <div className="flex items-center justify-between w-full  border-b-2 border-dashed py-3 ">
              <p>Profile Update</p>
              <ToggleButton
                size="sm"
                name="preferredName"
                isToggled={formData.profileUpdate}
                onToggle={() => handleToggle("profileUpdate")}
              />
            </div>
            <div className="flex items-center justify-between w-full  border-b-2 border-dashed py-3 ">
              <p>Disable Login</p>
              <ToggleButton
                size="sm"
                name="disableLogin"
                isToggled={formData.disableLogin}
                onToggle={() => handleToggle("disableLogin")}
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 w-full border border-black">
            <button className="border-[1.5px] w-full buttons rounded-[5px] py-1.5 px-3 md:py-4 md:px-6 border-[#A020F026] text-[#A020F0] text-[15px] leading-[20px] font-medium">
              Delete User
            </button>
            <button className="border-[1.5px] w-full buttons bg-[#A020F0] rounded-[5px] py-1.5 px-3 md:py-4 md:px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium">
              Reset Password
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default InstructorDetails;
