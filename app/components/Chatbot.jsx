"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CHAT } from "../constants";
import { usePathname } from "next/navigation";

const Chatbot = () => {
	const pathname = usePathname();
	const [showChatbox, setShowChatbox] = useState(false);

	const handleChatbotClick = () => {
		setShowChatbox(!showChatbox);
	};

	const handleClick = () => {
		window.open(CHAT.walink, "_blank", "noopener,noreferrer");
	};
	const allowedRoutes = [
		"/",
		"/aboutus",
		"/learningpaths",
		"/learningpaths/product",
		"/learningpaths/product/productdesign",
		"/learningpaths/product/productmgt",
		"/learningpaths/product/projectmgt",
		"/learningpaths/engineering",
		"/learningpaths/engineering/backend",
		"/learningpaths/engineering/cloud",
		"/learningpaths/engineering/cybersecurity",
		"/learningpaths/engineering/frontend",
		"/learningpaths/engineering/qatestng",
		"/learningpaths/data",
		"/learningpaths/data/dataanalysis",
		"/learningpaths/data/datascience",
		"/learningpaths/business",
		"/learningpaths/business/businessanalysis",
		"/resources/blog",
		"/resources/termsofservices",
		"/login",
		"/signup",
		"/resetpassword",
		"/resetpassword/newpassword",
		"/resetpassword/emailsent",
		"/enroll",
		"/enroll/paymentplan",
	];

	const blogRouteRegex = /^\/resources\/blog\/.+$/;

	if (!allowedRoutes.includes(pathname) && !blogRouteRegex.test(pathname)) {
		return "";
	}
	return (
		<div
			className="flex 
						flex-col 
						items-center 
						justify-center 
						fixed
						right-6 
						xs:right-16 
						sm:right-24 
						bottom-[50px] 
						lg:right-32 
						z-10"
		>
			<Image
				onClick={handleClick}
				src={CHAT.icons.whatsapp}
				width={1000}
				height={1000}
				alt="whatsapp"
				quality={100}
				className="h-10 w-10 cursor-pointer"
			/>
			<Image
				src={CHAT.icons.chatbot}
				onClick={handleChatbotClick}
				width={1000}
				height={1000}
				alt="Chatbot"
				quality={100}
				className="sm:w-[110px] hidden w-[90px] cursor-pointer"
			/>
			{showChatbox && (
				<div className="absolute flex flex-col right-0 bottom-4 h-[401px] chatbox rounded-lg sm:w-[300px] w-[250px] bg-white">
					<div className="bg-[#A020F0] rounded-t-lg px-5 py-2.5 w-full flex justify-between">
						<div className="text-white">
							<p className="font-semibold text-sm">
								{CHAT.chatbox.h}
							</p>
							<p className="text-xs">{CHAT.chatbox.st}</p>
						</div>
						<Image
							src={CHAT.minimize}
							onClick={handleChatbotClick}
							width={1000}
							height={1000}
							alt="minimize"
							quality={100}
							className="w-5 self-end mb-3 cursor-pointer"
						/>
					</div>
					<div className="flex flex-col flex-1 justify-between">
						<div className="flex-1 relative overflow-y-auto">
							<Image
								src={CHAT.chatbox.bg}
								width={1000}
								height={1000}
								alt="chat Bg"
								quality={100}
								className="absolute 
											inset-0 
											h-full 
											w-full 
											right-0
											object-cover"
							/>
							<div className=" h-full relative py-2 px-5 bg-[#F2F2F2] text-xs text-[#272727BF]">
								<p className="text-center ">
									{CHAT.chatbox.start}
								</p>
								<div className="flex flex-col gap-2 pt-2 text-xs">
									<p className="py-3 px-2.5 bg-white rounded-t-xl rounded-br-xl  w-[90%]">
										{CHAT.chatbox.text1}
									</p>
									<p className="py-3 sender px-2.5 bg-purple-200 rounded-t-xl  w-[90%] rounded-bl-xl self-end">
										{CHAT.chatbox.text2}
									</p>
									<p className="py-3 px-2.5 bg-white rounded-t-xl rounded-br-xl  w-[90%]">
										{CHAT.chatbox.text3}
									</p>
								</div>
							</div>
						</div>
						<div className="flex py-3 px-5 border-t ">
							<input
								type="text"
								placeholder={CHAT.chatbox.placeholder}
								className="w-full outline-none placeholder:text-sm"
							/>
							<Image
								src={CHAT.chatbox.send}
								width={1000}
								height={1000}
								alt="send"
								quality={100}
								className="w-6 cursor-pointer"
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Chatbot;
