import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { dmSans } from "./fonts";
import "./globals.css";
import SideNav from "./lms/components/SideNav";
import TopNav from "./lms/components/TopNav";
import InstructorTopNav from "./instructor/components/TopNav";
import InstructorSideNav from "./instructor/components/SideNav";
import AdminTopNav from "./admin/components/TopNav";
import AdminSideNav from "./admin/components/SideNav";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata = {
	title: "Gurugeeks Academy",
	description: "Gurugeeks IT Training Portal",
	icons: {
		icon: ["/favicon.ico"],
	},
};

export default function RootLayout({ children }) {

	return (
		<ReduxProvider>
			<html lang="en">
				<body className={dmSans.className}>
					<div className="flex">
						<SideNav />
						<InstructorSideNav />
						<AdminSideNav />
						<div className="w-full">
							<TopNav />
							<InstructorTopNav />
							<AdminTopNav />
							<Navbar />
							{children}
							<Chatbot />
							<Footer />
						</div>
					</div>
				</body>
			</html>
		</ReduxProvider>
	);
}
