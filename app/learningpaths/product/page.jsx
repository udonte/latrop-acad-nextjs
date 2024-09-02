import React from "react";
import Product from "./Product";
import Testimonials from "@/app/components/Testimonials";
import { product } from "./constants";

export const metadata = {
	title: "Product - Learning Paths - Gurugeeks Academy",
};

const page = () => {
  const { hero } = product[0];
  const testimonials = hero.testimonials;
	return (
		<div>
			<Product />
			<Testimonials testimonials={testimonials} />
		</div>
	);
};

export default page;
