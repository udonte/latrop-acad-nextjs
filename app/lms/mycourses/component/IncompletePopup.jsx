import React from "react";
import { INCOMPLETEPOPUP } from "../constants";
import Image from "next/image";

export const IncompletePopup = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="flex gap-6 flex-col w-[90%] sm:w-[588px] relative">
				<div className="flex flex-col gap-6 items-center border border-[#2222221A] py-10 px-4 sm:px-10 rounded-2xl bg-white">
					<div className="flex justify-between">
						<Image
							src={INCOMPLETEPOPUP.backicon}
							width={1000}
							height={1000}
							alt="Back"
							onClick={onClose}
							className="w-6 h-6 cursor-pointer"
						/>
						<div className="flex flex-col items-center gap-4">
							<Image
								src={INCOMPLETEPOPUP.info}
								width={1000}
								height={1000}
								alt="Check"
								className="w-[100px] h-[100px]"
							/>
							<div className="flex flex-col gap-1 items-center">
								<p className="text-[#222222] text-center text-[26px] leading-[34px] font-bold">
									{INCOMPLETEPOPUP.course}
								</p>
								<p className="text-[#222222BF] text-[15px] leading-[20px] text-center w-full">
									{INCOMPLETEPOPUP.text1}
								</p>
								<p className="text-[#222222BF] text-[15px] leading-[20px] text-center w-full">
									{INCOMPLETEPOPUP.text2}
								</p>
							</div>
						</div>
						<Image
							src={INCOMPLETEPOPUP.closeicon}
							width={1000}
							height={1000}
							alt="Close"
							onClick={onClose}
							className="w-5 h-5 cursor-pointer"
						/>
					</div>
					<button
						onClick={onClose}
						className="flex gap-2 items-center justify-center border-[1.5px] buttons bg-[#A020F0] h-min rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
					>
						{INCOMPLETEPOPUP.button}
					</button>
				</div>
			</div>
		</div>
	);
};
