"use client";
import React, { useState } from "react";
import { HOME } from "../constants";
import Image from "next/image";
import {
	BUTTON,
	FORM,
	HEADING,
	RESETPASSWORD,
	SIGNUP,
	SUBTEXT,
} from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authenticateUser } from "@/redux/slices/auth.slice";
import { setItemToLocalStorage } from "@/utilities/localStorageManager";
import { useDispatch } from "react-redux";

const Login = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [error, setError] = useState(null);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const action = await dispatch(authenticateUser(formData));

			if (authenticateUser.fulfilled.match(action)) {
				if (action.payload.status === 200) {
					console.log("Login successful:", action.payload);
					setItemToLocalStorage(
						"access_token",
						action.payload.access_token
					);
					setItemToLocalStorage(
						"refresh_token",
						action.payload.refresh_token
					);

					const userRole = action.payload.user_role;
					if (userRole === "student") {
						router.push("/lms/myinfo");
					} else if (userRole === "admin") {
						router.push("/admin/myinfo");
					} else if (userRole === "instructor") {
						router.push("/instructor/myinfo");
					}else if (userRole === "visitor") {
						router.push("/lms/myinfo");
					}
					setError(null);
				} else {
					setError(action.payload.response.data.message);
				}
			} else if (authenticateUser.rejected.match(action)) {
				console.log("Error payload:", action.payload);
				setError(action.payload || "Login failed");
			}
		} catch (err) {
			setError("An unexpected error occurred");
		}
	};

	return (
		<div className="flex relative justify-center sm:h-[110vh] w-full">
			<div className="absolute inset-0">
				<div className="absolute-icons">
					{HOME.hero.icons.map((src, index) => (
						<Image
							key={index}
							src={src}
							width={1000}
							height={1000}
							alt={`Background Icon ${index}`}
							className="floating-icon"
						/>
					))}
				</div>
			</div>
			<div className="pt-40 pb-10 flex gap-6 flex-col w-[90%] sm:w-[588px] relative">
				<div className="flex flex-col gap-10 border border-[#2222221A] py-10 px-4 sm:px-10 rounded-2xl bg-white">
					<div className="flex justify-between">
						<div className="flex flex-col gap-1">
							<p className="text-[#222222] text-[26px] leading-[34px] font-bold">
								{HEADING}
							</p>
							<p className="text-[#222222BF] text-[15px] leading-[20px] sm:w-max">
								{SUBTEXT}
							</p>
						</div>
						<Link href={SIGNUP.link}>
							<div className="flex gap-1 h-min items-center cursor-pointer group">
								<p className="text-[#222222] group-hover:text-[#A020F0] text-nowrap text-[18px] leading-[23px] font-semibold transition-transform duration-[1.1s] ease-out transform group-hover:translate-x-[-20px]">
									{SIGNUP.text}
								</p>
								<FontAwesomeIcon
									icon={faArrowRightLong}
									className="w-5 h-4 group-hover:text-[#A020F0]"
								/>
							</div>
						</Link>
					</div>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-6 w-full"
					>
						<div className="flex flex-col gap-4 w-full">
							{error && (
								<span className="text-red-500 text-sm">
									{error}
								</span>
							)}
							{FORM.map((field, index) => (
								<div
									key={index}
									className="flex flex-col w-full gap-1"
								>
									<label className="text-sm text-[#555555]">
										{field.label}
									</label>
									<input
										type={field.type}
										name={field.name}
										value={formData[field.name]}
										onChange={handleChange}
										placeholder={field.placeholder}
										required
										className="py-3 px-4 rounded-lg border border-[#2222221A] placeholder:text-[#AAAAAA] placeholder:text-sm focus:outline-none"
									/>
								</div>
							))}
						</div>
						<button
							type={BUTTON.type}
							className="border-[1.5px] buttons bg-[#A020F0] w-full rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
						>
							{BUTTON.text}
						</button>
					</form>
				</div>
				<div className="w-full">
					<p className="text-center text-[15px] leading-[20px] text-[#222222BF]">
						{RESETPASSWORD.text}
						<Link
							href={RESETPASSWORD.link}
							className="text-[#A020F0]"
						>
							{RESETPASSWORD.span}
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
