import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SUPPORT_TEXT } from "../constants";

const TalkToSupportModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl mx-4 md:mx-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-7 right-10 text-black"
        >
          <AiOutlineClose size={24} />
        </button>
        <h2 className="text-lg font-bold text-center">
          {SUPPORT_TEXT.title}
        </h2>
        <form>
          <div className="my-4">
            <label className="block text-gray-700">
              {SUPPORT_TEXT.fullNameLabel}
            </label>
            <input
              type="text"
              placeholder={SUPPORT_TEXT.fullNamePlaceholder}
              className="w-full mt-1 p-4 text-xs border border-gray-300 rounded-md"
            />
          </div>
          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700">
              {SUPPORT_TEXT.subjectLabel}
            </label>
            <input
              type="text"
              placeholder={SUPPORT_TEXT.subjectPlaceholder}
              className="w-full mt-1 text-xs p-4 border border-gray-300 rounded-md"
            />
          </div>
          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700">
              {SUPPORT_TEXT.messageLabel}
            </label>
            <textarea
              placeholder={SUPPORT_TEXT.messagePlaceholder}
              className="w-full mt-1 text-xs p-4 border border-gray-300 rounded-md"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <buttons
              type="submit"
              className="bg-[#A020F0] text-sm text-white px-5 py-4 rounded-md border-[1.5px] buttons text-[15px] leading-[20px]"
            >
              {SUPPORT_TEXT.submitButton}
            </buttons>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TalkToSupportModal;
