import React from "react";
import { BACKGROUNDIMG, HEADING } from "./constants";
import Image from "next/image";
import Form from "./components/Form";

export const metadata = {
	title: "My Information - Instructor Portal - Gurugeeks Academy",
};

const page = () => {
	return (
		<div className="relative bg-[#F3F3F4] w-full min-h-[95vh]">
			<Image
				src={BACKGROUNDIMG}
				width={1000}
				height={1000}
				alt="Background img"
				className="absolute inset-0 w-auto h-full"
			/>
			<div className="flex flex-col gap-4 px-[3%] relative pt-5 pb-20">
				<p className="font-semibold text-[20px] leading-[26px] tracking-tight text-[#222222]">
					{HEADING}
				</p>
				<Form />
			</div>
		</div>
	);
};

export default page;
