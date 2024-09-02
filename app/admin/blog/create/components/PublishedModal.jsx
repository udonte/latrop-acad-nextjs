"use client";

import Modal from "@/app/components/Modal/Modal";
import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const PublishedModal = ({ isOpen, onClose }) => {
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
          <FiCheckCircle size={50} className="text-[#A020F0] mb-4" />
        </div>
        <p className="font-bold text-xl"> Your Blog has been published</p>
      </div>
    </Modal>
  );
};

export default PublishedModal;
