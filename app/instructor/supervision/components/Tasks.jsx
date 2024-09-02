"use client";
import React, { useState } from "react";
import { TASKS } from "../constants";
import GradingModal from "./GradingModal";

const Tasks = ({ searchTerm }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
	const [selectedStudent, setSelectedStudent] = useState(null);

	const itemsPerPage = 11;

	const filteredTasks = TASKS.tbody.filter((task) => {
		const lowerSearchTerm = searchTerm.toLowerCase();
		return (
			task.name.toLowerCase().includes(lowerSearchTerm) ||
			task.course.toLowerCase().includes(lowerSearchTerm) ||
			task.email.toLowerCase().includes(lowerSearchTerm) ||
			task.task.toLowerCase().includes(lowerSearchTerm)
		);
	});

	const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentTasks = filteredTasks.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const openGradeModal = (student) => {
		setSelectedStudent(student);
		setIsGradeModalOpen(true);
	};

	const closeGradeModal = () => {
		setIsGradeModalOpen(false);
		setSelectedStudent(null);
	};

	return (
		<div className="flex flex-col gap-10">
			<div className="flex rounded-lg p-2 md:p-5 bg-white w-full border border-[#22222214]">
				<div className="overflow-hidden border border-[#22222214] rounded-lg w-full">
					<table className="min-w-full text-[12px]">
						<thead className="bg-[#2222220D] text-[#22222280] font-medium text-nowrap">
							<tr>
								{TASKS.thead.map((item, index) => (
									<th
										key={index}
										className={`text-center md:text-left ${
											index === 0
												? "py-4 px-2 md:px-6"
												: "py-4 px-2 md:py-4 md:px-4"
										} ${
											index === 2
												? "hidden lg:table-cell"
												: ""
										} ${
											index === 4
												? "hidden md:table-cell"
												: ""
										}`}
									>
										{item}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{currentTasks.length > 0 ? (
								currentTasks.map((item, index) => (
									<tr
										key={index}
										onClick={() => openGradeModal(item)}
										className="text-center cursor-pointer md:text-left border-b hover:bg-[#A020F00D] text-[#222222] border-[#22222214]"
									>
										<td className="py-4 px-2 md:px-6">
											{item.name}
										</td>
										<td className="py-4 px-2 md:py-4 md:px-4">
											{item.course}
										</td>
										<td className="py-4 px-2 md:py-4 hidden lg:table-cell md:px-4">
											{item.email}
										</td>
										<td className="py-4 px-2 md:py-4 md:px-4">
											{item.task}
										</td>
										<td className="py-4 px-2 md:py-4 hidden md:table-cell md:px-4">
											{item.submitted}
										</td>
									</tr>
								))
							) : (
								<tr>
									<td
										colSpan={TASKS.thead.length}
										className="py-4 px-2 text-center"
									>
										No tasks found.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<button
					onClick={() => paginate(currentPage - 1)}
					disabled={currentPage === 1}
					className="disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm text-[#555555]"
				>
					&lt; Previous
				</button>
				<div className="flex gap-2.5">
					{[...Array(totalPages)].map((_, i) => {
						const pageNumber = i + 1;
						const isPageVisible =
							(currentPage <= 2 && pageNumber <= 3) ||
							(currentPage >= totalPages - 1 &&
								pageNumber >= totalPages - 2) ||
							(pageNumber >= currentPage - 1 &&
								pageNumber <= currentPage + 1);
						return (
							isPageVisible && (
								<button
									key={pageNumber}
									onClick={() => paginate(pageNumber)}
									className={`${
										currentPage === pageNumber
											? "bg-[#A020F0] text-white"
											: "bg-white text-black"
									}  text-xs sm:text-sm px-2 sm:px-4 py-1.5 rounded-md`}
								>
									{pageNumber}
								</button>
							)
						);
					})}
				</div>
				<button
					onClick={() => paginate(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm text-[#555555]"
				>
					Next &gt;
				</button>
			</div>
			{isGradeModalOpen && (
				<GradingModal
					onClose={closeGradeModal}
					studentDetails={selectedStudent}
				/>
			)}
		</div>
	);
};

export default Tasks;
