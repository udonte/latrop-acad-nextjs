"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Testimonials = ({ testimonials }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(2);

	const updateItemsPerPage = () => {
		if (window.innerWidth < 768) {
			setItemsPerPage(1);
		} else {
			setItemsPerPage(2);
		}
	};

	useEffect(() => {
		updateItemsPerPage();
		window.addEventListener("resize", updateItemsPerPage);
		return () => window.removeEventListener("resize", updateItemsPerPage);
	}, []);

	const totalItems = testimonials.t.length;
	const totalSlides = Math.ceil(totalItems / itemsPerPage);

	const nextSlide = () => {
		if (currentIndex < totalSlides - 1) {
			setCurrentIndex((prevIndex) => prevIndex + 1);
		}
	};

	const prevSlide = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevIndex) => prevIndex - 1);
		}
	};

	const startIndex = currentIndex * itemsPerPage;
	const currentItems = testimonials.t.slice(
		startIndex,
		startIndex + itemsPerPage
	);

	return (
		<div className="bg-[#A020F0] py-10 sm:py-12 lg:py-20 px-[3%] relative">
			<div className="absolute inset-0">
				<Image
					src={testimonials.bg}
					fill
					alt="bg img"
					style={{ objectFit: "cover" }}
					quality={100}
				/>
			</div>
			<div className="flex flex-col gap-10 lg:gap-14 items-center justify-center relative">
				<p className="font-extrabold text-[28px] text-white lg:text-4xl leading-[47px]">
					{testimonials.heading}
				</p>
				<div className="flex gap-[2%] sm:gap-6 items-center justify-center">
					{totalItems > 1 && (
						<div
							onClick={prevSlide}
							className={`flex items-center justify-center w-8 h-8 sm:h-10 sm:w-10 rounded-full ${
								currentIndex > 0
									? "bg-white text-[#A020F0] cursor-pointer"
									: "bg-[#FFFFFF33] text-[#ffffff] cursor-not-allowed"
							}`}
						>
							<FontAwesomeIcon
								icon={faArrowLeft}
								className="w-3 h-3 sm:w-4 sm:h-4"
							/>
						</div>
					)}
					<div className="flex gap-6 justify-center w-[250px] sm:w-[350px] md:w-[80%] lg:w-[824px]">
						{currentItems.map((item, index) => (
							<div
								key={index}
								className="flex flex-col gap-4 relative w-full md:w-[49%] lg:w-[400px] py-6 px-3.5 sm:px-10 bg-[#fafafa] min-h-[250px] rounded-lg"
							>
								<p className="text-sm sm:text-[15px] text-[#222222BF]">
									{item.testimonial}
								</p>
								<div className="flex gap-2 mt-auto items-center">
									<div className="w-10 h-10 rounded-full overflow-hidden">
										<Image
											src={item.avatar}
											width={1000}
											height={1000}
											alt="avatar"
											quality={100}
											className="w-10 h-10 object-cover"
										/>
									</div>
									<div className="flex flex-col gap-0.5">
										<p className="text-[#A020F0] text-base sm:text-[18px] leading-[23px] font-semibold">
											{item.name}
										</p>
										<p className="text-[#222222BF] text-sm leading-[18px]">
											{item.role}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
					{totalItems > 1 && (
						<div
							onClick={nextSlide}
							className={`flex items-center justify-center w-8 h-8 sm:h-10 sm:w-10 rounded-full ${
								currentIndex < totalSlides - 1
									? "bg-white text-[#A020F0] cursor-pointer"
									: "bg-[#FFFFFF33] text-[#ffffff] cursor-not-allowed"
							}`}
						>
							<FontAwesomeIcon
								icon={faArrowRight}
								className="w-3 h-3 sm:w-4 sm:h-4"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
