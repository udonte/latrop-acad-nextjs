"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ARROW } from "../../mycourses/constants";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const CourseOutline = ({ details }) => {
	const [activeModule, setActiveModule] = useState(null);

	const toggleModule = (index) => {
		setActiveModule(activeModule === index ? null : index);
	};
	return (
		<div className="w-full lg:w-[48%] bg-[#A020F0] rounded-[17px] text-[#222222]">
			<div className="flex flex-col gap-6 h-full bg-[#FFFFFFE5] p-9 rounded-2xl">
				<div>
					<h1 className="font-bold text-xl md:text-2xl">
						{details.outline.heading}
					</h1>
					<p className="text-[15px] md:text-base">
						{details.outline.subtext}
					</p>
				</div>
				<div className="flex flex-col gap-3">
					{details.outline.list.map((item, index) => (
						<div key={index} className="flex gap-2 items-center">
							<Image
								src={details.check}
								width={1000}
								height={1000}
								alt="Checkmark"
								className="w-3 h-3"
							/>
							<p className="text-[15px] md:text-base">{item}</p>
						</div>
					))}
					{details.outline.listwithdd.map((item, index) => (
						<div
							key={index}
							className="flex flex-col"
							onClick={() => toggleModule(index)}
						>
							<div className="flex gap-6 items-center">
								<div className="flex gap-2 items-center w-[90%] sm:w-auto">
									<Image
										src={details.check}
										width={1000}
										height={1000}
										alt="Checkmark"
										className="w-3 h-3"
									/>
									<p className="text-[15px] md:text-base font-bold">
										{item.name}
									</p>
								</div>
								<div
									className={`transform transition-transform duration-500 ${
										activeModule === index
											? "rotate-180"
											: ""
									}`}
								>
									<Image
										width={1000}
										height={1000}
										src={ARROW}
										alt="Arrow"
										quality={100}
										className="w-5 h-5"
									/>
								</div>
							</div>
							<TransitionGroup>
								{activeModule === index && (
									<CSSTransition
										timeout={500}
										classNames="faq"
									>
										<div className="flex pt-4 flex-col gap-3 pl-8 text-[#222222] text-base overflow-hidden transition-max-height duration-500 ease-in-out">
											{item.list.map((item, index) => (
												<div
													key={index}
													className="flex gap-2 items-center"
												>
													<Image
														src={details.check}
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
									</CSSTransition>
								)}
							</TransitionGroup>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CourseOutline;
