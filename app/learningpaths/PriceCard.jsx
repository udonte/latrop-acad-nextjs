import React from "react";
import { PRICECARD } from "./engineering/constants";

const PriceCard = () => {
	return (
		<div className="py-10 flex justify-center w-full">
			<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-[5%] gap-y-10 py-10 px-[5%] pricecard rounded-2xl w-[80%] sm:w-[60%] md:w-full lg:w-[80%] bg-white">
				<div className="flex flex-col gap-6 md:w-[33%]">
					<p className="text-[14px] lg:text-[17px] leading-[23px] font-bold text-[#222222D9] text-center">
						{PRICECARD.full.heading}
					</p>
					<div className="flex flex-col gap-1 items-center md:items-start md:border-r md:border-[#22222240]">
						<p className="font-bold text-[26px] md:text-[20px] lg:text-[26px] text-[#222222] leading-[34px]">
							{PRICECARD.full.price}
						</p>
						<p className="font-medium text-sm leading-[21px] text-[#222222A6]">
							{PRICECARD.full.period}
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-6 w-full">
					<p className="text-[14px] lg:text-[17px] leading-[23px] font-bold text-[#222222D9] text-center">
						{PRICECARD.monthly.heading}
					</p>
					<div className="flex flex-col md:flex-row items-center md:items-start gap-y-10 justify-between flex-wrap">
						{PRICECARD.monthly.month.map((item, index) => (
							<div
								key={index}
								className={`flex flex-col gap-1 ${
									index === 2
										? ""
										: "md:border-r md:border-[#22222240] md:w-[30%]"
								}`}
							>
								<div className="w-max">
									<p className="font-bold text-[26px] md:text-[20px] lg:text-[26px] text-[#222222] leading-[34px]">
										{item.price}
									</p>
									<p className="font-medium text-sm text-center leading-[21px] text-[#222222A6]">
										{item.period}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceCard;
