import React from "react";
import { HOME } from "../constants";
import Image from "next/image";

const Benefits = () => {
	return (
		<div className="flex justify-center relative bg-white py-20 px-[3%]">
			<div className="absolute inset-0">
				<Image
					src={HOME.benefits.bg}
					fill
					alt="bg img"
					style={{objectFit:"cover"}}
					quality={100}
				/>
			</div>
			<div className="flex flex-col gap-2">
				{HOME.benefits.text.map((p, index) => (
					<p
						key={index}
						className="text-center text-[17px] sm:text-lg lg:text-[26px] font-semibold tracking-[1%]"
					>
						{p}
					</p>
				))}
			</div>
		</div>
	);
};

export default Benefits;
