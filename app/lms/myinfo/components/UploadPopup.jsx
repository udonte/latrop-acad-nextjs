import React, { useState } from "react";
import { UPLOADPOPUP } from "../constants";
import Image from "next/image";

const UploadPopup = ({ isOpen, onClose, onFileUpload }) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [fileName, setFileName] = useState("");

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setSelectedFile(file);
			setFileName(file.name);
		}
	};

	const handleSavePhoto = () => {
		if (selectedFile) {
			onFileUpload(selectedFile);
			onClose();
		}
	};
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white rounded-lg p-4 sm:p-8 w-[300px] sm:w-[588px]">
				<div className="flex justify-between">
					<div>
						<h2 className="text-base sm:text-xl font-semibold">
							{UPLOADPOPUP.heading}
						</h2>
						<p className="text-[13px] sm:text-sm text-gray-500">
							{UPLOADPOPUP.subtext}
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

				<div className="relative h-32 sm:h-60 border-dashed border border-[#22222240] bg-[#A020F00D] p-6 mt-3 sm:mt-4 rounded-lg flex justify-center items-center">
					<input
						type="file"
						className="opacity-0 absolute inset-0 cursor-pointer"
						accept="image/png, image/jpeg"
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
							{fileName ? (
								<p>{fileName}</p>
							) : (
								<p className="text-xs sm:text-">{UPLOADPOPUP.instruction}</p>
							)}
						</div>
					</div>
				</div>
				<div className="flex flex-col-reverse sm:flex-row gap-y-2 justify-between mt-3 sm:mt-6">
					<button
						className="flex gap-2 items-center justify-center border-[1.5px] buttons w-full sm:w-[48%] h-min rounded-[5px] py-4 px-6 border-[#A020F026] text-[15px] leading-[20px] font-medium"
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						className="flex gap-2 items-center justify-center border-[1.5px] buttons bg-[#A020F0] sm:w-[48%] h-min rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
						onClick={handleSavePhoto}
					>
						Save Photo
					</button>
				</div>
			</div>
		</div>
	);
};

export default UploadPopup;
