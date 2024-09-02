// Assuming this file is named BlogCard.js and located in the components directory
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdMoreVert, MdStar } from "react-icons/md"; // Ensure react-icons is installed
import { useRouter } from "next/navigation";
import DeleteBlog from "../DeleteBlog";

const BlogCard = ({ blog }) => {
  const router = useRouter();
  const [showDropDown, setShowDropDown] = useState(false);
  const [makeFeatured, setMakeFeatured] = useState(false);
  const [DeleteBlogModal, setDeleteBlogModal] = useState(false);
  const closeDeleteBlog = () => setDeleteBlogModal(false);

  return (
    <div className="w-full overflow-hidden hover:border-b hover:border-[#A020F0]/30 p-1 mb-6 transition-all">
      <div className="overflow-hidden rounded-t-xl relative">
        {makeFeatured && (
          <MdStar
            size={30}
            className="absolute left-[5px] top-[15px] text-[#FFDE32]"
          />
        )}
        <MdMoreVert
          size={25}
          className="cursor-pointer absolute right-[5px] top-[15px] text-white"
          onClick={() => setShowDropDown((prev) => !prev)}
        />
        {showDropDown && (
          <div
            onMouseLeave={() => setShowDropDown(false)}
            className="absolute z-50 right-[5px] top-[35px] text-deskit-blue-300 w-fit min-w-max border rounded-xl overflow-hidden bg-white shadow-lg"
          >
            <div className="px-3 py-3 gap-x-3 w-full min-w-max text-sm hover:bg-gray-100 cursor-pointer border-b border-gray-100">
              <p
                className="text-left"
                onClick={() => router.push("/resources/blog/0")}
              >
                View Blog Post
              </p>
            </div>
            <div className="px-3 py-3 gap-x-3 w-full min-w-max text-sm hover:bg-gray-100 cursor-pointer border-b border-gray-100">
              <p
                className="text-left"
                onClick={() => setMakeFeatured((prev) => !prev)}
              >
                {makeFeatured ? "Unfeature" : "Make Featured"}
              </p>
            </div>
            <div
              className="px-3 py-3 gap-x-3 w-full min-w-max text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => setDeleteBlogModal(true)}
            >
              <p className="text-left">Delete Post</p>
            </div>
          </div>
        )}
        <div className="cursor-pointer">
          <Image
            src={"/assets/admin/ai.png"}
            width={1000}
            height={1000}
            alt="Blog Image"
            quality={100}
          />
        </div>
      </div>
      <p className="font-bold py-2 hover:underline cursor-pointer">
        {blog.title}
      </p>
      <div className="text-[#222222BF] text-sm">
        {blog.description}
        <p className="font-medium">{blog.date}</p>
      </div>

      <div className="py-1">
        <button
          className="border-[1.5px] w-[fit] buttons bg-[#A020F0] rounded-[5px] py-2 px-4 text-[#ffffff] text-[15px] leading-[20px] font-medium"
          onClick={() => router.push("/admin/blog/edit")}
        >
          Edit Blog
        </button>
      </div>

      <DeleteBlog isOpen={DeleteBlogModal} onClose={closeDeleteBlog} />
    </div>
  );
};

export default BlogCard;
