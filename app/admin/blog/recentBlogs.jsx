"use client";

import React, { useState } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import BlogCard from "./components/BlogCard";
import DeleteBlog from "./DeleteBlog";
import { mockBlogs } from "./constants";

const RecentBlogs = () => {
  const [DeleteBlogModal, setDeleteBlogModal] = useState(false);
  const closeDeleteBlog = () => setDeleteBlogModal(false);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;
  const totalPages = Math.ceil(mockBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Filter blogs for the current page
  const currentBlogs = mockBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen py-10 bg-gray-100">
      <div className="font-bold text-xl">
        <p>Recent Blogs</p>
      </div>
      {/* Render BlogCards for currentBlogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {currentBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            setDeleteBlogModal={setDeleteBlogModal}
          />
        ))}
      </div>

      {/* Pagination Component */}
      <div className="flex items-center justify-between mt-16">
        {/* Previous Button */}
        <div
          className={`flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-xl ${
            currentPage <= 1 ? "cursor-not-allowed text-gray-400" : ""
          }`}
          onClick={() => paginate(currentPage - 1)}
        >
          <CgChevronLeft />
          <p>Previous</p>
        </div>

        {/* Page Numbers */}
        <div className="flex items-center gap-2">
          {[...Array(totalPages).keys()].map((number) => (
            <div
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`p-2 rounded h-fit w-[40px] text-center cursor-pointer hover:bg-[#A020F0] hover:text-white ${
                currentPage === number + 1
                  ? "bg-[#A020F0] text-white"
                  : "bg-white text-black"
              }`}
            >
              {number + 1}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div
          className={`flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-xl ${
            currentPage >= totalPages ? "cursor-not-allowed text-gray-400" : ""
          }`}
          onClick={() => paginate(currentPage + 1)}
        >
          <p>Next</p>
          <CgChevronRight />
        </div>
      </div>
      <DeleteBlog isOpen={DeleteBlogModal} onClose={closeDeleteBlog} />
    </div>
  );
};

export default RecentBlogs;
