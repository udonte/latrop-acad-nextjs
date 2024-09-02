import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VIEW_MODAL_TEXT } from "../constants";

const ReplyModal = ({ onClose, message }) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg w-full max-w-lg p-7 mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{VIEW_MODAL_TEXT.title}</h2>
          <button
             className="text-[#262432]"
            onClick={onClose}
          >
            <AiOutlineClose size={18}/>
          </button>
        </div>
        <div className="space-y-4">
        <h3 className="text-sm font-medium -mb-3 text-[#222222]">{VIEW_MODAL_TEXT.semititle}</h3>


          {/* Student Info */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <p className="text-sm text-[#222222BF]">{VIEW_MODAL_TEXT.studentInfo.nameLabel}</p>
              <p className="text-sm text-[#222222BF]">{VIEW_MODAL_TEXT.studentInfo.emailLabel}</p>
            </div>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-medium text-[#222222BF]">{VIEW_MODAL_TEXT.studentInfo.name}</p>
              <p className="text-sm font-medium text-[#222222BF]">{VIEW_MODAL_TEXT.studentInfo.email}</p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-[#222222BF]">{VIEW_MODAL_TEXT.studentInfo.messageLabel}</p>
              <p className="text-sm text-[#222222BF] font-medium">{VIEW_MODAL_TEXT.studentInfo.message}</p>
            </div>
          </div>

          {/* Your Reply */}
          <div className="text-start">
          <p className="text-sm -mb-3 font-medium">{VIEW_MODAL_TEXT.yourReplyLabel}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-sm text-[#222222BF] font-medium">{VIEW_MODAL_TEXT.yourReply}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
