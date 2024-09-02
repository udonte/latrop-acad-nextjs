import React from "react";
import Hero from "./components/Hero";
import Note from "./components/Note";
import Tutors from "./components/Tutors";
import Faqs from "../components/Faqs";
import { FAQS } from "./constants";

export const metadata = {
	title: "About Us - Gurugeeks Academy",
};

const page = () => {
	return (
		<div>
			<Hero />
			<Note />
			{/* <Tutors /> */}
			<Faqs faqs={FAQS} />
		</div>
	);
};

export default page;
