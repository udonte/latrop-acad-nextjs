"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ATTENDANCE } from "../constants";
import { ARROW, MODULEICON } from "../../mycourses/constants";

const Attendance = ({ searchTerm }) => {
	const [activeModule, setActiveModule] = useState(null);

	const toggleModule = (index) => {
		setActiveModule(activeModule === index ? null : index);
	};

	return (
		<div className="flex flex-col gap-4">
			{ATTENDANCE.map((module, index) => {
				const filteredRows = module.record.tbody.filter((item) => {
					const lowerSearchTerm = searchTerm.toLowerCase();
					return (
						item.name.toLowerCase().includes(lowerSearchTerm) ||
						item.course.toLowerCase().includes(lowerSearchTerm) ||
						item.email.toLowerCase().includes(lowerSearchTerm) ||
						item.attendance.toLowerCase().includes(lowerSearchTerm)
					);
				});

				return (
					<div
						key={index}
						className="flex flex-col gap-[14px] pt-6 pb-2 px-2 sm:px-6 bg-white rounded-lg border border-[#A020F01A]"
					>
						<div className="flex justify-between">
							<div
								onClick={() => toggleModule(index)}
								className=" flex gap-6 items-center w-full justify-between md:w-auto hover:bg-[#A020F01A] rounded-[4px] cursor-pointer"
							>
								<div className="flex items-center gap-4 w-[90%] md:w-auto">
									<Image
										width={1000}
										height={1000}
										src={MODULEICON}
										alt="Module"
										quality={100}
										className="w-5 h-5"
									/>
									<p className="font-medium text-base text-[#222222]">
										{module.module}
									</p>
								</div>
								<div
									className={`transform transition-transform duration-500 ${
										activeModule === index
											? "rotate-180"
											: ""
									}`}
								>
									<Image
										width={1000}
										height={1000}
										src={ARROW}
										alt="Arrow"
										quality={100}
										className="w-5 h-5"
									/>
								</div>
							</div>
						</div>
						<TransitionGroup>
							{activeModule === index && (
								<CSSTransition timeout={500} classNames="faq">
									<div className="overflow-hidden mb-4 border border-[#22222214] rounded-lg w-full">
										<table className="min-w-full text-[13px]">
											<thead className="bg-[#2222220D] text-[#22222280] font-medium text-nowrap">
												<tr>
													{module.record.thead.map(
														(item, index) => (
															<th
																key={index}
																className={`text-center md:text-left ${
																	index === 0
																		? "py-4 px-2 md:px-6"
																		: "py-4 px-2 md:py-4 md:px-4"
																} ${
																	index === 1
																		? "hidden lg:table-cell"
																		: ""
																} ${
																	index === 3
																		? "hidden md:table-cell"
																		: ""
																}`}
															>
																{item}
															</th>
														)
													)}
												</tr>
											</thead>
											<tbody>
												{filteredRows.map(
													(item, index) => (
														<tr
															key={index}
															className="text-center md:text-left border-b hover:bg-[#A020F00D] text-[#222222] border-[#22222214]"
														>
															<td className="py-4 px-2 md:px-6">
																{item.name}
															</td>
															<td className="py-4 px-2 md:py-4 md:px-4 hidden lg:table-cell">
																{item.course}
															</td>
															<td className="py-4 px-2 md:py-4 md:px-4">
																{item.time}
															</td>
															<td className="py-4 px-2 md:py-4 md:px-4 hidden md:table-cell">
																{item.email}
															</td>
															<td className="py-4 px-2 md:py-4 md:px-4">
																{
																	item.attendance
																}
															</td>
														</tr>
													)
												)}
											</tbody>
										</table>
									</div>
								</CSSTransition>
							)}
						</TransitionGroup>
					</div>
				);
			})}
		</div>
	);
};

export default Attendance;
