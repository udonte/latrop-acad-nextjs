import React from "react";
import LearningPath from "./LearningPaths";
import Testimonials from "../components/Testimonials";
import { HOME } from "../constants";

export const metadata = {
	title: "Learning Paths - Gurugeeks Academy",
};

const page = () => {
  return (
    <div>
      <LearningPath />
      <Testimonials testimonials={HOME.testimonials} />
    </div>
  );
};

export default page;
