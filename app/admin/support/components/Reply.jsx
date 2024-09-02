import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { REPLY_MODAL_TEXT } from "../constants";

const Reply = ({ onClose, message }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-10"
      onClick={onClose}
    >
      <div
        className="bg-white p-10 rounded-lg w-full max-w-xl mx-4 md:mx-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-7 right-10 text-black"
        >
          <AiOutlineClose size={18} />
        </button>
        <h2 className="text-lg font-bold text-start">
          {REPLY_MODAL_TEXT.title}
        </h2>
        <form>
          <div className="my-4">
            <label className="block text-gray-700 text-start">
              {REPLY_MODAL_TEXT.sendToLabel}
            </label>
            <input
              type="text"
              placeholder={REPLY_MODAL_TEXT.emailPlaceholder}
              className="w-full mt-1 p-4 text-xs border border-gray-300 rounded-md"
            />
          </div>
          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700 text-start">
              {REPLY_MODAL_TEXT.titleLabel}
            </label>
            <input
              type="text"
              placeholder={REPLY_MODAL_TEXT.titlePlaceholder}
              className="w-full mt-1 text-xs p-4 border border-gray-300 rounded-md"
            />
          </div>
          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700 text-start">
              {REPLY_MODAL_TEXT.messageLabel}
            </label>
            <textarea
              placeholder={REPLY_MODAL_TEXT.messagePlaceholder}
              className="w-full mt-1 text-xs p-4 border border-gray-300 rounded-md"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-white text-sm text-[#A020F0] px-10 py-4 rounded-md border-[1.5px] buttons text-[15px] leading-[20px]"
            >
              {REPLY_MODAL_TEXT.cancelButton}
            </button>
            <button
              type="submit"
              className="bg-[#A020F0] text-sm text-white px-5 py-4 rounded-md border-[1.5px] buttons text-[15px] leading-[20px]"
            >
              {REPLY_MODAL_TEXT.submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reply;
