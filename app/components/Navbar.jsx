"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import { LOGO, NAME, NAVBAR } from "../constants";
import TermsOfServiceModal from "../resources/termsofservices/components/TermsOfServiceModal";
import { poppins } from "../fonts";

const Navbar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [resourcesDd, setResourcesDd] = useState(false);
	const [mobileDropdown, setMobileDropdown] = useState(false);

	const [showTermsofServiceModal, setShowTermsofServiceModal] =
		useState(false);
	const toggleTermsofServiceModal = () => {
		setShowTermsofServiceModal(!showTermsofServiceModal);
	};

	const resourcesRef = useRef(null);
	const mobileDropdownRef = useRef(null);

	const toggleDropdown = () => {
		setResourcesDd((prevstate) => !prevstate);
	};

	const handleClickOutside = (event) => {
		if (
			resourcesRef.current &&
			!resourcesRef.current.contains(event.target) &&
			mobileDropdownRef.current &&
			!mobileDropdownRef.current.contains(event.target)
		) {
			setResourcesDd(false);
			setMobileDropdown(false);
		}
	};

	const isActive = (path) => {
		if (path === "/") {
			return pathname === path;
		}
		return pathname.startsWith(path);
	};

	const handleDropdownItemClick = (path) => {
		router.push(path);
		setResourcesDd(false);
		setMobileDropdown(false);
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

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
			className="bg-white 
						h-16 w-[100%] 
						py-2
						px-[7%] 
						flex
						justify-between 
						items-center 
						text-sm 
						leading-[18.23px]
						fixed
						z-10
						navbar"
		>
			<div className="flex gap-2 items-center">
				<Image
					src={LOGO}
					width={1000}
					height={1000}
					alt="Logo"
					quality={100}
					className="w-9"
				/>
				<div className={poppins.className}>
					<p className="font-medium tracking-[-0.04%] text-lg leading-[27px] text-[#A020F0]">
						{NAME.a}
						<span className="text-yellow-300">{NAME.span}</span>
						{NAME.b}
					</p>
				</div>
			</div>
			<div className="hidden lg:flex">
				{NAVBAR.menu.map((item, index) =>
					item.name === "Resources" ? (
						<div className="relative" key={index}>
							<div
								onClick={() => toggleDropdown()}
								className={`flex gap-1 py-2 px-[10px] items-center hover:text-[#A020F0] cursor-pointer group ${
									isActive(item.path)
										? "border-b-2 border-[#A020F0] text-[#A020F0]"
										: ""
								}`}
							>
								<span>{item.name}</span>
								<FontAwesomeIcon
									icon={faCaretDown}
									className={`w-[10px] h-[10px] group-hover:text-[#A020F0] ${
										isActive("/resources") || resourcesDd
											? "text-[#A020F0]"
											: "text-black"
									}`}
								/>
							</div>
							{resourcesDd && (
								<div className="absolute top-full left-0 bg-white shadow-lg mt-2 z-10 w-max rounded-lg text-sm leading-[18.23px]">
									{NAVBAR.resources.map((item, index) =>
										item.name === "Terms Of Services" ? (
											<div
												key={index}
												onClick={
													toggleTermsofServiceModal
												}
												className="hover:bg-[#A020F01A] cursor-pointer py-[10px] pr-4 pl-3"
											>
												{item.name}
											</div>
										) : (
											<div
												key={index}
												onClick={() =>
													handleDropdownItemClick(
														item.path
													)
												}
												className="hover:bg-[#A020F01A] cursor-pointer py-[10px] pr-4 pl-3"
											>
												{item.name}
											</div>
										)
									)}
								</div>
							)}
						</div>
					) : (
						<div
							key={index}
							onClick={() => handleDropdownItemClick(item.path)}
							className={`flex gap-1 py-2 px-[10px] items-center hover:text-[#A020F0] cursor-pointer group ${
								isActive(item.path)
									? "border-b-2 border-[#A020F0] text-[#A020F0]"
									: ""
							}`}
						>
							{item.name}
						</div>
					)
				)}
			</div>
			<div className="lg:flex gap-2 hidden">
				<button
					onClick={() =>
						handleDropdownItemClick(NAVBAR.buttons.login.path)
					}
					className="border-[1.5px] buttons rounded-[5px] py-4 px-6 border-[#A020F026] text-[#A020F0] text-[15px] leading-[20px] font-medium"
				>
					{NAVBAR.buttons.login.name}
				</button>
				<button
					onClick={() =>
						handleDropdownItemClick(NAVBAR.buttons.reg.path)
					}
					className="border-[1.5px] buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
				>
					{NAVBAR.buttons.reg.name}
				</button>
			</div>
			<div className="lg:hidden relative" ref={mobileDropdownRef}>
				<FontAwesomeIcon
					icon={faBars}
					className="w-6 h-6 cursor-pointer text-[#A020F0]"
					onClick={() => {
						setMobileDropdown(!mobileDropdown);
					}}
				/>
				<CSSTransition
					in={mobileDropdown}
					timeout={300}
					classNames=""
					unmountOnExit
				>
					<div
						className="flex flex-col 
									px-8 py-2 
									gap-2 absolute 
									top-full 
									-right-7 
									bg-white 
									shadow-lg 
									mt-2 z-10 
									w-[99.5vw]
									sm:w-[400px] 
									rounded-lg 
									text-sm "
					>
						{NAVBAR.menu.map((item, index) =>
							item.name === "Resources" ? (
								<div className="" key={index}>
									<div
										onClick={() => toggleDropdown()}
										className={`flex gap-1 py-2 px-[10px] w-max items-center hover:text-[#A020F0] cursor-pointer group ${
											isActive(item.path)
												? "border-b-2 border-[#A020F0] text-[#A020F0]"
												: ""
										}`}
									>
										<span>{item.name}</span>
										<FontAwesomeIcon
											icon={faCaretDown}
											className={`w-[10px] h-[10px] group-hover:text-[#A020F0] ${
												isActive("/resources") ||
												resourcesDd
													? "text-[#A020F0]"
													: "text-black"
											}`}
										/>
									</div>
									<CSSTransition
										in={resourcesDd}
										timeout={300}
										classNames="dropdown"
										unmountOnExit
									>
										<div>
											{NAVBAR.resources.map(
												(item, index) =>
													item.name ===
													"Terms Of Services" ? (
														<div
															key={index}
															onClick={
																toggleTermsofServiceModal
															}
															className="hover:bg-[#A020F01A] cursor-pointer py-[10px] pr-4 pl-7"
														>
															{item.name}
														</div>
													) : (
														<div
															key={index}
															onClick={() =>
																handleDropdownItemClick(
																	item.path
																)
															}
															className="hover:bg-[#A020F01A] cursor-pointer py-[10px] pr-4 pl-7"
														>
															{item.name}
														</div>
													)
											)}
										</div>
									</CSSTransition>
								</div>
							) : (
								<div
									key={index}
									onClick={() =>
										handleDropdownItemClick(item.path)
									}
									className={`flex gap-1 py-2 px-[10px] w-max items-center hover:text-[#A020F0] cursor-pointer group ${
										isActive(item.path)
											? "border-b-2 border-[#A020F0] text-[#A020F0]"
											: ""
									}`}
								>
									{item.name}
								</div>
							)
						)}
						<div className="flex gap-2 justify-between">
							<button
								onClick={() =>
									handleDropdownItemClick(
										NAVBAR.buttons.login.path
									)
								}
								className="border-[1.5px] hover: w-[48%] buttons rounded-[5px] py-4 px-6 border-[#A020F026] text-[#A020F0] text-[15px] leading-[20px] font-medium"
							>
								{NAVBAR.buttons.login.name}
							</button>
							<button
								onClick={() =>
									handleDropdownItemClick(
										NAVBAR.buttons.reg.path
									)
								}
								className="border-[1.5px] w-[48%] buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
							>
								{NAVBAR.buttons.reg.name}
							</button>
						</div>
					</div>
				</CSSTransition>
			</div>
			{showTermsofServiceModal && (
				<TermsOfServiceModal onClose={toggleTermsofServiceModal} />
			)}
		</div>
	);
};

export default Navbar;
