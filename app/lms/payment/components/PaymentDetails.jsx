"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PAYMENT_TEXT } from "../constants";
import EnrollPopUp from "../../enroll/components/EnrollPopUp";
import PaymentPlan from "../../enroll/components/PaymentPlan";
import { FiClipboard } from "react-icons/fi";

const PaymentDetails = () => {
	const router = useRouter();

	const [isEnrollOpen, setIsEnrollOpen] = useState(false);
	const [isPaymentOpen, setIsPaymentOpen] = useState(false);


	const handleNext = () => {
		setIsEnrollOpen(false);
		setIsPaymentOpen(true);
	};

	const handleBack = () => {
		setIsPaymentOpen(false);
		setIsEnrollOpen(true);
	};

	const closeModal = () => {
		setIsEnrollOpen(false);
		setIsPaymentOpen(false);
	};
	const handleClick = () => {
		setIsEnrollOpen(true);
	};

	const handleCopy = (text) => {
	  navigator.clipboard.writeText(text);
	  alert("Copied to clipboard!");
	};

	return (
		<div
			className="min-h-screen py-10 bg-gray-100 bg-center"
			style={{
				backgroundImage: "url('/assets/lms/lmsbg.svg')",
				backgroundSize: "cover",
			}}
		>
			<div className="px-[3%] mx-auto">
				{/* Breadcrumb */}
				<button
					className="text-[#A020F0] flex items-center mb-4 -mt-4 font-medium"
					onClick={() => router.push("/lms/payment")}
				>
					<span className="mr-2">&lt;</span> {PAYMENT_TEXT.breadcrumb}
				</button>

				{/* Payment Details Card */}
				<div className="bg-white rounded-2xl p-6">
					<h1 className="text-xl font-semibold mb-2 mt-4">
						{PAYMENT_TEXT.title}
					</h1>
					<p className="text-sm font-medium text-[#222222BF] mb-4">
						{PAYMENT_TEXT.instructions}
					</p>

					{/* Paystack Section */}
					<div className="flex justify-between items-center mb-4">
						<div className="flex items-center">
							<img
								src="/assets/lms/Paystack 1.svg"
								alt="Paystack"
								className="w-6 h-6 mr-3 -mt-4"
							/>
							<div>
								<p className="font-bold text-lg">
									{PAYMENT_TEXT.paymentMethods[0].method}
								</p>
								<p className="text-sm text-[#222222BF] font-medium">
									{PAYMENT_TEXT.paymentMethods[0].description}
								</p>
							</div>
						</div>
						<button
							onClick={handleClick}
							className="bg-[#A020F0] text-white px-6 py-3 rounded-md lg:w-auto border-[1.5px] buttons text-[14px] leading-[25px]"
						>
							{PAYMENT_TEXT.paymentMethods[0].buttonLabel}
						</button>
					</div>

					<hr className="my-6" />

					{/*Local Transfers Section*/}
					<div className="flex justify-between items-center mb-6 mt-10">
            <div>
              <p className="font-bold">
                {PAYMENT_TEXT.paymentMethods[1].sectionTitle}
              </p>
              <p className="text-sm text-gray-500">
                Bank Name: {PAYMENT_TEXT.paymentMethods[1].bankName}
              </p>
              <p className="text-sm text-gray-500">
                Account Name: {PAYMENT_TEXT.paymentMethods[1].accountName}
              </p>
              <div className="flex items-center">
                <p className="text-sm text-gray-500 mr-2">
                  Account Number: {PAYMENT_TEXT.paymentMethods[1].accountNumber}
                </p>
                <button
                  onClick={() =>
                    handleCopy(PAYMENT_TEXT.paymentMethods[1].accountNumber)
                  }
                >
                  <FiClipboard className="text-gray-500" />
                </button>
              </div>
            </div>
            {/* <button className="bg-[#A020F0] text-white px-8 py-3 rounded-md lg:w-auto border-[1.5px] buttons text-[14px] leading-[25px]">
              {PAYMENT_TEXT.paymentMethods[1].buttonLabel}
            </button> */}
          </div>

					{/* <hr className="my-6" /> */}

					{/* Foreign Transfers Section */}
					{/* <div className="flex justify-between items-center mt-10">
            <div>
              <p className="font-bold">
                {PAYMENT_TEXT.paymentMethods[2].sectionTitle}
              </p>
              <p className="text-sm text-gray-500">
                Bank Name: {PAYMENT_TEXT.paymentMethods[2].bankName}
              </p>
              <p className="text-sm text-gray-500">
                Account Name: {PAYMENT_TEXT.paymentMethods[2].accountName}
              </p>
              <div className="flex items-center">
                <p className="text-sm text-gray-500 mr-2">
                  Account Number: {PAYMENT_TEXT.paymentMethods[2].accountNumber}
                </p>
                <button
                  onClick={() =>
                    handleCopy(PAYMENT_TEXT.paymentMethods[2].accountNumber)
                  }
                >
                  <FiClipboard className="text-gray-500" />
                </button>
              </div>
              <div className="flex items-center mb-10">
                <p className="text-sm text-gray-500 mr-2">
                  ACH Routing Code: {PAYMENT_TEXT.paymentMethods[2].routingCode}
                </p>
                <button
                  onClick={() =>
                    handleCopy(PAYMENT_TEXT.paymentMethods[2].routingCode)
                  }
                >
                  <FiClipboard className="text-gray-500" />
                </button>
              </div>
            </div>
            <button className="bg-[#A020F0] text-white px-8 py-3 rounded-md lg:w-auto border-[1.5px] buttons text-[14px] leading-[25px]">
              {PAYMENT_TEXT.paymentMethods[2].buttonLabel}
            </button>
          </div> */}
				</div>
			</div>
			{isEnrollOpen && (
				<EnrollPopUp
					isOpen={isEnrollOpen}
					onClose={closeModal}
					onNext={handleNext}
				/>
			)}
			{isPaymentOpen && (
				<PaymentPlan onClose={closeModal} onBack={handleBack} />
			)}
		</div>
	);
};

export default PaymentDetails;