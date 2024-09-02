"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { COURSES, DETAILHEADING, VIDEO } from "../constants";
import { BACKGROUNDIMG } from "@/app/lms/myinfo/constants";
import Modules from "./Modules";
import UploadVideo from "./UploadVideo";

const MyCourses = () => {
	const [activeTab, setActiveTab] = useState(COURSES[0].name);
	const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);

	const activeCourse = COURSES.find((course) => course.name === activeTab);

	const changeTab = (tab) => {
		setActiveTab(tab);
	};
	const closeUploadPopup = () => {
		setIsUploadPopupOpen(false);
	};
	const handleButtonClick = () => {
		setIsUploadPopupOpen(true);
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
					<div className="flex flex-wrap items-center w-full sm:w-auto gap-[2%] sm:gap-6">
						{COURSES.map((course, index) => (
							<div key={index} className="flex flex-col w-[49%] sm:w-auto gap-2">
								<Image
									width={1000}
									height={1000}
									src={course.img}
									alt="Image"
									quality={100}
									onClick={() => changeTab(course.name)}
									className={`${
										course.name === activeTab
											? "enrolledcard"
											: "coursecard cursor-pointer"
									} aspect-[4/3] sm:aspect-auto sm:w-[220px] md:w-[230px] lg:w-[262px] sm:h-[190px] md:h-[200px] lg:h-[228px] object-cover rounded-lg`}
								/>
								<p className="font-medium text-[13px] lg:text-[15px] text-[#222222]">
									{course.name}
								</p>
							</div>
						))}
					</div>
					<button
						onClick={handleButtonClick}
						className="hidden sm:flex items-center border-[1.5px] buttons bg-[#A020F0] w-max h-min rounded-[5px] py-4 px-4 lg:px-6 text-[#ffffff] text-[13px] lg:text-[15px] leading-[20px] font-medium"
					>
						{VIDEO}
					</button>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex justify-between items-center">
						<p className="cursor-pointer text-[15px] md:text-[17px] font-medium text-[#222222]">
							{DETAILHEADING}
						</p>
						<button
							onClick={handleButtonClick}
							className="sm:hidden items-center border-[1.5px] buttons bg-[#A020F0] w-max h-min rounded-[5px] py-3 px-3 sm:py-4 sm:px-4 lg:px-6 text-[#ffffff] text-[13px] lg:text-[15px] leading-[20px] font-medium"
						>
							{VIDEO}
						</button>
					</div>
					<Modules modules={activeCourse.coursedetail} />
				</div>
			</div>
			<UploadVideo
				isOpen={isUploadPopupOpen}
				onClose={closeUploadPopup}
			/>
		</div>
	);
};

export default MyCourses;
