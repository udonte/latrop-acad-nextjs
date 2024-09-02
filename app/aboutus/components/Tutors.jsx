import React from "react";
import { TUTORS } from "../constants";
import Image from "next/image";

const Tutors = () => {
	return (
		<div className="flex flex-col items-center gap-14 md:gap-10 lg:gap-14 pt-6 pb-3 px-[7%]">
			<div className="text-center">
				<p className="font-bold text-2xl lg:text-[32px] text-[#222222]">
					{TUTORS.h}
				</p>
			</div>
			<div className="flex flex-col w-full items-center md:flex-row gap-[2%] gap-y-10">
				{TUTORS.tutors.map((tutor, index) => (
					<div
						key={index}
						className="flex flex-col gap-2.5 w-[90%] md:w-[24%] relative"
					>
						<div className="relative flex">
							<Image
								width={1000}
								height={1000}
								src={tutor.img}
								alt="Image"
								quality={100}
								className="w-full aspect-square object-cover rounded-xl"
							/>
						</div>
						<div className="w-[93%] p-2.5 md:p-[5px] lg:py-2.5 lg:px-1 rounded-[9px] md:rounded-[9px] lg:rounded-2xl bg-white absolute bottom-4 self-center text-[#272727] text-center text-sm md:text-[10px] lg:text-sm">
							<p className="font-semibold">{tutor.name}</p>
							<p>{tutor.path}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tutors;
