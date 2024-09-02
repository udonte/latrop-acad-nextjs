"use client";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { HOME } from "../constants";
import {
	ARROW,
	BUTTON,
	CHECKBOX,
	COUNTRY,
	FORM,
	GENDER,
	HEADING,
	LOGIN,
	PASSWORD,
	PHONE,
	STATE,
	SUBTEXT,
} from "./constants";
import DropDown from "./components/DropDown";
import TermsOfServiceModal from "../resources/termsofservices/components/TermsOfServiceModal";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "@/redux/slices/auth.slice";

const SignUp = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [countries, setCountries] = useState([]);
	const [dialCode, setDialCode] = useState("+234");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isCountryCodeOpen, setIsCountryCodeOpen] = useState(false);
	const [stateOptions, setStateOptions] = useState(["Loading..."]);
	const [countryOptions, setCountryOptions] = useState([]);
	const [resetDropdowns, setResetDropdowns] = useState(false);
	const [showTermsofServiceModal, setShowTermsofServiceModal] =
		useState(false);
	const [showPrivacyPolicyModal, setShowPrivacyPolicyModal] = useState(false);
	const [termsRead, setTermsRead] = useState(false);
	const [policyRead, setPolicyRead] = useState(false);
	const [checkboxChecked, setCheckboxChecked] = useState(false);
	const [showPrivacyError, setshowPrivacyError] = useState(false);
	const [errors, setErrors] = useState({});
	const [error, setError] = useState(null)

	const countryDropdownRef = useRef(null);

	const toggleTermsofServiceModal = () => {
		setShowTermsofServiceModal(!showTermsofServiceModal);
	};
	const togglePrivacyPolicyModal = () => {
		setShowPrivacyPolicyModal(!showPrivacyPolicyModal);
	};
	const handleTermsClick = () => {
		setTermsRead(true);
	};

	const handlePrivacyPolicyClick = () => {
		setPolicyRead(true);
	};

	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		preferred_name: "",
		email: "",
		phone_number: "",
		country: "",
		gender: "",
		state: "",
		password: "",
		confirm_password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleCheckboxChange = (e) => {
		if (termsRead && policyRead) {
			setCheckboxChecked(e.target.checked);
			setshowPrivacyError(false);
		} else {
			setshowPrivacyError(true);
			setCheckboxChecked(false);
		}
	};

	const countryDropdown = () => {
		setIsCountryCodeOpen(!isCountryCodeOpen);
	};

	const handleOptionClick = async (country) => {
		setDialCode(country.code);
		setIsCountryCodeOpen(false);
	};

	const handleClickOutside = (event) => {
		if (
			countryDropdownRef.current &&
			!countryDropdownRef.current.contains(event.target)
		) {
			setIsCountryCodeOpen(false);
		}
	};

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
		setFormData((prev) => ({
			...prev,
			phone_number: dialCode + e.target.value,
		}));
	};

	const handleSelectChange = (type, value) => {
		setFormData((prevData) => ({
			...prevData,
			[type]: value,
		}));
	};

	useEffect(() => {
		const fetchCountries = async () => {
			const response = await fetch("https://restcountries.com/v3.1/all");
			const data = await response.json();
			const countryData = data.map((country) => ({
				code:
					country.idd.root +
					(country.idd.suffixes ? country.idd.suffixes[0] : ""),
				name: country.name.common,
			}));
			setCountries(
				countryData.sort((a, b) => a.name.localeCompare(b.name))
			);
			setCountryOptions(countryData.map((country) => country.name));
		};
		fetchCountries();
	}, []);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
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

	const validateForm = () => {
		const newErrors = {};

		if (!formData.first_name) {
			newErrors.first_name = "First name is required";
		} else if (formData.first_name.length < 2) {
			newErrors.first_name =
				"First name must be at least 2 characters long";
		}

		if (!formData.last_name) {
			newErrors.last_name = "Last name is required";
		} else if (formData.last_name.length < 2) {
			newErrors.last_name =
				"Last name must be at least 2 characters long";
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email) {
			newErrors.email = "Email is required";
		} else if (!emailRegex.test(formData.email)) {
			newErrors.email = "Invalid email address";
		}

		if (!formData.phone_number) {
			newErrors.phone_number = "Phone number is required";
		}

		if (!formData.country) newErrors.country = "Country is required";
		if (!formData.gender) newErrors.gender = "Gender is required";
		if (!formData.state) newErrors.state = "State is required";

		const passwordRegex =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~_+=|-]).{8,}$/;

		if (!formData.password) {
			newErrors.password = "Password is required";
		} else if (!passwordRegex.test(formData.password)) {
			newErrors.password =
				"Password must be at least 8 characters, with one uppercase letter, one lowercase letter, one number, and one special character";
		}

		if (!formData.confirm_password) {
			newErrors.confirm_password = "Please confirm your password";
		} else if (formData.password !== formData.confirm_password) {
			newErrors.confirm_password = "Passwords do not match";
		}

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			if (termsRead && policyRead) {
				const formDataToSubmit = { ...formData };
				delete formDataToSubmit.confirm_password;
				console.log(formDataToSubmit);
				try {
					const action = await dispatch(signUpUser(formDataToSubmit));

					if (signUpUser.fulfilled.match(action)) {
						if (action.payload.status === 201) {
							router.push("/login");
						} else {
							console.log(
								"Unexpected status:",
								action.payload.response.data.message
							);
							setError(true);
						}
					} else if (signUpUser.rejected.match(action)) {
						console.log("Error payload:", action.payload);
						setError(true);
					}
				} catch (err) {
					console.log("Error:", err);
					setError(true);
				}
			} else {
				setShowErrorMessage(true);
			}
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
		<div className="flex relative justify-center w-full">
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
						<Link href={LOGIN.link}>
							<div className="flex gap-1 h-min items-center cursor-pointer group">
								<p className="text-[#222222] group-hover:text-[#A020F0] text-nowrap text-[18px] leading-[23px] font-semibold transition-transform duration-[1.1s] ease-out transform group-hover:translate-x-[-20px]">
									{LOGIN.text}
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
											required={field.tag !== "Optional"}
											className="py-3 px-4 rounded-lg border border-[#2222221A] placeholder:text-[#AAAAAA] placeholder:text-sm focus:outline-none"
										/>
										{errors[field.name] && (
											<span className="text-red-500 text-xs">
												{errors[field.name]}
											</span>
										)}
									</div>
								))}
							</div>
							<div className="flex flex-wrap gap-[2%] gap-y-4">
								<div className="flex flex-col gap-1 w-full sm:w-[48%]">
									<label className="text-sm text-[#555555]">
										{PHONE.label}
									</label>
									<div className="flex gap-2 relative w-full">
										<div
											className="flex flex-col gap-1"
											ref={countryDropdownRef}
										>
											<div
												className="flex items-center gap-2 px-3 py-3 h-12 cursor-pointer rounded-lg border border-[#2727271A]"
												onClick={countryDropdown}
											>
												<div className="flex items-center">
													<span className="text-[#AAAAAA] text-sm">
														{dialCode}
													</span>
												</div>

												<Image
													src={ARROW}
													width={1000}
													height={1000}
													alt="arrow"
													quality={100}
													className="w-4 h-4"
												/>
											</div>
											{isCountryCodeOpen && (
												<div className="absolute border bg-[#FFFFFF] rounded-lg w-[] xs:h-[370px] p-3 top-12 z-10">
													<div className="max-h-80 overflow-y-auto">
														{countries.map(
															(
																country,
																index
															) => (
																<div
																	key={index}
																	className="flex items-center justify-between gap-2 p-2 cursor-pointer hover:bg-[#A020F00D]"
																	onClick={() =>
																		handleOptionClick(
																			country
																		)
																	}
																>
																	<span className="text-sm">
																		{
																			country.code
																		}
																	</span>
																	<span className="text-sm">
																		{
																			country.name
																		}
																	</span>
																</div>
															)
														)}
													</div>
												</div>
											)}
										</div>
										<div className="flex-1">
											<input
												type={PHONE.type}
												placeholder={PHONE.placeholder}
												value={phoneNumber}
												onChange={
													handlePhoneNumberChange
												}
												name={PHONE.name}
												className="px-4 py-3 w-full rounded-lg border border-[#2222221A] placeholder:text-[#AAAAAA] placeholder:text-sm focus:outline-none"
											/>
										</div>
									</div>
									{errors[PHONE.name] && (
										<span className="text-red-500 text-xs">
											{errors[PHONE.name]}
										</span>
									)}
								</div>
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
								<DropDown
									item={GENDER}
									onSelect={(value) =>
										handleSelectChange(GENDER.name, value)
									}
									reset={resetDropdowns}
								/>
								<DropDown
									item={UPDATED_STATE}
									onSelect={(value) =>
										handleSelectChange(
											UPDATED_STATE.name,
											value
										)
									}
									reset={resetDropdowns}
								/>
								{errors[UPDATED_COUNTRY.name] && (
									<span className="text-red-500 text-xs">
										{errors[UPDATED_COUNTRY.name]}
									</span>
								)}
								{errors[UPDATED_STATE.name] && (
									<span className="text-red-500 text-xs">
										{errors[UPDATED_STATE.name]}
									</span>
								)}
								{errors[GENDER.name] && (
									<span className="text-red-500 text-xs">
										{errors[GENDER.name]}
									</span>
								)}
								{PASSWORD.map((field, index) => (
									<div
										key={index}
										className="flex flex-col w-full sm:w-[48%] gap-1"
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
										{errors[field.name] && (
											<span className="text-red-500 text-xs">
												{errors[field.name]}
											</span>
										)}
										<div>
											<p className="text-[#222222] text-xs">
												{field.requirements
													.split("\n")
													.map((line, i) => (
														<React.Fragment key={i}>
															{line}
															<br className="sm:block hidden" />
														</React.Fragment>
													))}
											</p>
										</div>
									</div>
								))}
							</div>
							<div>
								{showPrivacyError && (
									<p className="text-red-500 text-xs mb-2">
										Please read terms of service and privacy
										policy
									</p>
								)}
								<div className="flex gap-2.5 ">
									<input
										type={CHECKBOX.type}
										id={CHECKBOX.type}
										checked={checkboxChecked}
										onChange={handleCheckboxChange}
										// disabled={!termsRead || !policyRead}
										className="w-5 h-5 relative shrink-0 border border-[#222222BF] rounded-[3.2px] appearance-none focus:outline-none 
									checked:bg-[#A020F0] checked:border-[#A020F0] after:content-[''] after:bg-[length:40px] after:absolute after:left-0 
									after:top-0 after:h-full after:w-full after:bg-center after:bg-no-repeat after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')]"
									/>
									<label
										htmlFor={CHECKBOX.type}
										className="text-[#222222BF] text-[13px] leading-[17px]"
									>
										{CHECKBOX.text1}
										<span
											onClick={() => {
												toggleTermsofServiceModal();
												handleTermsClick();
											}}
											className="underline cursor-pointer"
										>
											{CHECKBOX.termsofuse}
										</span>
										{CHECKBOX.text2}
										<span
											onClick={() => {
												togglePrivacyPolicyModal();
												handlePrivacyPolicyClick();
											}}
											className="underline cursor-pointer"
										>
											{CHECKBOX.privacypolicy}
										</span>
										{CHECKBOX.period}
									</label>
								</div>
							</div>
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
			{showTermsofServiceModal && (
				<TermsOfServiceModal onClose={toggleTermsofServiceModal} />
			)}
			{showPrivacyPolicyModal && (
				<PrivacyPolicy onClose={togglePrivacyPolicyModal} />
			)}
		</div>
	);
};

export default SignUp;
