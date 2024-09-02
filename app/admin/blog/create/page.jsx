import React from "react";
import CreateBlog from "./CreateBlog";

const page = () => {
  return (
    <div
      className="p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen py-10 bg-gray-100 bg-center"
      style={{
        backgroundImage: "url('/assets/lms/lmsbg.svg')",
        backgroundSize: "cover",
      }}
    >
      <CreateBlog />
    </div>
  );
};

export default page;