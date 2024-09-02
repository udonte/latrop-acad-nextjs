import React, { useState } from "react";
import Image from "next/image";
import { UPLOADPOPUP } from "../../myinfo/constants";
import TaskDropdown from "@/app/lms/mycourses/component/TaskDropdown";
import { SUBMITTASK } from "../constants";

const UploadVideo = ({ isOpen, onClose }) => {
	const [fileName, setFileName] = useState("");
	const [formData, setFormData] = useState({
		module: "",
		link: "",
		file: null,
	});

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setFileName(file.name);
			setFormData((prev) => ({ ...prev, file }));
		}
	};

	const handleDeleteFile = () => {
		setFileName("");
		setFormData((prev) => ({ ...prev, file: null }));
	};

	const handleSelectChange = (type, value) => {
		setFormData((prevData) => ({
			...prevData,
			[type]: value,
		}));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data:", formData);
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white flex flex-col gap-6 rounded-lg p-4 sm:p-8 w-[90%] sm:w-[588px]">
				<div className="flex justify-between">
					<div>
						<h2 className="text-base sm:text-[18px] text-[#222222] font-bold">
							{SUBMITTASK.heading}
						</h2>
						<p className="text-[13px] sm:text-[15px] text-[#222222BF]">
							{SUBMITTASK.subtext}
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
				<form onSubmit={handleSubmit} className="flex flex-col gap-6">
					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-2">
							<label className="text-sm text-[#555555]">
								{SUBMITTASK.input.label}
							</label>
							<input
								type={SUBMITTASK.input.type}
								name={SUBMITTASK.input.name}
								value={formData[SUBMITTASK.input.name]}
								onChange={handleChange}
								placeholder={SUBMITTASK.input.placeholder}
								className="py-3 px-4 rounded-lg border border-[#2222221A] w-full placeholder:text-[#AAAAAA] placeholder:text-sm focus:outline-none"
							/>
						</div>
						<TaskDropdown
							item={SUBMITTASK.dropdown}
							onSelect={(value) =>
								handleSelectChange(
									SUBMITTASK.dropdown.name,
									value
								)
							}
						/>
						<div className="flex flex-col gap-2">
							<label className="text-sm text-[#555555]">
								{SUBMITTASK.task.heading}
							</label>

							<div className="relative h-32 sm:h-40 border-dashed border border-[#22222240] bg-[#A020F00D] p-6 rounded-lg flex justify-center items-center">
								<input
									type="file"
									className="opacity-0 absolute inset-0 cursor-pointer"
									accept=".mp4,.mkv,.mov,video/mp4,video/x-matroska,video/quicktime"
									onChange={handleFileChange}
								/>
								<div className="flex flex-col gap-3 items-center justify-center sm:w-[360px]">
									<Image
										src={UPLOADPOPUP.icon}
										width={1000}
										height={1000}
										alt="upload"
										className="w-6 h-6 sm:w-7 sm:h-7"
									/>
									<div className="text-center text-gray-400">
										<p className="text-xs sm:text-sm text-wrap">
											{formData.file
												? fileName
												: SUBMITTASK.task.instruction}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col-reverse sm:flex-row gap-y-2 justify-between mt-3 sm:mt-6">
						<button
							type="button"
							className="flex gap-2 items-center justify-center border-[1.5px] buttons w-full sm:w-[48%] h-min rounded-[5px] py-4 px-6 border-[#A020F026] text-[15px] leading-[20px] font-medium"
							onClick={onClose}
						>
							{SUBMITTASK.cancel}
						</button>
						<button
							type={SUBMITTASK.submit.type}
							className="flex gap-2 items-center justify-center border-[1.5px] buttons bg-[#A020F0] sm:w-[48%] h-min rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
						>
							{SUBMITTASK.submit.name}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UploadVideo;
