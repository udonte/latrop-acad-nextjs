"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SEARCH, TABS } from "../constants";
import { BACKGROUNDIMG } from "@/app/lms/myinfo/constants";
import Teams from "./Teams";
import InstructorMessages from "./InstructorMessages";
import StudentMessages from "./StudentMessages";

const Support = () => {
	const [activeTab, setActiveTab] = useState("Teams");
	const [showSearch, setShowSearch] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const dropdownRef = useRef(null);
	const toggleDropdown = () => setIsOpen(!isOpen);
	const handleClickOutside = (event) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target)
		) {
			setIsOpen(false);
		}
	};

	const renderTabContent = () => {
		switch (activeTab) {
			case "Teams":
				return <Teams searchTerm={searchTerm} />;
			case "Student Messages":
				return <StudentMessages searchTerm={searchTerm} />;
			case "Instructor Messages":
				return <InstructorMessages searchTerm={searchTerm} />;
			default:
				return <Teams searchTerm={searchTerm} />;
		}
	};

	const changeTab = (tab) => {
		setActiveTab(tab);
		setIsOpen(false);
		setSearchTerm("");
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative bg-[#F3F3F4] w-full min-h-[95vh]">
			<Image
				src={BACKGROUNDIMG}
				width={1000}
				height={1000}
				alt="Background img"
				className="absolute inset-0 w-auto h-full"
			/>
			<div className="relative flex flex-col gap-7 px-[3%] pt-5 pb-20">
				<div className="flex md:hidden gap-2 md:justify-between">
					{showSearch ? (
						<div className="md:hidden flex bg-[#2222220D] items-center w-full py-3 px-3 lg:px-4 border border-[#22222226] rounded-lg">
							<div className="flex gap-2 lg:gap-4 items-center grow">
								<Image
									src={SEARCH.searchB}
									width={1000}
									height={1000}
									alt="Search Icon"
									className="w-4 h-4"
								/>
								<input
									type="text"
									placeholder={SEARCH.placeholder}
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
									className="rounded-lg h-[17px] placeholder:truncate bg-transparent grow placeholder:text-[#222222] text-[13px] placeholder:text-[13px] focus:outline-none"
								/>
							</div>
							<Image
								src={SEARCH.close}
								onClick={() => setShowSearch(false)}
								width={1000}
								height={1000}
								alt="Filter Icon"
								className="w-4 h-4 cursor-pointer"
							/>
						</div>
					) : (
						<div className="flex gap-2 w-full">
							<div
								className="relative flex md:hidden flex-col w-full gap-1"
								ref={dropdownRef}
							>
								<div
									onClick={toggleDropdown}
									className="flex justify-between items-center gap-3 px-4 py-2 cursor-pointer rounded-lg bg-[#2222220D] border border-[#22222226]"
								>
									<p className="text-[#222222]">
										{activeTab}
									</p>
									<svg
										className="w-4 h-4 text-[#222222]"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
								{isOpen && (
									<ul className="absolute border bg-[#FFFFFF] top-full mt-[2px] rounded-lg w-full max-h-[370px] overflow-y-auto z-10">
										{TABS.map((tab, index) => (
											<li
												key={index}
												onClick={() => changeTab(tab)}
												className="pr-4 pl-3 py-[10px] text-[13px] leading-[18px] hover:bg-[#A020F00D] cursor-pointer"
											>
												{tab}
											</li>
										))}
									</ul>
								)}
							</div>
							<button
								onClick={() => setShowSearch(true)}
								className="flex md:hidden border-[1.5px] buttons bg-[#A020F0] rounded-[5px] py-3 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
							>
								<Image
									src={SEARCH.searchW}
									width={1000}
									height={1000}
									alt="Search Icon"
									className="w-4 h-4"
								/>
							</button>
						</div>
					)}
				</div>
				<div className="hidden md:flex gap-2 md:justify-between">
					<div className="hidden md:flex items-center border-b border-[#2222221A]">
						{TABS.map((tab, index) => (
							<p
								key={index}
								onClick={() => changeTab(tab)}
								className={`py-2.5 px-3 md:px-3 cursor-pointer text-[14px] lg:text-[15px] ${
									activeTab === tab
										? "text-[#A020F0] border-b-2 border-[#A020F0]"
										: ""
								}`}
							>
								{tab}
							</p>
						))}
					</div>
					<div className="hidden md:flex bg-[#ffffff] items-center w-[192px] lg:w-[300px] py-2 px-3 lg:px-4 border border-[#2222221A] rounded-lg">
						<div className="flex gap-2 lg:gap-4 items-center grow">
							<Image
								src={SEARCH.search}
								width={1000}
								height={1000}
								alt="Search Icon"
								className="w-4 h-4"
							/>
							<input
								type="text"
								placeholder={SEARCH.placeholder}
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="rounded-lg h-[17px] grow placeholder:truncate placeholder:text-[#AAAAAA] text-[13px] placeholder:text-[13px] focus:outline-none"
							/>
						</div>
						<Image
							src={SEARCH.filter}
							width={1000}
							height={1000}
							alt="Filter Icon"
							className="w-4 h-4"
						/>
					</div>
				</div>
				{renderTabContent()}
			</div>
		</div>
	);
};

export default Support;
