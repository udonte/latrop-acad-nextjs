"use client"
import React from "react";
import Image from "next/image";
import { EMPTY_TEXT } from "../constants";
import { useRouter } from "next/navigation";

const EmptySlate = () => {
	const router = useRouter();
	return (
		<div
			className="flex flex-col items-center justify-center bg-gray-100 bg-center pb-80 pt-36"
			style={{
				backgroundImage: "url('/assets/lms/lmsbg.svg')",
				backgroundSize: "cover",
			}}
		>
			<div className="-mb-14">
				<Image
					src="/assets/lms/EmptyState.svg"
					alt="No courses yet"
					width={350}
					height={280}
				/>
			</div>
			<h1 className="text-md sm:text-md md:text-md font-semibold text-[#222222]">
				{EMPTY_TEXT.title}
			</h1>
			<p className="text-xs xs:text-base text-center text-[#222222A6] mb-6">
				{EMPTY_TEXT.subtitle}
			</p>
			<button
				onClick={() => router.push("/lms/enroll")}
				className="bg-[#A020F0] text-white px-4 py-3 rounded-md border-[1.5px] md:mb-0 buttons text-[15px] leading-[20px]"
			>
				{EMPTY_TEXT.buttonLabel}
			</button>
		</div>
	);
};

export default EmptySlate;
