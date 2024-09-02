import Image from "next/image";
import React from "react";
import { CHECK } from "../constants";

const ProcessOutline = ({ process }) => {
	return (
		<div className="w-full lg:w-[48%] bg-[#FFD43A] rounded-[17px] text-[#222222]">
			<div className="flex flex-col h-full gap-6 bg-[#FFFFFFE5] p-9 rounded-2xl">
				<div>
					<h1 className="font-bold text-xl md:text-2xl">
						{process.heading}
					</h1>
					<p className="text-[15px] md:text-base">
						{process.subtext}
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-3">
						<p className="font-bold text-[15px] md:text-base">
							{process.payment.heading}
						</p>
						<div className="flex flex-col gap-2">
							{process.payment.list.map((item, index) => (
								<div
									key={index}
									className="flex gap-2 items-center"
								>
									<Image
										src={CHECK}
										width={1000}
										height={1000}
										alt="Checkmark"
										className="w-3 h-3"
									/>
									<p className="text-[15px] md:text-base">
										{item}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<p className="font-bold text-[15px] md:text-base">
							{process.duration.heading}
						</p>
						<div className="flex flex-col gap-2">
							<p className="text-[15px] md:text-base">
								{process.duration.text}
							</p>
							{process.duration.list.map((item, index) => (
								<div
									key={index}
									className="flex gap-2 items-center"
								>
									<Image
										src={CHECK}
										width={1000}
										height={1000}
										alt="Checkmark"
										className="w-3 h-3"
									/>
									<p className="text-[15px] md:text-base">
										{item}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<p className="font-bold text-[15px] md:text-base">
							{process.comitment.heading}
						</p>

						<p className="text-[15px] md:text-base">
							{process.comitment.text}
						</p>
					</div>
					<div className="flex flex-col gap-3">
						<p className="font-bold text-[15px] md:text-base">
							{process.location.heading}
						</p>
						<p className="text-[15px] md:text-base">
							{process.location.text}
						</p>
					</div>
					<div className="flex flex-col gap-3">
						<p className="font-bold text-[15px] md:text-base">
							{process.eligibility.heading}
						</p>
						<div className="flex flex-col gap-2">
							{process.eligibility.list.map((item, index) => (
								<div
									key={index}
									className="flex gap-2 items-center"
								>
									<Image
										src={CHECK}
										width={1000}
										height={1000}
										alt="Checkmark"
										className="w-3 h-3"
									/>
									<p className="text-[15px] md:text-base">
										{item}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProcessOutline;
