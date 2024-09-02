"use client";
import React, { useState } from "react";
import Image from "next/image";
import { UPLOADPOPUP } from "../../myinfo/constants";
import { ENROLLFORM, REFERRAL } from "../constants";
import TaskDropdown from "../../mycourses/component/TaskDropdown";
import { COURSES } from "@/app/enroll/constants";

const EnrollPopUp = ({ isOpen, onClose, onNext }) => {
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
					<div>
						<h2 className="text-base sm:text-lg font-semibold">
							{ENROLLFORM.heading}
						</h2>
						<p className="text-[13px] sm:text-[15px] text-[#222222BF]">
							{ENROLLFORM.subtext}
						</p>
					</div>
					<Image
						src={UPLOADPOPUP.close}
						width={1000}
						height={1000}
						alt="Background img"
						onClick={onClose}
						className="w-5 h-5 cursor-pointer"
					/>
				</div>
				<div className="flex flex-wrap gap-[2%] gap-y-4">
					<TaskDropdown
						item={COURSES}
						onSelect={(value) =>
							handleSelectChange(COURSES.name, value)
						}
					/>
					<div className="flex flex-col w-full gap-1">
						<div className="flex justify-between">
							<label className="text-sm text-[#555555]">
								{REFERRAL.label}
							</label>
							<p className="text-xs text-[#A020F0]">
								{REFERRAL.tag}
							</p>
						</div>
						<input
							type={REFERRAL.type}
							name={REFERRAL.name}
							value={formData[REFERRAL.name]}
							onChange={handleChange}
							placeholder={REFERRAL.placeholder}
							className="py-3 px-4 rounded-lg border border-[#2222221A] w-full placeholder:text-[#AAAAAA] placeholder:text-sm focus:outline-none"
						/>
					</div>
				</div>
				<div className="flex flex-col-reverse sm:flex-row gap-y-2 justify-between mt-3 sm:mt-6">
					<button
						className="flex gap-2 items-center justify-center border-[1.5px] buttons w-full sm:w-[48%] h-min rounded-[5px] py-4 px-6 border-[#A020F026] text-[15px] leading-[20px] font-medium"
						onClick={onClose}
					>
						{ENROLLFORM.cancel}
					</button>
					<button
						onClick={onNext}
						className="flex gap-2 items-center justify-center border-[1.5px] buttons bg-[#A020F0] sm:w-[48%] h-min rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
					>
						{ENROLLFORM.next}
					</button>
				</div>
			</div>
		</div>
	);
};

export default EnrollPopUp;
