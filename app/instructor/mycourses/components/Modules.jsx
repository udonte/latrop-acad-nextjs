"use client";
import React, { useState } from "react";
import { ARROW, MODULEICON, QUESTICON, VIDEO, VIDEOICON } from "../constants";
import Image from "next/image";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import VideoModal from "./VideoModal";

const Modules = ({ modules }) => {
	const [activeModule, setActiveModule] = useState(null);
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

	const toggleModule = (index) => {
		setActiveModule(activeModule === index ? null : index);
	};

	const openVideoModal = () => {
		setIsVideoModalOpen(true);
	};

	const closeVideoModal = () => {
		setIsVideoModalOpen(false);
	};

	return (
		<div className="py-2 px-2 md:py-6 md:px-4 lg:py-10 lg:px-10 bg-white rounded-lg border border-[#A020F01A] flex flex-col gap-">
			{modules.map((module, index) => (
				<div
					key={index}
					className="flex flex-col gap-[14px] mb-4 border-b border-[#2222221A]"
				>
					<div className="flex justify-between">
						<div
							onClick={() => toggleModule(index)}
							className="py-3 px-4 flex gap-6 items-center w-full justify-between md:w-auto hover:bg-[#A020F01A] rounded-[4px] cursor-pointer"
						>
							<div className="flex items-center gap-4 w-[90%] md:w-auto">
								<Image
									width={1000}
									height={1000}
									src={MODULEICON}
									alt="Module"
									quality={100}
									className="w-5 h-5"
								/>
								<p className="font-medium text-base text-[#222222]">
									{module.module}
								</p>
							</div>
							<div
								className={`transform transition-transform duration-500 ${
									activeModule === index ? "rotate-180" : ""
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
					</div>
					<TransitionGroup>
						{activeModule === index && (
							<CSSTransition timeout={500} classNames="faq">
								<div className="flex flex-col gap-3 pl-5 md:pl-20 pb-4 text-[#222222] text-base overflow-hidden transition-max-height duration-500 ease-in-out">
									{module.breakdown.map((item, index) => (
										<div
											key={index}
											className="flex gap-2 md:gap-1 items-center"
										>
											<Image
												width={1000}
												height={1000}
												src={QUESTICON}
												alt="tick"
												quality={100}
												className="w-4 h-4 md:w-5 md:h-5"
											/>
											<p>{item}</p>
										</div>
									))}
									<div
										onClick={openVideoModal}
										className="flex gap-1 items-center cursor-pointer"
									>
										<Image
											width={1000}
											height={1000}
											src={VIDEOICON}
											alt="tick"
											quality={100}
											className="w-6 h-6"
										/>
										<p>{VIDEO}</p>
									</div>
								</div>
							</CSSTransition>
						)}
					</TransitionGroup>
				</div>
			))}
			<VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} />
		</div>
	);
};

export default Modules;
