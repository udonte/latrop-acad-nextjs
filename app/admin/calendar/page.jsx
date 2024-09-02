import React from "react";
import AdminCalendar from "./components/AdminCalendar";

export const metadata = {
	title: "Calendar - Admin Portal - Gurugeeks Academy",
};

const page = () => {
  return (
    <div
      className="p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen py-10 bg-gray-100 bg-center"
      style={{
        backgroundImage: "url('/assets/lms/lmsbg.svg')",
        backgroundSize: "cover",
      }}
    >
      <AdminCalendar />
    </div>
  );
};

export default page;
