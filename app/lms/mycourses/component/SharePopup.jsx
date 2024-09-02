import React from "react";
import { SHAREPOPUP } from "../constants";
import Link from "next/link";
import Image from "next/image";

const SharePopup = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="flex gap-6 flex-col w-[90%] sm:w-[588px] relative">
				<div className="flex flex-col gap-6 items-center border border-[#2222221A] py-10 px-4 sm:px-10 rounded-2xl bg-white">
					<div className="flex justify-between">
						<Image
							src={SHAREPOPUP.backicon}
							width={1000}
							height={1000}
							alt="Back"
							onClick={onClose}
							className="w-6 h-6 cursor-pointer"
						/>
						<div className="flex flex-col items-center gap-4">
							<Image
								src={SHAREPOPUP.check}
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
					<div className="flex gap-4 mt-3 sm:mt-6">
						{SHAREPOPUP.icons.map((item, index) => (
							<Link key={index} href={item.link}>
								<Image
									src={item.icon}
									width={1000}
									height={1000}
									alt="social media"
									className="w-5 h-5 cursor-pointer"
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SharePopup;
