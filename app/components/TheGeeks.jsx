"use client";
import React from "react";
import { HOME } from "../constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TheGeeks = () => {
	const router = useRouter();
	const { tutors } = HOME;
	return (
		<div className="flex flex-col gap-10 items-center py-14 px-[7%]">
			<div className="flex flex-col gap-y-8 md:flex-row justify-between w-full items-center">
				<Image
					width={1000}
					height={1000}
					src={tutors.img}
					alt="Image"
					quality={100}
					className="w-[90%] sm:w-[70%] md:w-[40%]"
				/>
				<div className="flex flex-col gap-6 w-[90%] items-center md:items-start md:w-[44%]">
					<div className="flex flex-col items-center md:items-start gap-2 text-[#222222]">
						<p className="font-bold text-2xl lg:text-[32px]">
							{tutors.h}
						</p>
						<p className="text-[15px] text-center leading-5">
							{tutors.p}
						</p>
					</div>
					<button
						onClick={() => router.push("/aboutus")}
						className="border-[1.5px] buttons bg-[#A020F0] w-max rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
					>
						{tutors.button}
					</button>
				</div>
			</div>
		</div>
	);
};

export default TheGeeks;
