"use client";

import Modal from "@/app/components/Modal/Modal";
import React, { useState } from "react";
import { CgTrash } from "react-icons/cg";
import { FiCheckCircle, FiTrash } from "react-icons/fi";

const DeleteBlog = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      title=""
      width="sm"
      position="center"
      onClose={onClose}
    >
      <div className="min-h-[200px] flex flex-col justify-center items-center">
        <div>
          <CgTrash size={50} className="text-[#A020F0] mb-4" />
        </div>
        <p className="font-bold text-xl mt-4">
          {" "}
          Are you sure you want to delete this blog?
        </p>
        <div className="mt-8 flex items-center justify-between gap-2 w-full">
          <button
            className="border-[1.5px] w-full buttons rounded-[5px] py-4 px-6 border-[#A020F026] text-[#A020F0] text-[15px] leading-[20px] font-medium"
            onClick={onClose}
          >
            No
          </button>
          <button
            className="border-[1.5px] w-full buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
            onClick={onClose}
          >
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteBlog;
