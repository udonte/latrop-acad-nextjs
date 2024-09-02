import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const handleClick = (page) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	const getPagesToDisplay = () => {
		const pages = [];
		if (totalPages <= 4) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else if (currentPage <= 2) {
			for (let i = 1; i <= 4; i++) {
				pages.push(i);
			}
		} else if (currentPage >= totalPages - 1) {
			for (let i = totalPages - 3; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			for (let i = currentPage - 1; i <= currentPage + 2; i++) {
				pages.push(i);
			}
		}
		return pages;
	};

	return (
		<div className="flex justify-between mt-10">
			<button
				onClick={() => handleClick(currentPage - 1)}
				disabled={currentPage === 1}
				className={`text-sm px-3 py-2 mr-2 rounded-md ${
					currentPage === 1
						? "text-[#555555] cursor-not-allowed"
						: "text-[#A020F0]"
				}`}
			>
				<FontAwesomeIcon
					icon={faChevronLeft}
					className={currentPage === 1 ? "hidden" : "mr-1 text-xs"}
				/>
				{currentPage === 1 ? "" : "Previous"}
			</button>

			<div className="flex justify-center items-center">
				{getPagesToDisplay().map((page) => (
					<button
						key={page}
						onClick={() => handleClick(page)}
						className={`text-sm px-3 py-2 mx-0 rounded-md flex items-center ${
							currentPage === page
								? "bg-[#A020F0] text-white"
								: "text-[#555555] border border-gray-300"
						}`}
					>
						{page}
					</button>
				))}
			</div>

			<button
				onClick={() => handleClick(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={`text-sm px-3 py-2 ml-2 rounded-md flex items-center ${
					currentPage === totalPages
						? "text-[#555555] cursor-not-allowed"
						: "text-[#A020F0]"
				}`}
			>
				{currentPage === totalPages ? "" : "Next"}
				<FontAwesomeIcon
					icon={faChevronRight}
					className={
						currentPage === totalPages ? "hidden" : "ml-1 text-xs"
					}
				/>
			</button>
		</div>
	);
};

export default Pagination;
