import React from "react";
import Data from "./Data";
import Testimonials from "@/app/components/Testimonials";
import { data } from "./constants";

export const metadata = {
	title: "Data - Learning Paths - Gurugeeks Academy",
};

const page = () => {
	const { hero } = data[0];
	const testimonials = hero.testimonials;

	return (
		<div>
			<Data />
			<Testimonials testimonials={testimonials} />
		</div>
	);
};

export default page;
