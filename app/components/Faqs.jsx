"use client";
import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRouter } from "next/navigation";
import { HOME } from "../constants";

const Faqs = ({faqs}) => {
	const router = useRouter();
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleFaq = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="flex flex-col items-center gap-10 py-20 px-[7%]">
			<div className="flex flex-col gap-4 text-center">
				<p className="font-bold text-2xl lg:text-[32px] text-[#222222]">
					{faqs.heading}
				</p>
			</div>
			<div className="flex flex-col gap-4 w-[95%] md:w-[60%]">
				{faqs.faqs.map((faq, index) => (
					<div
						key={index}
						onClick={() => toggleFaq(index)}
						className="flex flex-col gap-2 "
					>
						<div
							className={`flex pt-5 justify-between items-center cursor-pointer ${
								activeIndex === index ? "font-medium" : ""
							}`}
						>
							<p className="text-[18px] w-[80%] leading-[21px] text-[#000000] h-max">
								{faq.question}
							</p>
							<div className="w-10 h-10 font-thin rounded-full bg-[#EFEFEF] text-[30px] flex items-center justify-center">
								{activeIndex === index ? "-" : "+"}
							</div>
						</div>
						<TransitionGroup>
							{activeIndex === index && (
								<CSSTransition timeout={500} classNames="faq">
									<div className="overflow-hidden transition-max-height duration-500 ease-in-out">
										<p className="text-base text-[#222222BF] leading-[19px] mt-4">
											{faq.answer}{" "}
											{faq.span ? (
												<span
													onClick={() =>
														router.push(faq.route)
													}
													className="text-[#A020F0] cursor-pointer"
												>
													{faq.span}
												</span>
											) : (
												<span></span>
											)}
										</p>
									</div>
								</CSSTransition>
							)}
						</TransitionGroup>
					</div>
				))}
			</div>
		</div>
	);
};

export default Faqs;
