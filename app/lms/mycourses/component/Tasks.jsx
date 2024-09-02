import React from "react";
import { TASKS } from "../constants";

const Tasks = () => {
	return (
		<div className="flex rounded-lg p-2 md:p-6 bg-white w-full border border-[#22222214]">
			<div className="overflow-hidden border border-[#22222214] rounded-lg w-full">
				<table className="min-w-full text-[13px] md:text-sm">
					<thead className="bg-[#2222220D] text-[#22222280] font-medium">
						<tr>
							{TASKS.thead.map((item, index) => (
								<th
									key={index}
									className={`text-center md:text-left ${
										index === 0
											? "py-4 px-2 md:px-6 w-[25%] hidden lg:table-cell"
											: "py-4 px-2 md:py-4 md:px-4"
									} ${
										index === 3
											? "hidden md:table-cell"
											: ""
									} ${
										index === 4
											? "hidden md:table-cell"
											: ""
									} ${index === 5 ? "md:hidden" : ""}`}
								>
									{item}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{TASKS.tbody.map((item, index) => (
							<tr
								key={index}
								className="text-center md:text-left border-b text-[#222222] border-[#22222214]"
							>
								<td className="py-4 px-2 md:px-6 hidden lg:table-cell">
									{item.course}
								</td>
								<td className="py-4 px-2 md:py-4 md:px-4">
									{item.module}
								</td>
								<td className="py-4 px-2 md:py-4 md:px-4">
									{item.submitted}
								</td>
								<td className="py-4 px-2 md:py-4 md:px-4 hidden md:table-cell">
									{item.status}
								</td>
								<td className="py-4 px-2 md:py-4 md:px-4">
									{item.grade}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Tasks;
