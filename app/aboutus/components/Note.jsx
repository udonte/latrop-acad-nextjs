import React from "react";
import { NOTE } from "../constants";
import Image from "next/image";

const Note = () => {
	return (
		<div className="flex relative items-center w-full">
			<div className="absolute inset-0">
				<div className="absolute-icons">
					{NOTE.icons.map((src, index) => (
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
			<div className="flex flex-col gap-6 justify-center px-[7%] relative pt-14 pb-6">
				<div className="flex flex-col gap-4 items-center text-[#222222]">
					<p className="font-bold text-center text-[24px] lg:text-[28px] leading-9">
						{NOTE.h}
					</p>
					<div className="flex flex-col gap-6 items-center">
						<p className="font-semibold text-lg lg:text-xl">
							{NOTE.noteh}
						</p>
						<div className="flex gap-4 justify-center">
							<p className="font-black text-[40px] leading-[52px] text-[#A020F0]">
								{NOTE.quote1}
							</p>
							<div className="w-[77%] text-[15px] lg:text-[16] leading-8 text-center">
								<p className="">{NOTE.note1}</p>
								<p>{NOTE.note2}</p>
							</div>
							<p className="font-black self-end text-[40px] leading-[52px] text-[#A020F0]">
								{NOTE.quote2}
							</p>
						</div>
					</div>
				</div>
				<div className="flex gap-2 mt-auto justify-center items-center">
					<div className="w-10 h-10 rounded-full overflow-hidden bg-white">
						<Image
							src={NOTE.avatar}
							width={1000}
							height={1000}
							alt="avatar"
							quality={100}
							className="w-10 h-10 object-cover"
						/>
					</div>
					<div className="flex flex-col gap-0.5">
						<p className="text-[#272727] text-[16px] sm:text-[18px] leading-[21px] font-semibold">
							{NOTE.name}
						</p>
						<p className="text-[#272727] italic text-[16px] leading-[18px]">
							{NOTE.role}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Note;
