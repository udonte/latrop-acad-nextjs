import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DisabledDropDown = ({ item }) => {
	return (
		<div className="relative flex flex-col w-full sm:w-[48%] gap-1">
			<label className="text-sm text-[#555555]">{item.label}</label>
			<div
				className="flex justify-between items-center gap-3 px-4 py-3 h-[49px] cursor-pointer rounded-lg bg-[#22222205] border border-[#2222221A]"
			>
				<p className="text-[#AAAAAA] text-sm">{item.placeholder}</p>
				<FontAwesomeIcon
					icon={faCaretDown}
					className="text-[#222222] w-3 h-3"
				/>
			</div>
		</div>
	);
};

export default DisabledDropDown;
