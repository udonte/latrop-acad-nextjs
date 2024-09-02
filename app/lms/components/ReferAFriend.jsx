"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { REFERRALLINK } from "../constants";

const ReferAFriend = ({ onClose }) => {
  const [copyMessage, setCopyMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(REFERRALLINK).then(() => {
      setCopyMessage("Referral link copied to clipboard!");
      setTimeout(() => {
        setCopyMessage("");
      }, 3000);
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[489px]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Refer A Friend</h2>
          <button onClick={onClose} className="text-2xl font-bold">
            <AiOutlineClose />
          </button>
        </div>
        <p className="mb-4 font-light text-[#222222BF]">
          Invite your friends by sharing your link
        </p>
        <div className="flex flex-row font-sans items-center">
          <input
            type="text"
            value={REFERRALLINK}
            readOnly
            className="border text-[#939198] rounded-md p-3 flex-1 mr-2"
          />
          <buttons
            onClick={handleCopyLink}
            className="px-5 py-3 rounded-md w-[26%] buttons bg-[#A020F0] text-[#ffffff]"
          >
            Copy Link
          </buttons>
        </div>
        {copyMessage && (
          <p className="mt-4 text-black">{copyMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ReferAFriend;
