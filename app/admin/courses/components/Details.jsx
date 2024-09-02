"use client";
import React, { useState } from "react";
import Modules from "./Modules";
import Students from "./Students";

const Details = ({ details }) => {
	const [activeTab, setActiveTab] = useState("Course Details");
	const { tabs, course, students } = details;
	const changeTab = (tab) => {
		setActiveTab(tab)
	}
	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between">
				<div className="flex gap-3 lg:gap-4 items-center">
					{tabs.map((tab, index) => (
						<p
							key={index}
							onClick={() => changeTab(tab)}
							className={`cursor-pointer text-[13px] md:text-[17px] font-medium ${
								activeTab === tab
									? "text-[#222222]"
									: "text-[#22222280]"
							} ${
								index === 1
									? "pl-3 md:pl-4 border-l border-black"
									: ""
							}`}
						>
							{tab}
						</p>
					))}
				</div>
			</div>
			{activeTab === "Course Details" ? (
				<Modules course={course} />
			) : (
				<Students students={students} />
			)}
		</div>
	);
};

export default Details;
