import React from "react";
import Image from "next/image";
import Link from "next/link";

const Courses = ({ course }) => {
	return (
		<div className="flex flex-wrap gap-[2%] gap-y-6">
			{course.map((course, index) => (
				<Link
					href={`/admin/courses/${course.route}`}
					passHref
					key={index}
					className="flex flex-col gap-2 w-[49%] lg:w-[23.5%] cursor-pointer"
				>
					<Image
						width={1000}
						height={1000}
						src={course.img}
						alt="Image"
						quality={100}
						className="object-cover aspect-[4/3] rounded-lg coursecard"
					/>
					<p className="text-sm text-[#222222]">{course.name}</p>
				</Link>
			))}
		</div>
	);
};

export default Courses;
