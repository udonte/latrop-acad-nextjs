"use client";

import Button from "@/app/components/Button";

import Modal from "@/app/components/Modal/Modal";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

const EventDetails = ({ isOpen, onClose, selectedEvent, openEditEvent }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Details"
      width="sm"
      position="center"
      onClose={onClose}
      showHeader={true}
      showCloseIcon={true}
    >
      <div className="mt-4 w-full text-[#222222]/75">
        {/* course */}
        <div className="flex items-start gap-4 w-full mb-6">
          <Image
            src={"/assets/calendar/graduation-cap.svg"}
            width={25}
            height={25}
            alt="arrow"
            quality={100}
            className=""
          />
          <div className="w-full">
            <p className="font-bold">Project Management</p>
            <p>Module1: Introduction to Product Management</p>
            <p>Instructor: Meredith Grey</p>
          </div>
        </div>
        <div className="flex items-start gap-4 w-full mb-6">
          <Image
            src={"/assets/calendar/calendar.svg"}
            width={25}
            height={25}
            alt="arrow"
            quality={100}
          />
          <div className="w-full">
            <p>July 16th 2024</p>
          </div>
        </div>
        <div className="flex items-start gap-4 w-full mb-6">
          <Image
            src={"/assets/calendar/clock.svg"}
            width={25}
            height={25}
            alt="arrow"
            quality={100}
          />
          <div className="w-full">
            <p>Every Tuesday and Wednesday</p>
          </div>
        </div>
        <div className="flex items-start gap-4 w-full mb-6">
          <Image
            src={"/assets/calendar/solar_videocamera-outline.svg"}
            width={25}
            height={25}
            alt="arrow"
            quality={100}
          />
          <div className="w-full">
            <p className="mb-2">Microsoft Teams</p>
            <div className="flex items-start justify-between ">
              <a
                href={
                  "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MmFc0YmMtMjUxZi00N2Q5LWFlOWIt4YzYzMTY0YjRi%40thread.v2/0?context=%7b%22Tid%22%3a%22ecd874e5-5d8e-4a6f-8869-6ecbc235cadf%22%2c%22Oid%22%3a%221582feb8-e2de-4877-b6a4-60a7dbe8bc05%22%7d"
                }
                className="text-[#A020F0] underline"
              >
                Click Link to join
              </a>
              <div className="ml-auto flex items-start gap-3 w-fit">
                <button
                  className="  hover:text-[#A020F0]"
                  onClick={() => handleCopy()}
                >
                  <MdOutlineContentCopy size={20} />
                </button>
                <button className="border-[1.5px] w-[fit] buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium ">
                  Join Class
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EventDetails;
