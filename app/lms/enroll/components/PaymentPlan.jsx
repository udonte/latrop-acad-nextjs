"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
	BACKARROW,
	BUTTON,
	HEADING,
	PAYMENT,
	SUBTEXT,
} from "@/app/enroll/paymentplan/constants";
import { UPLOADPOPUP } from "../../myinfo/constants";

const PaymentPlan = ({ onClose, onBack }) => {
	const router = useRouter();
	const [selectedPlan, setSelectedPlan] = useState(null);
	const [alert, setAlert] = useState(null);

	const handleSelectPlan = (plan) => {
		setSelectedPlan(plan);
		setAlert(null);
	};

	const handleSubmit = () => {
		if (selectedPlan) {
			console.log(selectedPlan);
			router.push("/lms/mycourses");
		} else {
			setAlert("Please select a payment plan");
		}
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="flex gap-6 flex-col w-[90%] sm:w-[588px] relative">
				<div className="flex flex-col gap-6 border border-[#2222221A] py-10 px-4 sm:px-10 rounded-2xl bg-white">
					<div className="flex justify-between">
						<Image
							src={BACKARROW}
							onClick={onBack}
							width={1000}
							height={1000}
							alt="Back"
							className="w-6 h-6 cursor-pointer"
						/>
						<div className="text-center text-[#222222]">
							<p className="text-[20px] font-bold">{HEADING}</p>
							<p>{SUBTEXT}</p>
						</div>
						<Image
							src={UPLOADPOPUP.close}
							onClick={onClose}
							width={1000}
							height={1000}
							alt="Close"
							className="w-5 h-5 cursor-pointer"
						/>
						<p></p>
					</div>
					<div className="flex flex-col gap-10">
						<div className="flex gap-4 flex-col md:flex-row items-center justify-center">
							{PAYMENT.map((item, index) => (
								<div
									key={index}
									onClick={() => handleSelectPlan(item.type)}
									className={`px-[45px] text-center hover:bg-[#a020f010] cursor-pointer py-10 w-[240px] md:w-auto flex flex-col gap-2.5 border border-[#2222221A] rounded-2xl ${
										selectedPlan === item.type
											? "bg-[#a020f010]"
											: ""
									}`}
								>
									<p className="font-semibold text-[16px] leading-[21px] text-[#222222D9]">
										{item.type}
									</p>
									<div className="text-center flex flex-col gap-1">
										<p className="font-bold text-[26px] leading-[34px] text-[#222222]">
											{item.price}
										</p>
										<p className="font-normal text-[15px] leading-[20px] text-[#222222A6]">
											{item.duration}
										</p>
									</div>
								</div>
							))}
						</div>
						<div className="flex flex-col gap-1">
							{alert && <p className="text-red-600">{alert}</p>}
							<button
								onClick={handleSubmit}
								className="border-[1.5px] buttons bg-[#A020F0] w-full rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
							>
								{BUTTON.text}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentPlan;
