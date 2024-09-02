"use client";
import React, { useState } from "react";
import Image from "next/image";
import { UPLOADPOPUP } from "@/app/lms/myinfo/constants";
import { EDITFORM } from "../constants";

const EditPopup = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		courses: "",
		referral_link: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSelectChange = (type, value) => {
		setFormData((prevData) => ({
			...prevData,
			[type]: value,
		}));
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white rounded-lg flex flex-col gap-6 p-4 sm:p-8 w-[90%] sm:w-[588px]">
				<div className="flex justify-between">
					<h2 className="text-base sm:text-lg font-semibold">
						{EDITFORM.heading}
					</h2>
					<Image
						src={UPLOADPOPUP.close}
						width={1000}
						height={1000}
						alt="Close"
						onClick={onClose}
						className="w-5 h-5 cursor-pointer"
					/>
				</div>
				<div className="flex flex-col gap-4">
					{EDITFORM.fields.map((item, index) => (
						<div key={index} className="flex gap-4 items-center">
							<Image
								src={item.icon}
								width={1000}
								height={1000}
								alt="Close"
								onClick={onClose}
								className="w-5 h-5"
							/>
							{index === 3 ? (
								<textarea
									name={item.input.name}
									value={formData[item.input.name]}
									onChange={handleChange}
									placeholder={item.input.placeholder}
									className="py-3 px-4 rounded-lg border w-full border-[#2222221A] placeholder:text-[#AAAAAA] placeholder:text-sm focus:outline-none"
									cols={50}
								/>
							) : (
								<input
									type="text"
									name={item.input.name}
									value={formData[item.input.name]}
									onChange={handleChange}
									placeholder={item.input.placeholder}
									className="py-3 px-4 rounded-lg border w-full border-[#2222221A] placeholder:text-[#AAAAAA] placeholder:text-sm focus:outline-none"
								/>
							)}
						</div>
					))}
					<button
						onClick={onClose}
						className="flex gap-2 items-center justify-center border-[1.5px] buttons bg-[#A020F0] h-min rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
					>
						{EDITFORM.button}
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditPopup;
