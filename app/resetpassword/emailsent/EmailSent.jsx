"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HOME } from "@/app/constants";
import { BUTTON, CHECK, HEADING, SUBTEXT } from "./constants";

const EmailSent = () => {
	const router = useRouter();
	const handleClick = () => {
		router.push("/resetpassword/newpassword/666666666666");
	};

	return (
		<div className="flex relative justify-center sm:h-[110vh] w-full">
			<div className="absolute inset-0">
				<div className="absolute-icons">
					{HOME.hero.icons.map((src, index) => (
						<Image
							key={index}
							src={src}
							width={1000}
							height={1000}
							alt={`Background Icon ${index}`}
							className="floating-icon"
						/>
					))}
				</div>
			</div>
			<div className="pt-40 pb-10 flex gap-6 flex-col w-[90%] sm:w-[588px] relative">
				<div className="flex flex-col gap-6 border border-[#2222221A] py-10 px-4 sm:px-10 rounded-2xl bg-white">
					<div className="flex flex-col items-center gap-4">
						<Image
							src={CHECK}
							width={1000}
							height={1000}
							alt="Check"
							className="w-24 h-24"
						/>
						<div className="flex flex-col gap-1 items-center">
							<p className="text-[#222222] text-[26px] leading-[34px] font-bold">
								{HEADING}
							</p>
							<p className="text-[#222222BF] text-[15px] leading-[20px] text-center w-full sm:w-[78%]">
								{SUBTEXT}
							</p>
						</div>
					</div>
					<button
						onClick={handleClick}
						className="border-[1.5px] buttons bg-[#A020F0] w-full rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
					>
						{BUTTON.text}
					</button>
				</div>
			</div>
		</div>
	);
};

export default EmailSent;
