"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ENROLLEDCOURSE, ENROLLEDCOUSETABS, TASKBUTTON } from "../constants";
import TaskSubmitPopup from "./TaskSubmitPopup";
import Modules from "./Modules";
import Tasks from "./Tasks";
import { IncompletePopup } from "./IncompletePopup";

const Enrolled = () => {
	const [activeTab, setActiveTab] = useState("Course Details");
	const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handleClick = () => {
		setIsPopupOpen(true);
	};

	const handleClosePopup = () => {
		setIsPopupOpen(false);
	};
	const closeUploadPopup = () => {
		setIsUploadPopupOpen(false);
	};
	const changeTab = (tab) => {
		setActiveTab(tab);
	};
	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col gap-2">
				<Image
					width={1000}
					height={1000}
					src={ENROLLEDCOURSE.img}
					alt="Image"
					quality={100}
					onClick={handleClick}
					className="w-[175px] cursor-pointer md:w-[262px] h-[150px] md:h-[228px] object-cover rounded-lg enrolledcard"
				/>
				<div>
					<p className="font-medium text-[15px] md:text-base text-[#222222]">
						{ENROLLEDCOURSE.name}
					</p>
					<p className="text-[13px] md:text-[15px] text-[#22222280]">
						{ENROLLEDCOURSE.instructor}
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex justify-between">
					<div className="flex gap-3 lg:gap-4 items-center">
						{ENROLLEDCOUSETABS.map((tab, index) => (
							<p
								key={index}
								onClick={() => changeTab(tab)}
								className={`cursor-pointer text-[15px] md:text-[17px] font-medium ${
									activeTab === tab
										? "text-[#222222]"
										: "text-[#22222280]"
								} ${
									index === 1
										? "pl-3 md:pl-4 border-l border-black"
										: ""
								}`}
							>
								{tab}
							</p>
						))}
					</div>
					<button
						onClick={() => setIsUploadPopupOpen(true)}
						className="flex items-center border-[1.5px] buttons md:hidden bg-[#A020F0] w-max h-min rounded-[5px] py-3 px-4 text-[#ffffff] text-[15px] leading-[20px] font-medium"
					>
						{TASKBUTTON}
					</button>
				</div>
				{activeTab === "Course Details" ? <Modules /> : <Tasks />}
			</div>
			<TaskSubmitPopup
				isOpen={isUploadPopupOpen}
				onClose={closeUploadPopup}
			/>
			<IncompletePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
		</div>
	);
};

export default Enrolled;
