import React from "react";
import Business from "./Business";
import Testimonials from "@/app/components/Testimonials";
import { testimonials } from "./constants";

export const metadata = {
	title: "Business - Learning Paths - Gurugeeks Academy",
};

const page = () => {
	return (
		<div>
			<Business />
			<Testimonials testimonials={testimonials} />
		</div>
	);
};

export default page;
