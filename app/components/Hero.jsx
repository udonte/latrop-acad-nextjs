"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HOME } from "../constants";
import { useRouter } from "next/navigation";

const Hero = () => {
	const router = useRouter();

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(
				(prevIndex) => (prevIndex + 1) % HOME.hero.h2.length
			);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex relative items-center sm:h-[110vh] w-full">
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
			<div className="flex flex-col items-center sm:flex-row gap-y-12 justify-between px-[8%] self-center py-[100px] relative h-max">
				<div className="flex flex-col gap-6 w-[90%] sm:w-[60%] lg:w-[45%] self-center h-min">
					<div className="flex flex-col gap-2 text-[#222222]">
						<div className="font-bold text-[24px] sm:text-[25px] lg:text-[40px]">
							<div className="relative overflow-hidden h-[30px] sm:h-[43px] lg:h-[53px]">
								<div
									className={`text-slide ${
										currentIndex === 0
											? "text-slide-in"
											: "text-slide-out"
									}`}
								>
									<p>{HOME.hero.h1[0]}</p>
								</div>
								<div
									className={`text-slide ${
										currentIndex === 1
											? "text-slide-in"
											: "text-slide-out"
									}`}
								>
									<p>{HOME.hero.h1[1]}</p>
								</div>
								<div
									className={`text-slide ${
										currentIndex === 2
											? "text-slide-in"
											: "text-slide-out"
									}`}
								>
									<p>{HOME.hero.h1[2]}</p>
								</div>
							</div>
							<div className="relative overflow-hidden h-[30px] sm:h-[43px] lg:h-[53px]">
								<div
									className={`text-slide ${
										currentIndex === 0
											? "text-slide-in"
											: "text-slide-out"
									}`}
								>
									<p>{HOME.hero.h2[0]}</p>
								</div>
								<div
									className={`text-slide ${
										currentIndex === 1
											? "text-slide-in"
											: "text-slide-out"
									}`}
								>
									<p>{HOME.hero.h2[1]}</p>
								</div>
								<div
									className={`text-slide ${
										currentIndex === 2
											? "text-slide-in"
											: "text-slide-out"
									}`}
								>
									<p>{HOME.hero.h2[2]}</p>
								</div>
							</div>
						</div>
						<p className="text-[14px] sm:text-sm sm:w-[80%] lg:w-auto lg:text-[15px]">{HOME.hero.subtext}</p>
					</div>

					<button
						onClick={() => router.push("/learningpaths")}
						className="border-[1.5px] buttons bg-[#A020F0] w-max rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
					>
						{HOME.hero.button}
					</button>
				</div>
				<Image
					src={HOME.hero.img}
					width={1000}
					height={1000}
					alt="Hero Img"
					quality={100}
					className="w-[90%] sm:w-[40%]"
				/>
			</div>
		</div>
	);
};

export default Hero;
