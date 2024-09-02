"use client";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import { MdImage, MdOutlineOndemandVideo } from "react-icons/md";
import AddImage from "./components/AddImage";
import AddVideo from "./components/AddVideo";
import PublishedModal from "./components/PublishedModal";
import { useRouter } from "next/navigation";

const EditBlog = () => {
  const router = useRouter();
  const [showDropDown, setShowDropDown] = useState(false);
  const [addImageModal, setAddImageModal] = useState(false);
  const [addVideoModal, setAddVideoModal] = useState(false);
  const [publishedModal, setPublishedModal] = useState(false);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);

  const closeVideoModal = () => setAddVideoModal(false);
  const closeImageModal = () => setAddImageModal(false);
  const closePublishedModal = () => setPublishedModal(false);

  const handleVideoUpload = (file) => {
    setVideo(file);
    console.log("Video file selected:", file.name);
  };

  const handleImageUpload = (file) => {
    setImage(file);
    console.log("Image file selected:", file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Blog Post:", {
      title,
      subtitle,
      content,
      image,
      video,
    });
    setTitle("");
    setSubtitle("");
    setContent("");
    setImage(null);
    setVideo(null);
    setPublishedModal(true);
    setTimeout(() => {
      setPublishedModal(false);
    }, 5000);
    router.push("/admin/blog");
  };

  return (
    <div>
      <div className="cursor-pointer text-[#222222]/75 ">
        <span
          className="text-[#A020F0] font-bold"
          onClick={() => router.push("/admin/blog")}
        >
          Go Back
        </span>
        <span className="text-[#222222]/75"> /Blog Post</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-8 flex items-start gap-4">
          <div>
            <p
              className="h-[48px] w-[48px] flex items-center justify-center bg-gray-200 rounded-full border border-gray-300 cursor-pointer mb-2"
              onClick={() => setShowDropDown((prev) => !prev)}
            >
              {showDropDown ? <CgClose size={22} /> : <FiPlus size={22} />}
            </p>
            {showDropDown && (
              <div className="flex flex-col gap-2">
                <p
                  className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-[#A020F0]/20 cursor-pointer"
                  onClick={() => setAddImageModal(true)}
                >
                  <MdImage size={22} className="text-[#A020F0]" />
                </p>
                <p
                  className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-[#34C759]/20 cursor-pointer"
                  onClick={() => setAddVideoModal(true)}
                >
                  <MdOutlineOndemandVideo
                    size={22}
                    className="text-[#34C759]"
                  />
                </p>
              </div>
            )}
          </div>

          <div className="w-full flex flex-col items-start">
            <div className="w-full flex flex-col-reverse lg:flex-row items-start">
              <div className="w-full lg:w-[75%]">
                <div className="w-full mb-4">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add Title"
                    className="w-full border-b-2 border-gray-200 outline-none py-2 bg-transparent placeholder:text-deskit-gray-400 placeholder:text-3xl text-3xl placeholder:font-bold font-bold"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Add a subtitle.."
                    className="w-full border-b-2 border-gray-200 outline-none py-2 bg-transparent placeholder:text-deskit-gray-400 placeholder:text-base text-base"
                  />
                </div>
              </div>
              <div className="ml-auto">
                <button
                  type="submit"
                  className="ml-auto border-[1.5px] w-[fit] buttons bg-[#A020F0] rounded-[5px] py-4 px-8 text-[#ffffff] text-[15px] leading-[20px] font-medium "
                >
                  Publish
                </button>
              </div>
            </div>
            <div className="w-full mt-8">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className={`w-full outline-0 bg-white border-2 border-gray-200 rounded-xl placeholder:font-light placeholder:text-deskit-gray-400 placeholder:text-sm px-4 py-4`}
                rows="30"
                placeholder={"Start typing.."}
              ></textarea>
            </div>
          </div>
        </div>
      </form>

      <AddImage
        isOpen={addImageModal}
        onClose={closeImageModal}
        onImageUpload={handleImageUpload}
      />
      <AddVideo
        isOpen={addVideoModal}
        onClose={closeVideoModal}
        onVideoUpload={handleVideoUpload}
      />

      <PublishedModal isOpen={publishedModal} onClose={closePublishedModal} />
    </div>
  );
};

export default EditBlog;
