"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BACKGROUNDIMG } from "../../myinfo/constants";
import { ENROLLBUTTON, TABS, TASKBUTTON } from "../constants";
import TaskSubmitPopup from "./TaskSubmitPopup";
import Enrolled from "./Enrolled";
import Completed from "./Completed";
import { useRouter } from "next/navigation";

const MyCourses = () => {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState("Enrolled Courses");
	const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);

	const changeTab = (tab) => {
		setActiveTab(tab);
	};
	const closeUploadPopup = () => {
		setIsUploadPopupOpen(false);
	};
	const handleButtonClick = () => {
		if (activeTab === "Enrolled Courses") {
			setIsUploadPopupOpen(true);
		} else {
			router.push("/lms/enroll");
		}
	};
	return (
		<div className="relative bg-[#F3F3F4] w-full min-h-[95vh]">
			<Image
				src={BACKGROUNDIMG}
				width={1000}
				height={1000}
				alt="Background img"
				className="absolute inset-0 w-auto h-full"
			/>
			<div className="relative flex flex-col gap-7 px-[3%] pt-5 pb-20">
				<div className="flex justify-between">
					<div className="flex items-center border-b border-[#2222221A]">
						{TABS.map((tab, index) => (
							<p
								key={index}
								onClick={() => changeTab(tab)}
								className={`py-2.5 px-3 md:px-4 cursor-pointer text-[14px] md:text-[15px] ${
									activeTab === tab
										? "text-[#A020F0] border-b-2 border-[#A020F0]"
										: ""
								}`}
							>
								{tab}
							</p>
						))}
					</div>
					<button
						onClick={handleButtonClick}
						className="md:flex gap-2 items-center border-[1.5px] buttons hidden bg-[#A020F0] w-max h-min rounded-[5px] py-4 px-4 md:px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
					>
						{activeTab === "Enrolled Courses"
							? TASKBUTTON
							: ENROLLBUTTON}
					</button>
				</div>
				{activeTab === "Enrolled Courses" ? (
					<Enrolled />
				) : (
					<Completed />
				)}
			</div>
			<TaskSubmitPopup
				isOpen={isUploadPopupOpen}
				onClose={closeUploadPopup}
			/>
		</div>
	);
};

export default MyCourses;
