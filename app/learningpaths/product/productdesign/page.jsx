"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import Image from "next/image";
import CourseDetails from "@/app/components/CourseDetails/CourseDetails";
import { proddesignHero, courseOutline } from "./constants"; // Adjust the import path as needed
import { HOME } from "@/app/constants";
import PriceCard from "../../PriceCard";

const Page = () => {
	const router = useRouter();

	return (
		<div className="flex relative items-center w-full">
			<div className="absolute inset-0">
				<div className="absolute-icons">
					{HOME.hero.icons.map((src, index) => (
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
			<div className="py-[120px] mx-4 md:mx-16 relative">
				<div>
					{/* back */}
					<div>
						<p
							className="text-[#A020F0] space-x-2 font-medium cursor-pointer"
							onClick={() =>
								router.push("/learningpaths/product")
							}
						>
							<span> {" < "} </span>
							Go back
						</p>
					</div>
					{/* main */}
					<div>
						{/* top */}
						<div className="flex flex-col items-center justify-center">
							<p className="text-center text-3xl font-bold mb-4">
								{proddesignHero.title}
							</p>
							<p className="mb-4 text-center w-full md:w-[80%]">
								{proddesignHero.description}
							</p>
							<Button
								className={"mb-4"}
								onClick={() => router.push("/enroll")}
							>
								{proddesignHero.buttonText}
							</Button>
						</div>
						<PriceCard />
						{/* main */}
						<div className="flex flex-col md:flex-row items-start gap-6 mt-[100px] bg-white">
							{/* product management card */}
							<div className="w-full md:w-1/2 bg-[#A020F0]/10 p-4 md:p-8 rounded-xl min-h-[850px]">
								<div className="mb-8">
									<p className="text-xl font-semibold mb-2">
										What You Will Learn
									</p>
									<p>
										Here is the course outline for Product
										Design (UI/UX)
									</p>
								</div>
								<div className="space-y-4">
									{/* courses */}
									{courseOutline.map((course, index) => (
										<div
											key={index}
											className="flex flex-col"
										>
											<div className="flex items-center gap-3">
												<Image
													src="/assets/learning_path/checkmark.svg"
													alt="checkmark"
													width={15}
													height={15}
												/>
												<div className="flex items-center gap-6 transition-all">
													{course}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
							{/* course details card */}
							<div className="w-full md:w-1/2 min-h-[850px]">
								<CourseDetails />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
