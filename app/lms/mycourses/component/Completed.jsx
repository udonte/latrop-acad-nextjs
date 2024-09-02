"use client";
import React, { useState } from "react";
import Image from "next/image";
import { COMPLETED, COMPLETEDCOURSE } from "../constants";
import { CompletedPopup } from "./CompletedPopup";

const Completed = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handleClick = () => {
		setIsPopupOpen(true);
	};

	const handleClosePopup = () => {
		setIsPopupOpen(false);
	};
	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col gap-2">
				<Image
					width={1000}
					height={1000}
					src={COMPLETEDCOURSE.img}
					alt="Image"
					quality={100}
					onClick={handleClick}
					className="w-[175px] md:w-[262px] h-[150px] md:h-[228px] object-cover rounded-lg enrolledcard cursor-pointer"
				/>
				<div>
					<p className="font-medium text-[15px] md:text-base text-[#222222]">
						{COMPLETEDCOURSE.name}
					</p>
					<p className="text-[13px] md:text-[15px] text-[#22222280]">
						{COMPLETEDCOURSE.status}
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<p className="text-base font-medium text-[#222222]">
					{COMPLETED.heading}
				</p>
				<div className="py-2 px-2 md:py-6 md:px-4 lg:py-6 lg:px-6 bg-white rounded-lg border border-[#A020F01A] flex flex-col gap-2">
					{COMPLETED.extras.map((item, index) => (
						<div
							key={index}
							className="pb-4 flex justify-between border-b border-[#2222221A]"
						>
							<div className="py-3 px-4 flex gap-6 items-center w-full justify-between">
								<div className="flex gap-4 items-center w-[90%] md:w-auto">
									<Image
										width={1000}
										height={1000}
										src={item.icon}
										alt="Module"
										quality={100}
										className="w-5 h-5"
									/>
									<p className="font-medium text-base text-[#222222]">
										{item.text}
									</p>
								</div>
								<Image
									width={1000}
									height={1000}
									src={COMPLETED.arrow}
									alt="Arrow"
									quality={100}
									className="w-5 h-5"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<CompletedPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
		</div>
	);
};

export default Completed;
