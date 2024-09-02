import React from "react";
import { HOME } from "../constants";
import Image from "next/image";

const Banner = () => {
	return (
		<div className="bg-[#A020F0] banner h-14 relative text-nowrap overflow-hidden sm:h-16 flex justify-center items-center">
			<div className="flex items-center justify-center gap-[1%] w-full marquee-text">
				<Image
					src={HOME.banner.img}
					width={1000}
					height={1000}
					alt="icon"
					quality={100}
					className="w-8 md:w-10 rounded-md"
				/>
				<p className="font-semibold text-sm inline-block text-white">
					{HOME.banner.text}
				</p>
			</div>
		</div>
	);
};

export default Banner;
