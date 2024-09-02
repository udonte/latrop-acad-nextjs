"use client";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { PRIVACYPOLICY } from "../constants";

const PrivacyPolicy = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  console.log(PRIVACYPOLICY);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      onClick={handleBackgroundClick}
    >
      <div
        className="fixed inset-0 bg-black opacity-20"
        onClick={onClose}
      ></div>
      <div className="relative bg-white p-3 md:p-10 rounded-xl z-10 w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 max-w-3xl max-h-3/4 overflow-y-auto flex flex-col items-center">
        <div className="flex justify-between w-full -mb-14">
          <Image
            src="/assets/page-icon.svg"
            width={56}
            height={56}
            alt="Logo"
            quality={100}
            className="w-[56px] h-[56px]"
          />
          <button onClick={onClose} className="text-black">
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
        </div>
        <div className="modal-header flex flex-col">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-sans">
              Privacy Policy
            </h2>
            <h3 className="mb-9 font-sans text-[#222222BF] text-xs sm:text-[15px]">
              Last updated: 16 -08 - 2024
            </h3>
          </div>
        </div>
        <div className="modal-content overflow-y-auto max-h-[55vh] w-full custom-scrollbar">
          <div className="flex flex-col text-sm gap-[8px]">
            {Object.keys(PRIVACYPOLICY[0]).map((key, index) => (
              <div key={index} className="mb-1">
                <h3 className="text-sm font-semibold">
                  {PRIVACYPOLICY[0][key].title}
                </h3>
                <ul className="list-disc pl-5">
                  {PRIVACYPOLICY[0][key].content.map((item, i) => (
                    <li key={i} className="mb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

PrivacyPolicy.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PrivacyPolicy;
