"use client";
import React, { useState } from "react";
import { BACKGROUNDIMG } from "../../myinfo/constants";
import { TOP } from "./constants";
import Image from "next/image";
import Link from "next/link";
import Details from "../components/Details";
import { EDIT } from "../constants";
import EditPopup from "../components/EditPopup";

const Course = ({ coursename }) => {
	const [isEditPopup, setIsEditPopup] = useState(false);
	const handleClick = () => {
		setIsEditPopup(true);
	};
	const closeModal = () => {
		setIsEditPopup(false);
	};

	const { instructor } = coursename.details;
	return (
		<div className="relative bg-[#F3F3F4] w-full min-h-[95vh]">
			<Image
				src={BACKGROUNDIMG}
				width={1000}
				height={1000}
				alt="Background img"
				className="absolute inset-0 w-auto h-full"
			/>
			<div className="flex flex-col gap-6 relative px-[3%] pt-5 pb-20">
				<div className="flex justify-between items-center">
					<Link
						href={TOP.linkback}
						passHref
						className="text-[#A020F0] text-[13px] md:text-base font-medium"
					>
						{TOP.back}
					</Link>
					<button
						onClick={handleClick}
						className="flex gap-2 items-center justify-center border-[1.5px] buttons bg-[#A020F0] rounded-[5px] py-2 px-3 md:py-4 md:px-6 text-[#ffffff] text-[13px] md:text-[15px] leading-[20px] font-medium"
					>
						<Image
							src={EDIT}
							width={1000}
							height={1000}
							alt="Edit"
							className="w-4 md:w-5 h-4 md:h-5"
						/>
						<p>{TOP.button}</p>
					</button>
				</div>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<p className="text-[13px] md:text-[15px] text-[#222222A6] font-semibold">
							{instructor.heading}
						</p>
						<div className="flex gap-4 p-6 items-center rounded-lg bg-white">
							<div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex-shrink-0">
								<Image
									src={instructor.avatar}
									width={1000}
									height={1000}
									alt="Instructor Image"
									className="object-cover w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-[#FFD43A]"
								/>
							</div>
							<div className="flex flex-col gap-1 flex-grow">
								<p className="text-xs md:text-[17px] font-semibold text-[#222222]">
									{instructor.name}
								</p>
								<p className="text-xs md:text-base text-[#222222BF]">
									{instructor.role}
								</p>
								<p className="text-xs md:text-[15px] text-[#222222BF]">
									{instructor.email}
								</p>
							</div>
						</div>
					</div>
					<Details details={coursename.details} />
				</div>
			</div>
			<EditPopup isOpen={isEditPopup} onClose={closeModal} />
		</div>
	);
};

export default Course;
