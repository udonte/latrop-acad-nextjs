import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import LearningPaths from "./components/LearningPaths";
import Testimonials from "./components/Testimonials";
import TheGeeks from "./components/TheGeeks";
import { HOME } from "./constants";
import "react-big-calendar/lib/css/react-big-calendar.css";


export const metadata = {
	title: "Home - Gurugeeks Academy",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <Benefits />
      <LearningPaths />
      <TheGeeks />
      <Testimonials testimonials={HOME.testimonials} />
      <Faqs faqs={HOME.faqs} />
    </div>
  );
}
