import React, { useState } from "react";
import Image from "next/image";
import { UPLOADPOPUP } from "../../myinfo/constants";
import TaskDropdown from "@/app/lms/mycourses/component/TaskDropdown";
import { GRADEMODAL } from "../constants";
import { SUBMITTASK } from "@/app/lms/mycourses/constants";

const GradingModal = ({ onClose, studentDetails }) => {
	const [formData, setFormData] = useState({
		grade: "",
	});

	const handleSelectChange = (type, value) => {
		setFormData((prevData) => ({
			...prevData,
			[type]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data:", formData);
		onClose();
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white flex flex-col max-h-[90vh] overflow-scroll gap-6 rounded-lg p-4 sm:p-8 w-[90%] sm:w-[588px]">
				<div className="flex justify-between">
					<div>
						<h2 className="text-base sm:text-[18px] text-[#222222] font-bold">
							{GRADEMODAL.heading}
						</h2>
						<p className="text-[13px] sm:text-[15px] text-[#222222BF]">
							{GRADEMODAL.subtext}
						</p>
					</div>
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
					<div className="flex flex-col gap-y-4 sm:flex-row justify-between bg-gray-100 rounded-lg py-3 px-4 border border-[#22222205]">
						<div className="flex flex-col gap-4 min-w-full sm:min-w-[48%]">
							<div className="flex flex-col gap-1 text-wrap">
								<p className="text-sm text-[#22222280]">
									{GRADEMODAL.name}
								</p>
								<p className="text-base text-[#222222BF]">
									{studentDetails.name}
								</p>
							</div>
							<div className="flex flex-col gap-1 text-wrap">
								<p className="text-sm text-[#22222280]">
									{GRADEMODAL.course}
								</p>
								<p className="text-base text-[#222222BF]">
									{studentDetails.course}
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-4 min-w-full sm:min-w-[48%]">
							<div className="flex flex-col gap-1 text-wrap">
								<p className="text-sm text-[#22222280]">
									{GRADEMODAL.email}
								</p>
								<p className="text-base text-[#222222BF] truncate">
									{studentDetails.email}
								</p>
							</div>
							<div className="flex flex-col gap-1 text-wrap">
								<p className="text-sm text-[#22222280]">
									{GRADEMODAL.module}
								</p>
								<p className="text-base text-[#222222BF]">
									{studentDetails.task}
								</p>
							</div>
						</div>
					</div>
					<div className="flex gap-2 flex-col">
						<p className="text-sm text-[#555555]">
							{GRADEMODAL.task}
						</p>
						<div className="flex justify-between items-center gap-3 px-4 py-3 h-[49px] rounded-lg border border-[#2222221A]">
							<div className="flex gap-4 items-center">
								<Image
									src={SUBMITTASK.pdf}
									width={1000}
									height={1000}
									alt="pdf"
									className="w-6 h-6"
								/>
								<p className="text-sm text-[#222222BF]">
									{GRADEMODAL.file}
								</p>
							</div>
							<Image
								src={GRADEMODAL.download}
								width={1000}
								height={1000}
								alt="Download"
								className="w-5 h-5 cursor-pointer"
							/>
						</div>
					</div>
					<div className="flex gap-2 flex-col">
						<p className="text-sm text-[#555555]">
							{GRADEMODAL.linklabel}
						</p>
						<div className="flex gap-2">
							<div className="flex-1 min-w-0 items-center gap-3 px-4 py-3 h-[49px] sm:w-auto rounded-lg border border-[#2222221A] overflow-hidden">
								<p className="text-sm text-[#222222BF] truncate">
									{GRADEMODAL.link}
								</p>
							</div>
							<button className="flex gap-2 items-center justify-center border-[1.5px] buttons bg-[#A020F0] h-min rounded-[5px] py-[14px] px-6 text-[#ffffff] text-nowrap text-[15px] leading-[20px] font-medium">
								{GRADEMODAL.linkbutton}
							</button>
						</div>
					</div>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-4"
					>
						<div>
							<TaskDropdown
								item={GRADEMODAL.dropdown}
								onSelect={(value) =>
									handleSelectChange(
										GRADEMODAL.dropdown.name,
										value
									)
								}
							/>
						</div>
						<div className="flex flex-col-reverse sm:flex-row gap-y-2 justify-between">
							<button
								type="button"
								className="flex gap-2 items-center justify-center border-[1.5px] buttons w-full sm:w-[48%] h-min rounded-[5px] py-4 px-6 border-[#A020F026] text-[15px] leading-[20px] font-medium"
								onClick={onClose}
							>
								{GRADEMODAL.cancel}
							</button>
							<button
								type={GRADEMODAL.submit.type}
								className="flex gap-2 items-center justify-center border-[1.5px] buttons bg-[#A020F0] sm:w-[48%] h-min rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
							>
								{GRADEMODAL.submit.name}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default GradingModal;
