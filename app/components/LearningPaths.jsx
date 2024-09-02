"use client";
import React from "react";
import { HOME } from "../constants";
import Image from "next/image";
import Link from "next/link";

const LearningPaths = () => {
	const { learningPaths } = HOME;
	return (
		<div className="flex flex-col gap-10 items-center py-14 px-[7%]">
			<p className="font-bold text-2xl lg:text-[32px] text-[#222222]">
				{learningPaths.h}
			</p>
			<div className="flex flex-col w-full items-center md:flex-row gap-[2%] gap-y-10">
				{learningPaths.paths.map((path, index) => (
					<Link
						key={index}
						href={path.route}
						className="flex flex-col gap-2.5 w-[90%] md:w-[24%] group"
					>
						<Image
							width={1000}
							height={1000}
							src={path.img}
							alt="Image"
							quality={100}
							className="w-full aspect-[4/3] pathImg rounded-xl"
						/>
						<div className="flex justify-between items-center">
							<p className="transition-transform w-[95%] text-center duration-[1s] ease-out transform group-hover:translate-x-[-36%] md:group-hover:translate-x-[-25%] lg:group-hover:translate-x-[-35%]">
								{path.name}
							</p>
							<Image
								src={learningPaths.arrow}
								width={1000}
								height={1000}
								alt="arrow"
								quality={100}
								className="w-4 h-4 opacity-0 transform transition-opacity duration-[0.9s] ease-out group-hover:opacity-100"
							/>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default LearningPaths;
