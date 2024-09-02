"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BLOG, SIDENAV, TOPNAV } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { LOGO } from "@/app/constants";

const AdminTopNav = () => {
	const { fname, lname, email, ddtext, navitems, type } = TOPNAV;
	const pathname = usePathname();
	const dropdownRef = useRef(null);
	const router = useRouter();
	const [dropdown, setDropdown] = useState(false);

	const page =
		TOPNAV.names.find((item) => {
			if (item.route === pathname) {
				return true;
			}

			if (
				pathname.startsWith("/admin/blog/") &&
				item.route === "/admin/blog/[blog]"
			) {
				return true;
			}

			return false;
		})?.name || "Unknown Page";
	const isActive = (path) => {
		if (path === "/") {
			return pathname === path;
		}
		return pathname.startsWith(path);
	};

	const toggleDropdown = () => {
		setDropdown((prevstate) => !prevstate);
	};

	const initials = () => {
		const firstInitial = fname.charAt(0).toUpperCase();
		const lastInitial = lname.charAt(0).toUpperCase();
		return `${firstInitial}${lastInitial}`;
	};

	const handleOutsideClick = (event) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target)
		) {
			setDropdown(false);
		}
	};

	useEffect(() => {
		if (dropdown) {
			document.addEventListener("mousedown", handleOutsideClick);
		} else {
			document.removeEventListener("mousedown", handleOutsideClick);
		}
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [dropdown]);

	const allowedRoutes = [
		"/admin/calendar",
		"/admin/courses",
		"/admin/myinfo",
		"/admin/payments",
		"/admin/support",
		"/admin/settings",
		"/admin/blog",
		"/admin/blog/create",
	];

	const blogRoute = /^\/admin\/blog\/.+$/;
	const courseRoute = /^\/admin\/courses\/.+$/;

	if (
		!allowedRoutes.includes(pathname) &&
		!courseRoute.test(pathname) &&
		!blogRoute.test(pathname)
	) {
		return "";
	}

	return (
		<div className="relative w-full">
			<div className="top-0 left-0 md:left-[100px] lg:left-[240px] right-0 fixed z-10 bg-white h-14 py-2 px-4 md:h-20 border-b border-[#2222221A] md:px-10 md:py-4 flex items-center justify-between">
				<div className="flex gap-2 items-center">
					<Link href="/">
						<Image
							src={LOGO}
							width={1000}
							height={1000}
							alt="Logo"
							quality={100}
							className="w-7 lg:w-9 md:hidden"
						/>
					</Link>
					<p className="font-bold text-[18px] md:text-[24px] leading-[23px] md:leading-[31px] tracking-[-1px] text-[#222222]">
						{page}
					</p>
				</div>
				<div className="flex gap-4">
					<button
						onClick={() => router.push("/admin/blog/create")}
						className="border-[1.5px] buttons bg-[#A020F0] w-max rounded-[5px] p-2 md:py-4 md:px-6 text-[#ffffff] text-[12px] md:text-[15px] leading-[20px] font-medium"
					>
						{BLOG}
					</button>
					<div className="relative" ref={dropdownRef}>
						<div
							onClick={toggleDropdown}
							className="flex gap-2 items-center cursor-pointer"
						>
							<div className="flex gap-1 md:gap-2 items-center">
								<div className="flex w-10 h-10 md:w-12 md:h-12 bg-[#D9D9D9] rounded-full items-center justify-center text-[#272727] font-semibold text-[16px] leading-[21px]">
									<p>{initials()}</p>
								</div>
								<div>
									<p className="hidden md:block">{`${fname} ${lname}`}</p>
									<p className="text-[#272727BF] text-[14px] leading-[18px] hidden md:block">
										{type}
									</p>
								</div>
							</div>
							<Image
								src={TOPNAV.arrow}
								width={1000}
								height={1000}
								alt="Logo"
								quality={100}
								className="w-5"
							/>
						</div>
						{dropdown && (
							<div className="flex flex-col absolute right-0 mt-2 md:mt-5 rounded-2xl border border-[#2222221A] bg-white">
								<div className="flex flex-col gap-2 py-3 px-6 text-[#272727BF] text-[14px] leading-[18px]">
									<p>{ddtext}</p>
									<p>{email}</p>
								</div>
								<div>
									{navitems.map((item, index) => (
										<Link
											href={item.route}
											key={index}
											onClick={toggleDropdown}
											className="hidden md:flex items-center py-4 px-6 gap-2.5 hover:bg-[#A020F00D] cursor-pointer"
										>
											<Image
												src={item.icon}
												width={1000}
												height={1000}
												alt="Logo"
												quality={100}
												className="w-5 h-5"
											/>
											<p className="text-[15px] leading-[20px] text-[#222222]">
												{item.name}
											</p>
										</Link>
									))}
									{SIDENAV.map((item, index) => (
										<Link
											key={index}
											href={item.route}
											onClick={toggleDropdown}
											className={`w-full py-[13px] px-6 flex md:hidden gap-2.5 text-black items-center text-[14px] ${
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
											<p className="">{item.name}</p>
										</Link>
									))}
									<Link
										onClick={toggleDropdown}
										href={navitems[2].route}
										className="flex md:hidden items-center py-[13px] px-6 gap-2.5 hover:bg-[#A020F00D] cursor-pointer"
									>
										<Image
											src={navitems[2].icon}
											width={1000}
											height={1000}
											alt="Logo"
											quality={100}
											className="w-5 h-5"
										/>
										<p className="text-[14px] leading-[20px] text-[#222222]">
											{navitems[2].name}
										</p>
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="pb-14 md:pb-20"></div>
		</div>
	);
};

export default AdminTopNav;
