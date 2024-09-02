"use client";
import React, { useState } from "react";
import { TEXT, INSTRUCTOR_TEXT } from "../constants";
import TalkToInstructorModal from "./TalkToInstructorModal";
import TalkToSupportModal from "./TalkToSupportModal";

const SupportPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 bg-center"
      style={{
        backgroundImage: "url('/assets/lms/lmsbg.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="space-y-8 max-w-5xl w-full mx-4 md:mx-auto pb-10 pt-5">
        {/* First card */}
        <div className="bg-white rounded-lg p-5 text-center">
          <img
            src="/assets/lms/chatbot2.svg"
            alt="Help Icon"
            className="mx-auto w-18 h-18 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">{TEXT.title}</h2>
          <p className="mb-4 -mt-3">{TEXT.description}</p>
          <button
            onClick={openModal}
            className="bg-white text-xs border-gray-300 text-[#A020F0] px-9 py-3 rounded-md border-[1.5px] md:mb-0 buttons text-[15px] leading-[20px] w-3/4 md:w-auto mr-4"
          >
            {TEXT.talkToInstructorButton}
          </button>

          <button
            onClick={() => alert("Join a Peer Group clicked")}
            className="bg-[#A020F0] text-xs text-white px-9 py-3.5 rounded-md w-3/4 md:w-auto border-[1.5px] buttons text-[15px] leading-[20px]"
          >
            {TEXT.joinPeerGroupButton}
          </button>
        </div>

        {/* Second card */}
        <div className="bg-white shadow-md rounded-lg p-8 mx-auto md:max-w-xl">
          <h2 className="text-xl font-semibold text-center mb-6">
            {INSTRUCTOR_TEXT.title}
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700">
                {INSTRUCTOR_TEXT.fullNameLabel}
              </label>
              <input
                type="text"
                placeholder={INSTRUCTOR_TEXT.fullNamePlaceholder}
                className="w-full mt-1 text-xs p-4 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {INSTRUCTOR_TEXT.subjectLabel}
              </label>
              <input
                type="text"
                placeholder={INSTRUCTOR_TEXT.subjectPlaceholder}
                className="w-full mt-1 text-xs p-4 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {INSTRUCTOR_TEXT.messageLabel}
              </label>
              <textarea
                placeholder={INSTRUCTOR_TEXT.messagePlaceholder}
                className="w-full mt-1 text-xs p-4 border border-gray-300 rounded-md"
                rows="3"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#A020F0] text-xs text-white px-12 py-3.5 rounded-md w-3/4 md:w-auto border-[1.5px] buttons text-[15px] leading-[20px]"
              >
                {INSTRUCTOR_TEXT.submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
      {isModalOpen && <TalkToInstructorModal onClose={closeModal} />}
    </div>
  );
};

export default SupportPage;
