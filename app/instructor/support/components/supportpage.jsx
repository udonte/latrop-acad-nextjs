"use client";
import React from 'react';
import { SUPPORT_TEXT, INSTRUCTOR_INFO } from '../constants';

const SupportPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-center" style={{ backgroundImage: "url('/assets/lms/lmsbg.svg')", backgroundSize: "cover" }}>
      <div className="space-y-8 max-w-5xl w-full mx-4 md:mx-auto pb-10 pt-5">

        {/* First card */}
        <div className="bg-white rounded-lg p-5 text-center">
          <img src="/assets/lms/chatbot2.svg" alt="Help Icon" className="mx-auto w-18 h-18 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">{SUPPORT_TEXT.title}</h2>
          <p className="mb-4 -mt-3">{SUPPORT_TEXT.description}</p>
          <button
            className="bg-[#A020F0] text-white px-12 py-3.5 rounded-md w-3/4 md:w-auto border-[1.5px] buttons text-[15px] leading-[20px]"
          >
            {SUPPORT_TEXT.goToTeamsButton}
          </button>
        </div>

        {/* Second card */}
        <div className="bg-white shadow-md rounded-lg p-8 mx-auto md:max-w-xl">
          <h2 className="text-2xl font-semibold text-center mb-6 mt-2">{INSTRUCTOR_INFO.title}</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-[#555555]">{INSTRUCTOR_INFO.fullNameLabel}</label>
              <input
                type="text"
                placeholder={INSTRUCTOR_INFO.fullNamePlaceholder}
                className="w-full mt-1 text-xs p-4 border border-[#2222221A] rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#555555]">{INSTRUCTOR_INFO.subjectLabel}</label>
              <input
                type="text"
                placeholder={INSTRUCTOR_INFO.subjectPlaceholder}
                className="w-full mt-1 text-xs p-4 border border-[#2222221A] rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#555555]">{INSTRUCTOR_INFO.messageLabel}</label>
              <textarea
                placeholder={INSTRUCTOR_INFO.messagePlaceholder}
                className="w-full mt-1 text-xs p-4 border border-[#2222221A] rounded-md"
                rows="3"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#A020F0] mb-2 text-white px-12 py-3.5 rounded-md w-3/4 md:w-auto border-[1.5px] buttons text-[15px] leading-[20px]"
              >
                {INSTRUCTOR_INFO.submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
