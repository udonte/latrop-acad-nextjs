"use client"
import React from "react";
import { engineering } from "./constants";
import { HOME } from "@/app/constants";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";

const MainSection = () => {
	const { tracks } = engineering[0];
	const { hero } = engineering[0];
	const router = useRouter ()

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
			<div className="my-[100px] px-[7%] relative" id="main">
				<div className="w-full flex items-center justify-center mb-16 ">
					

					<p className=" text-xl md:text-3xl font-bold mb-4">
						{hero.title}
					</p>
				</div>

				<div className="flex flex-wrap gap-[2%] justify-center gap-y-6 bg-white">
						{tracks.map((track, id) => (
							<div
								className="bg-[#FFD43A40]/10 flex flex-col w-full md:w-[49%] lg:w-[32%] justify-start border-2 border-[#FFD43A40]/25 p-3 md:p-8 rounded-lg"
								key={id}
							>
							<p className="text-xl font-semibold mb-2">
								{track.name}
							</p>
							<p className="mb-16">{track.description}</p>
							<div className="flex items-center gap-4 mt-auto">
								<Button
									fullWidth
									variant="secondary"
									onClick={() =>
										router.push(track.learnMore.link)
									}
								>
									{track.learnMore.label}
								</Button>
								<Button
									fullWidth
									onClick={() =>
										router.push(track.enroll.link)
									}
								>
									{track.enroll.label}
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MainSection;
