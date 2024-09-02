"use client";
import Image from "next/image";
import React from "react";
import { HERO } from "../constants";
import { useRouter } from "next/navigation";

const Hero = () => {
	const router = useRouter();

	return (
		<div className="flex relative items-center md:h-[110vh] w-full">
			<div className="absolute inset-0">
				<div className="absolute-icons">
					{HERO.icons.map((src, index) => (
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
			<div className="flex flex-col items-center md:flex-row gap-y-12 justify-between px-[8%] self-center py-[100px] relative h-max">
				<div className="flex flex-col gap-6 w-[90%] md:w-[60%] lg:w-[45%] self-center h-min">
					<div className="flex flex-col gap-2 text-[#222222]">
						<div className="font-bold text-[28px] md:text-[32px]">
							<p>{HERO.h}</p>
						</div>
						<p className="text-[14px] sm:text-[15px] sm:w-[80%] lg:w-auto lg:text-[16px]">
							{HERO.subtext}
						</p>
					</div>
					<button
						onClick={() => router.push("/learningpaths")}
						className="border-[1.5px] buttons bg-[#A020F0] w-max rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
					>
						{HERO.button}
					</button>
				</div>
				<Image
					src={HERO.img}
					width={1000}
					height={1000}
					alt="Hero Img"
					quality={100}
					className="w-[90%] md:w-[40%]"
				/>
			</div>
		</div>
	);
};

export default Hero;
