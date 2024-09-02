import React from "react";
import Engineering from "./Engineering";
import Testimonials from "@/app/components/Testimonials";
import { engineering } from "./constants";
import MainSection from "./MainSection";

export const metadata = {
	title: "Engineering - Learning Paths - Gurugeeks Academy",
};

const page = () => {
	const { hero } = engineering[0];
	const testimonials = hero.testimonials;
	return (
		<div>
			<Engineering />
			<MainSection />
			<Testimonials testimonials={testimonials} />
		</div>
	);
};

export default page;
