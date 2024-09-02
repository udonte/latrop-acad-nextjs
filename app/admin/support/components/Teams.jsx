"use client";
import React, {useState} from "react";
import { TEAM_TEXT } from "../constants";


const Teams = ({searchTerm}) => {
  return (
    <div className="bg-white rounded-lg p-5 text-center">
    <img
      src="/assets/lms/chatbot2.svg"
      alt="Help Icon"
      className="mx-auto w-17 h-16 mb-2"
    />
    <h2 className="text-2xl font-semibold mb-2">{TEAM_TEXT.title}</h2>
    <p className="mb-4 -mt-3">{TEAM_TEXT.description}</p>
    <button className="bg-[#A020F0] text-sm border-gray-300 text-white px-12 py-3.5 rounded-md border-[1.5px] md:mb-0 buttons text-[15px] leading-[20px] w-3/4 md:w-auto mr-4">{TEAM_TEXT.goteamsButton}</button>
    
  </div>
  )
}

export default Teams