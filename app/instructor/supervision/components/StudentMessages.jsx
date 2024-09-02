"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { MESSAGES } from "../constants";
import ReplyModal from "./ReplyModal";
import ViewModal from "./ViewModal";

const StudentMessages = ({ searchTerm }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 3;

	const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
	const [isViewModalOpen, setIsViewModalOpen] = useState(false);

	const [currentMessage, setCurrentMessage] = useState(null);

	// Filter messages based on searchTerm
	const filteredMessages = MESSAGES.filter(
		(message) =>
			message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
			message.message.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredMessages.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);

	const openReplyModal = (message) => {
		setCurrentMessage(message);
		setIsReplyModalOpen(true);
	};

	const openViewModal = (message) => {
		setCurrentMessage(message);
		setIsViewModalOpen(true);
	};

	const closeReplyModal = () => setIsReplyModalOpen(false);
	const closeViewModal = () => setIsViewModalOpen(false);

	return (
		<div
			className="container mx-auto bg-gray-100 bg-center"
			style={{
				backgroundImage: "url('/assets/lms/lmsbg.svg')",
				backgroundSize: "cover",
			}}
		>
			{/* Display filtered and paginated messages */}
			{currentItems.map((message, index) => (
				<div className="mb-4" key={index}>
					<h3 className="text-lg font-bold">{message.today}</h3>
					<div className="bg-white flex flex-col sm:flex-row gap-4 rounded-lg p-4 mt-2">
						<div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#D9D9D9] flex-shrink-0 rounded-full font-semibold text-[#272727]">
							<p>UO</p>
						</div>
						<div className="flex flex-col flex-grow">
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
								<div>
									<h4 className="text-base font-medium text-[#222222]">
										{message.name}
									</h4>
									<p className="text-sm text-[#222222BF]">
										{message.email}
									</p>
								</div>

								{/*Reply and View Messages */}
								<div className="flex items-center space-x-4 mt-2 sm:mt-0">
									<button
										className="text-sm flex items-center text-[#222222]"
										onClick={() => openReplyModal(message)}
									>
										{message.replyMessage && (
											<FontAwesomeIcon
												icon={faReplyAll}
												className="mr-1"
											/>
										)}
										{message.replyMessage}
									</button>

									<button
										className="text-sm flex items-center text-[#222222]"
										onClick={() => openViewModal(message)}
									>
										{message.viewReply && (
											<FontAwesomeIcon
												icon={faEye}
												className="mr-1"
											/>
										)}
										{message.viewReply}
									</button>
								</div>
							</div>

							{/*Date and time */}
							<div className="mt-4 py-4 px-4 sm:px-6 rounded-lg bg-[#2222220D] border border-[#2222220D]">
								<p className="text-sm text-[#222222BF]">
									{message.message}
								</p>
							</div>
							<div className="flex justify-end space-x-4">
								<div className="mt-2 text-xs text-[#222222A6]">
									{message.date}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}

			{/* Pagination */}
			<div className="flex justify-between items-center mt-8">
				<button
					onClick={() => paginate(currentPage - 1)}
					disabled={currentPage === 1}
					className="disabled:opacity-50 disabled:cursor-not-allowed text-[#555555]"
				>
					&lt; Previous
				</button>

				<div className="flex space-x-1">
					{[...Array(totalPages)].map((_, i) => (
						<button
							key={i + 1}
							onClick={() => paginate(i + 1)}
							className={`${
								currentPage === i + 1
									? "bg-[#A020F0] text-white"
									: "bg-[#F9FAFB] text-[#101828] border border-[#D0D5DD]"
							} px-3 py-1 rounded-md`}
						>
							{i + 1}
						</button>
					))}
				</div>

				<button
					onClick={() => paginate(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="disabled:opacity-50 disabled:cursor-not-allowed text-[#555555]"
				>
					Next &gt;
				</button>
			</div>

			{/* Reply Modal */}
			{isReplyModalOpen && (
				<ReplyModal
					onClose={closeReplyModal}
					message={currentMessage}
				/>
			)}

			{/* View Modal */}
			{isViewModalOpen && (
				<ViewModal onClose={closeViewModal} message={currentMessage} />
			)}
		</div>
	);
};

export default StudentMessages;
