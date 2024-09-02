"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FOOTER } from "../constants";
import Image from "next/image";
import { poppins } from "../fonts";
import TermsOfServiceModal from "../resources/termsofservices/components/TermsOfServiceModal";

const Footer = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [showTermsofServiceModal, setShowTermsofServiceModal] =
		useState(false);
	const toggleTermsofServiceModal = () => {
		setShowTermsofServiceModal(!showTermsofServiceModal);
	};
	const handleClick = (path) => {
		router.push(path);
	};
	const handleIconClick = (url) => {
		window.open(url, "_blank", "noopener,noreferrer");
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
		"/resources",
		"/resources/blog",
		"/resources/termsofservices",
		"/login",
		"/signup",
		"/resetpassword",
		"/resetpassword/newpassword",
		"/resetpassword/emailsent",
		"/enroll",
		"/enroll/paymentplan"
	];

	const blogRouteRegex = /^\/resources\/blog\/.+$/;

	if (!allowedRoutes.includes(pathname) && !blogRouteRegex.test(pathname)) {
		return "";
	}

	return (
		<div className="footer flex justify-between flex-col gap-y-10 sm:flex-row py-10 px-10 lg:px-[120px]">
			<div className="flex flex-col gap-6">
				<div className="flex gap-2 items-center">
					<Image
						src={FOOTER.icon}
						width={1000}
						height={1000}
						alt="Logo"
						quality={100}
						className="w-10 sm:w-12"
					/>
					<div className={poppins.className}>
						<p className="font-medium tracking-[-0.04%] text-lg leading-[27px] text-[#ffffff]">
							{FOOTER.name.a}
							<span className="text-yellow-300">
								{FOOTER.name.span}
							</span>
							{FOOTER.name.b}
						</p>
					</div>
				</div>
				<div className="flex gap-3">
					{FOOTER.sm.map((item, index) => (
						<Image
							key={index}
							onClick={() => handleIconClick(item.link)}
							src={item.logo}
							width={1000}
							height={1000}
							alt="Logo"
							quality={100}
							className="w-8 h-8 cursor-pointer"
						/>
					))}
				</div>
			</div>
			<div className="flex justify-between w-[100%] sm:w-auto sm:justify-normal sm:gap-7 md:gap-14">
				<div className="flex flex-col gap-3">
					{FOOTER.linksa.map((item, index) => (
						<p
							key={index}
							onClick={() => handleClick(item.link)}
							className="text-[#ffffff] cursor-pointer font-semibold text-xs sm:text-sm"
						>
							{item.name}
						</p>
					))}
				</div>
				<div className="flex flex-col gap-3">
					<p
						onClick={() => handleClick(FOOTER.linksb[0].link)}
						className="text-[#ffffff] cursor-pointer font-semibold text-xs sm:text-sm"
					>
						{FOOTER.linksb[0].name}
					</p>
					<p
						onClick={toggleTermsofServiceModal}
						className="text-[#ffffff] cursor-pointer font-semibold text-xs sm:text-sm"
					>
						{FOOTER.linksb[1].name}
					</p>
				</div>
			</div>
			{showTermsofServiceModal && (
				<TermsOfServiceModal onClose={toggleTermsofServiceModal} />
			)}
		</div>
	);
};

export default Footer;
