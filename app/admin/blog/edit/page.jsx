import React from "react";
import EditBlog from "./EditBlog";

const page = () => {
  return (
    <div
      className="p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen py-10 bg-gray-100 bg-center"
      style={{
        backgroundImage: "url('/assets/lms/lmsbg.svg')",
        backgroundSize: "cover",
      }}
    >
      <EditBlog />
    </div>
  );
};

export default page;
