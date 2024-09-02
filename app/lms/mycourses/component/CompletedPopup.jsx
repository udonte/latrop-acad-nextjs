"use client";
import React, { useState } from "react";
import { COMPLETEDPOPUP, SHAREPOPUP } from "../constants";
import Image from "next/image";
import SharePopup from "./SharePopup";
import Link from "next/link";

export const CompletedPopup = ({ isOpen, onClose }) => {
	const [share, setShare] = useState(false);

	const handleClick = () => {
		setShare(true);
	};
	const handleBackClick = () => {
		setShare(false);
	};
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			{share ? (
				<div className="flex gap-6 flex-col w-[90%] sm:w-[588px] relative">
					<div className="flex flex-col gap-6 items-center border border-[#2222221A] py-10 px-4 sm:px-10 rounded-2xl bg-white">
						<div className="flex justify-between">
							<Image
								src={SHAREPOPUP.backicon}
								width={1000}
								height={1000}
								alt="Back"
								onClick={handleBackClick}
								className="w-6 h-6 cursor-pointer"
							/>
							<div className="flex flex-col items-center gap-4">
								<Image
									src={SHAREPOPUP.shareicon}
									width={1000}
									height={1000}
									alt="Check"
									className="w-[100px] h-[100px]"
								/>
								<div className="flex flex-col gap-1 items-center">
									<p className="text-[#222222] text-center text-[26px] leading-[34px] font-bold">
										{SHAREPOPUP.heading}
									</p>
									<div>
										{SHAREPOPUP.text.map((item, index) => (
											<p
												key={index}
												className="text-[#222222BF] text-[15px] leading-[20px] text-center w-full"
											>
												{item}
											</p>
										))}
									</div>
								</div>
							</div>
							<Image
								src={COMPLETEDPOPUP.closeicon}
								width={1000}
								height={1000}
								alt="Close"
								onClick={onClose}
								className="w-5 h-5 cursor-pointer"
							/>
						</div>
						<div className="flex gap-4">
							{SHAREPOPUP.icons.map((item, index) => (
								<Link
									key={index}
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src={item.icon}
										width={1000}
										height={1000}
										alt="social media"
										className="w-12 h-12 cursor-pointer"
									/>
								</Link>
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="flex gap-6 flex-col w-[90%] sm:w-[588px] relative">
					<div className="flex flex-col gap-6 items-center border border-[#2222221A] py-10 px-4 sm:px-10 rounded-2xl bg-white">
						<div className="flex justify-between">
							<Image
								src={COMPLETEDPOPUP.backicon}
								width={1000}
								height={1000}
								alt="Back"
								onClick={onClose}
								className="w-6 h-6 cursor-pointer"
							/>
							<div className="flex flex-col items-center gap-4">
								<Image
									src={COMPLETEDPOPUP.check}
									width={1000}
									height={1000}
									alt="Check"
									className="w-[100px] h-[100px]"
								/>
								<div className="flex flex-col gap-1 items-center">
									<p className="text-[#222222] text-center text-[26px] leading-[34px] font-bold">
										{COMPLETEDPOPUP.course}
									</p>
									<p className="text-[#222222BF] text-[15px] leading-[20px] text-center w-full">
										{COMPLETEDPOPUP.text}
									</p>
								</div>
							</div>
							<Image
								src={COMPLETEDPOPUP.closeicon}
								width={1000}
								height={1000}
								alt="Close"
								onClick={onClose}
								className="w-5 h-5 cursor-pointer"
							/>
						</div>
						<div className="flex flex-col-reverse sm:flex-row gap-y-2 justify-between mt-3 sm:mt-6 w-full lg:w-[85%]">
							<button
								onClick={handleClick}
								className="flex gap-2 items-center justify-center border-[1.5px] buttons w-full sm:w-[48%] h-min rounded-[5px] py-4 px-6 border-[#A020F026] text-[15px] leading-[20px] font-medium"
							>
								{COMPLETEDPOPUP.button1}
							</button>
							<button className="flex gap-2 items-center justify-center border-[1.5px] buttons bg-[#A020F0] sm:w-[48%] h-min rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium">
								{COMPLETEDPOPUP.button2}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
