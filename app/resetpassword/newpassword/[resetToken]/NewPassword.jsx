"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BUTTON, HEADING, PASSWORD, SUBTEXT } from "./constants";
import { HOME } from "@/app/constants";
import { updateUserPassword } from "@/redux/slices/auth.slice";
import { selectAuthSlice } from "@/redux/selectors/auth.selector";
import { useSelector, useDispatch } from "react-redux";

const NewPassword = ({resetToken}) => {
	const {} = useSelector(selectAuthSlice)
	const dispatch = useDispatch()
	const router = useRouter();

	const [formData, setFormData] = useState({
		password: "",
		confirm_password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			token: resetToken,
			password: formData?.password
		}
		dispatch(updateUserPassword(data))
		// console.log(formData);
		router.push("/login");
	};

	return (
		<div className="flex relative justify-center w-full sm:h-[110vh]">
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
					<div className="flex justify-center">
						<div className="flex flex-col gap-1 items-center">
							<p className="text-[#222222] text-[26px] leading-[34px] font-bold">
								{HEADING}
							</p>
							<p className="text-[#222222BF] text-[15px] leading-[20px] sm:w-max text-center">
								{SUBTEXT}
							</p>
						</div>
					</div>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-6 w-full"
					>
						<div className="flex flex-col gap-4 w-full">
							{PASSWORD.map((field, index) => (
								<div
									key={index}
									className="flex flex-col w-full gap-1"
								>
									<div className="flex justify-between">
										<label className="text-sm text-[#555555]">
											{field.label}
										</label>
										<p className="text-xs text-[#A020F0]">
											{field.tag}
										</p>
									</div>
									<input
										type={field.type}
										name={field.name}
										value={formData[field.name]}
										onChange={handleChange}
										placeholder={field.placeholder}
										required
										className="py-3 px-4 rounded-lg border border-[#2222221A] placeholder:text-[#AAAAAA] placeholder:text-sm focus:outline-none"
									/>
									<div>
										<p className="text-[#222222] text-xs">
											{field.requirements
												.split("\n")
												.map((line, i) => (
													<React.Fragment key={i}>
														{line}
														<br />
													</React.Fragment>
												))}
										</p>
									</div>
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
			</div>
		</div>
	);
};

export default NewPassword;
