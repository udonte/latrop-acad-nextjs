"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HOME } from "../constants";
import LearningPaths from "../components/LearningPaths";

const LearningPath = () => {
	const router = useRouter();
	return (
		<div className="flex relative items-center h-max justify-center md:h-[70vh] lg:h-[88vh] w-full">
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
			<div className="relative pt-16 w-full justify-center">
				<LearningPaths />
			</div>
		</div>
	);
};

export default LearningPath;
