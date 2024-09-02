"use client";
import React, { useState } from "react";
import { BACKGROUNDIMG } from "../../myinfo/constants";
import { TOP } from "./constants";
import Image from "next/image";
import Link from "next/link";
import PriceCard from "../components/PriceCard";
import CourseOutline from "../components/CourseOutline";
import ProcessOutline from "../components/ProcessOutline";
import EnrollPopUp from "../components/EnrollPopUp";
import PaymentPlan from "../components/PaymentPlan";

const Course = ({ course }) => {
	const [isEnrollOpen, setIsEnrollOpen] = useState(false);
	const [isPaymentOpen, setIsPaymentOpen] = useState(false);

	const handleNext = () => {
		setIsEnrollOpen(false);
		setIsPaymentOpen(true);
	};

	const handleBack = () => {
		setIsPaymentOpen(false);
		setIsEnrollOpen(true);
	};

	const closeModal = () => {
		setIsEnrollOpen(false);
		setIsPaymentOpen(false);
	};
	const handleClick = () => {
		setIsEnrollOpen(true);
	};

	const { details, pricecard } = course;

	return (
		<div className="relative bg-[#F3F3F4] w-full min-h-[95vh]">
			<Image
				src={BACKGROUNDIMG}
				width={1000}
				height={1000}
				alt="Background img"
				className="absolute inset-0 w-auto h-full"
			/>
			<div className="flex flex-col gap-10 relative px-[3%] pt-5 pb-20">
				<div className="flex justify-between items-center">
					<Link
						href={TOP.linkback}
						passHref
						className="text-[#A020F0] font-medium"
					>
						{TOP.back}
					</Link>
					<button
						onClick={handleClick}
						className="border-[1.5px] buttons bg-[#A020F0] rounded-[5px] py-2 px-3 md:py-4 md:px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
					>
						{TOP.button}
					</button>
				</div>
				<div className="text-[#222222] flex flex-col gap-2 items-center text-center">
					<p className="font-bold text-[32px]">{details.heading}</p>
					<p className="text-base lg:w-[69%]">{details.subtext}</p>
				</div>
				<PriceCard pricecard={pricecard} />
				<div className="flex flex-wrap gap-y-6 justify-between w-full">
					<CourseOutline details={details} />
					<ProcessOutline process={details.process} />
				</div>
			</div>
			{isEnrollOpen && (
				<EnrollPopUp
					isOpen={isEnrollOpen}
					onClose={closeModal}
					onNext={handleNext}
				/>
			)}
			{isPaymentOpen && (
				<PaymentPlan
					onClose={closeModal}
					onBack={handleBack}
				/>
			)}
		</div>
	);
};

export default Course;
