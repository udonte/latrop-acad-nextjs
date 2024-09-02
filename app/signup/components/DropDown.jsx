import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";

const DropDown = ({ item, onSelect, reset }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		onSelect(option);
		setIsOpen(false);
	};

	const handleClickOutside = (event) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (reset) {
			setSelectedOption("");
		}
	}, [reset]);

	return (
		<div
			className="relative flex flex-col w-full sm:w-[48%] gap-1"
			ref={dropdownRef}
		>
			<label className="text-sm text-[#555555]">{item.label}</label>
			<div
				onClick={toggleDropdown}
				className="flex justify-between items-center gap-3 px-4 py-3 h-[49px] cursor-pointer rounded-lg border border-[#2222221A]"
			>
				<p
					className={`text-sm ${
						selectedOption ? "text-black" : "text-[#AAAAAA]"
					}`}
				>
					{selectedOption || item.placeholder}
				</p>
				<FontAwesomeIcon
					icon={faCaretDown}
					className="text-black w-3 h-3"
				/>
			</div>
			{isOpen && (
				<ul className="absolute border bg-[#FFFFFF] top-full mt-[2px] rounded-lg w-full max-h-[370px] overflow-y-auto z-10">
					{item.options.map((option, index) => (
						<li
							key={index}
							onClick={() => handleOptionClick(option)}
							className="pr-4 pl-3 py-[10px] text-[13px] leading-[18px] hover:bg-[#A020F00D] cursor-pointer"
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default DropDown;
