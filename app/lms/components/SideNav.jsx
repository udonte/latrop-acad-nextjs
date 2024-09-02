"use client";
import React, {useState} from "react";
import { poppins } from "@/app/fonts";
import { usePathname, useRouter } from "next/navigation";
import { LOGO, NAME, SIDENAV } from "../constants";
import Image from "next/image";
import ReferAFriend from "./ReferAFriend";

const SideNav = () => {
	const pathname = usePathname();
	const router = useRouter();
	const [showReferAFriend, setShowReferAFriend] = useState(false)
	const isActive = (path) => {
		if (path === "/") {
			return pathname === path;
		}
		return pathname.startsWith(path);
	};

	const toggleReferAFriend = () => {
		setShowReferAFriend(!showReferAFriend)
	};

	const allowedRoutes = [
		"/lms/calendar",
		"/lms/enroll",
		"/lms/mycourses",
		"/lms/mycourses/completed",
		"/lms/mycourses/enrolled",
		"/lms/myinfo",
		"/lms/payment",
		"/lms/payment/paymentdetails",
		"/lms/support",
		"/lms/teams",
	];

	const courseRoute = /^\/lms\/enroll\/.+$/;

	if (!allowedRoutes.includes(pathname) && !courseRoute.test(pathname)) {
		return "";
	}

	return (
		<div className="hidden md:block">
			<div className="flex flex-col h-[100vh] gap-12 items-center fixed w-[100px] lg:w-[240px] bg-[#FFFFFF] border-r border-[#2222221A]">
				<div
					onClick={() => router.push("/")}
					className="flex gap-2 h-min pt-12 items-center cursor-pointer"
				>
					<Image
						src={LOGO}
						width={1000}
						height={1000}
						alt="Logo"
						quality={100}
						className="w-16 lg:w-9"
					/>
					<div className={`hidden lg:block ${poppins.className}`}>
						<p className="font-medium tracking-[-1px] text-lg leading-[27px] text-[#A020F0]">
							{NAME.a}
							<span className="text-yellow-300">{NAME.span}</span>
							{NAME.b}
						</p>
					</div>
				</div>
				<div className="flex flex-col w-full">
					{SIDENAV.slice(0, 6).map((item, index) => (
						<div
							key={index}
							onClick={() => router.push(item.route)}
							className={`w-full py-4 px-6 flex gap-2.5 text-black justify-center lg:justify-normal items-center text-[15px] ${
								isActive(item.route)
									? "border-r-4 border-[#FFD43A] bg-[#A020F0] text-white font-semibold"
									: "cursor-pointer hover:bg-[#A020F00D]"
							}`}
						>
							{isActive(item.route) ? (
								<Image
									src={item.iconW}
									width={1000}
									height={1000}
									alt="Logo"
									quality={100}
									className="w-5 h-5"
								/>
							) : (
								<Image
									src={item.iconB}
									width={1000}
									height={1000}
									alt="Logo"
									quality={100}
									className="w-5 h-5"
								/>
							)}
							<p className="hidden lg:block">{item.name}</p>
						</div>
					))}
					<div
					onClick={toggleReferAFriend} className="w-full py-4 px-6 flex gap-2.5 text-black justify-center lg:justify-normal items-center text-[15px] cursor-pointer hover:bg-[#A020F00D]">
						<Image
							src={SIDENAV[6].iconB}
							width={1000}
							height={1000}
							alt="Logo"
							quality={100}
							className="w-5 h-5"
						/>
						<p className="hidden lg:block">{SIDENAV[6].name}</p>
					</div>
				</div>
			</div>
			<div className="h-full pr-[100px] lg:pr-[240px]">
			</div>
			{showReferAFriend && (<ReferAFriend onClose={toggleReferAFriend}/>)}
		</div>
	);
};

export default SideNav;
