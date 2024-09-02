"use client";

import React from "react";
import { engineering } from "./constants";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Testimonials from "@/app/components/Testimonials";
import { HOME } from "@/app/constants";
import MainSection from "./MainSection";
import Link from "next/link";

const Engineering = () => {
	const { hero } = engineering[0];

	return (
		<div className="flex relative items-center w-full">
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
			<div className="px-[5%] py-[100px] md:mx-16 relative">
				<Link href="/learningpaths">
					<p className="text-[#A020F0] pb-4 space-x-2 font-medium cursor-pointer">
						<span> {" < "} </span>
						Go back
					</p>
				</Link>
				{/* HERO SECTION */}
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
					<div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
						<p className="text-3xl font-bold mb-4">{hero.title}</p>
						<p className="w-full md:w-[80%] mb-4 text-center md:text-left">
							{hero.description}
						</p>
						<a href="#main">
							<button className="border-[1.5px] buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium">
								{hero.buttonText}
							</button>
						</a>
					</div>

					<div className="w-full md:w-1/2 flex items-center justify-center">
						<div className="h-[240] w-[288px] md:w-[300px] md:h-[240px] lg:w-[500px] lg:h-[400px] overflow-hidden ">
							<Image
								src={hero.imageSource}
								alt="profile"
								className=" rounded-md object-cover"
								width={1000}
								height={1000}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Engineering;
