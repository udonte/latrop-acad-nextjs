"use client";
import React, { useEffect, useRef, useState } from "react";
import {
	COUNTRY,
	COURSES,
	EDITBUTTON,
	FORM,
	GENDER,
	INITIALS,
	PICTURE,
	SAVEBUTTON,
	STATE,
} from "../constants";
import Image from "next/image";
import DropDown from "@/app/signup/components/DropDown";
import DisabledDropDown from "./DisabledDropDown";
import UploadPopup from "./UploadPopup";

const Form = () => {
	const [stateOptions, setStateOptions] = useState(["Loading..."]);
	const [countryOptions, setCountryOptions] = useState([]);
	const [resetDropdowns, setResetDropdowns] = useState(false);
	const [edit, setEdit] = useState(false);
	const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		preferred_name: "",
		email: "",
		phone_no: "",
		country: "",
		gender: "",
		state: "",
		courses: "",
		profile_picture: null,
	});

	const toggleEdit = (e) => {
		if (!edit) {
			e.preventDefault();
			setEdit(true);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileUpload = (file) => {
		setFormData((prev) => ({ ...prev, profile_picture: file }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setEdit(false);
		console.log(formData);
	};

	const handleSelectChange = (type, value) => {
		setFormData((prevData) => ({
			...prevData,
			[type]: value,
		}));
	};

	const handlePictureClick = () => {
		setIsUploadPopupOpen(true);
	};

	const closeUploadPopup = () => {
		setIsUploadPopupOpen(false);
	};

	useEffect(() => {
		const fetchCountries = async () => {
			const response = await fetch("https://restcountries.com/v3.1/all");
			const data = await response.json();
			const countryData = data.map((country) => ({
				name: country.name.common,
			}));
			setCountryOptions(countryData.map((country) => country.name));
		};
		fetchCountries();
	}, []);

	const fetchStates = async (country) => {
		try {
			const tokenResponse = await fetch(
				"https://www.universal-tutorial.com/api/getaccesstoken",
				{
					method: "GET",
					headers: {
						Accept: "application/json",
						"api-token":
							"B44gDtqcl1EVAlrtFneo4xAjMvdO2T6yUQ6BWbdBM23x9jdrLu_SDFB7gpqSn2AAdGM",
						"user-email": "ruqouyyah.muhammad@gurugeeksroyalty.biz",
					},
				}
			);

			if (!tokenResponse.ok) {
				throw new Error("Failed to fetch access token");
			}

			const tokenData = await tokenResponse.json();
			const accessToken = tokenData.auth_token;

			const statesResponse = await fetch(
				`https://www.universal-tutorial.com/api/states/${country}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${accessToken}`,
						Accept: "application/json",
					},
				}
			);

			if (!statesResponse.ok) {
				throw new Error("Failed to fetch states");
			}

			const statesData = await statesResponse.json();
			const stateNames = statesData.map((state) => state.state_name);
			setStateOptions(stateNames);
		} catch (error) {
			console.error("Error fetching states:", error);
		}
	};

	useEffect(() => {
		if (formData.country) {
			fetchStates(formData.country);
		}
	}, [formData.country]);

	const UPDATED_STATE = {
		...STATE,
		options: stateOptions,
	};

	const UPDATED_COUNTRY = {
		...COUNTRY,
		options: countryOptions,
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-6 bg-white rounded-lg px-4 py-6 sm:py-14 sm:px-10"
		>
			<div className="flex justify-between">
				<div className="flex gap-4 flex-col gap-y-2 md:flex-row items-center">
					<div className="flex w-[120px] h-[120px] border border-[#22222240] bg-[#2222221A] rounded-full items-center justify-center text-[#27272780] font-semibold text-[40px] leading-[52px]">
						{formData.profile_picture ? (
							<Image
								src={URL.createObjectURL(
									formData.profile_picture
								)}
								width={1000}
								height={1000}
								alt="Profile"
								className="rounded-full object-cover w-full h-full"
							/>
						) : (
							<p>{INITIALS}</p>
						)}
					</div>
					<p
						onClick={handlePictureClick}
						className={
							edit
								? "text-[#272727] text-sm cursor-pointer"
								: "hidden"
						}
					>
						{PICTURE}
					</p>
				</div>
				<button
					onClick={toggleEdit}
					type={edit ? SAVEBUTTON.type : EDITBUTTON.type}
					className="flex gap-2 items-center border-[1.5px] buttons bg-[#A020F0] w-max h-min rounded-[5px] py-4 px-4 md:px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
				>
					<Image
						src={EDITBUTTON.icon}
						width={1000}
						height={1000}
						alt="Edit"
						className={`w-4 h-4 ${edit ? "hidden" : ""}`}
					/>
					<p className={edit ? "" : "hidden md:block"}>
						{edit ? SAVEBUTTON.text : EDITBUTTON.text}
					</p>
				</button>
			</div>
			<div className="flex flex-col gap-6 w-full">
				<div className="flex flex-col gap-4 w-full">
					<div className="flex flex-wrap gap-[2%] gap-y-4">
						{FORM.map((field, index) => (
							<div
								key={index}
								className="flex flex-col w-full sm:w-[48%] gap-1"
							>
								<div className="flex justify-between">
									<label className="text-sm text-[#555555]">
										{field.label}
									</label>
								</div>
								<input
									type={field.type}
									name={field.name}
									value={formData[field.name]}
									onChange={handleChange}
									placeholder={field.placeholder}
									disabled={!edit}
									className="py-3 px-4 rounded-lg border border-[#2222221A] placeholder:text-[#AAAAAA] placeholder:text-sm focus:outline-none"
								/>
							</div>
						))}
						{edit ? (
							<DropDown
								item={UPDATED_COUNTRY}
								onSelect={(value) =>
									handleSelectChange(
										UPDATED_COUNTRY.name,
										value
									)
								}
								reset={resetDropdowns}
							/>
						) : (
							<DisabledDropDown item={UPDATED_COUNTRY} />
						)}
						{edit ? (
							<DropDown
								item={GENDER}
								onSelect={(value) =>
									handleSelectChange(
										UPDATED_COUNTRY.name,
										value
									)
								}
								reset={resetDropdowns}
							/>
						) : (
							<DisabledDropDown item={GENDER} />
						)}
						{edit ? (
							<DropDown
								item={UPDATED_STATE}
								onSelect={(value) =>
									handleSelectChange(
										UPDATED_COUNTRY.name,
										value
									)
								}
								reset={resetDropdowns}
							/>
						) : (
							<DisabledDropDown item={UPDATED_STATE} />
						)}
					</div>
				</div>
			</div>
			<UploadPopup
				isOpen={isUploadPopupOpen}
				onClose={closeUploadPopup}
				onFileUpload={handleFileUpload}
			/>
		</form>
	);
};

export default Form;
