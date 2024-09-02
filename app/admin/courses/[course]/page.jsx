import React from "react";
import Course from "./Course";
import { BUSINESS, DATA, ENGINEERING, PRODUCT } from "../constants";

const page = ({ params }) => {
	const { course } = params;
	const allCourses = [...ENGINEERING, ...PRODUCT, ...DATA, ...BUSINESS];
	const selectedCourse = allCourses.find((item) => item.route === course);
	if (!selectedCourse) {
		return <div>Course not found</div>;
	}
	return (
		<div>
			<Course coursename={selectedCourse} />
		</div>
	);
};

export default page;
