"use client";

import Modal from "@/app/components/Modal/Modal";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const AddImage = ({ isOpen, onClose, onImageUpload }) => {
  const [dragging, setDragging] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const [uploading, setUploading] = useState(false);

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    preventDefaults(e);
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    preventDefaults(e);
    setDragging(false);
  };

  const handleDrop = (e) => {
    preventDefaults(e);
    setDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith("image/")) {
      handleFileRead(files[0]);
    } else {
      alert("Please drop a valid image file.");
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFileRead(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleFileRead = (file) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result); // Set the image preview
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (imageFile) {
      setUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setUploading(false);
        onImageUpload(imageFile);
        onClose();
        setImageFile(null);
        setImagePreview(null);
      }, 1000);
    } else {
      alert("Please select an image");
    }
  };

  const handleCancel = () => {
    onClose();
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Add Image"
      width="sm"
      position="center"
      onClose={handleCancel}
      showHeader={true}
      showCloseIcon={true}
    >
      <div className="min-h-[300px]">
        <p className="text-xs">Upload an image to add to your blog post</p>
        <div
          className={`w-full mt-4 min-h-[200px] ${
            dragging
              ? "bg-[#A020F0]/10 border-[#A020F0]"
              : "bg-[#A020F0]/5 border-[#222222]/30"
          } border border-dashed rounded text-[#222222]/75 flex flex-col items-center justify-center`}
          onDragEnter={handleDragEnter}
          onDragOver={preventDefaults}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {imagePreview && !uploading && (
            <div className="flex flex-col items-center justify-center px-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-[200px] h-[150px] object-cover rounded mb-2"
              />
              <p className="text-xs font-bold text-center text-[#A020F0]">
                {imageFile.name}
              </p>
            </div>
          )}
          {!imagePreview && !uploading && (
            <div
              className="text-sm text-center w-[70%] mt-4 cursor-pointer"
              onClick={() => document.getElementById("image-input").click()}
            >
              <button aria-label="Upload image">
                <FiUpload size={25} className="text-[#222222]/50" />
              </button>
              <p>
                Drag and drop photo here or click to upload from folder. File
                must be jpg or png.
              </p>
              <input
                id="image-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileSelect}
              />
            </div>
          )}
          {uploading && (
            <div className="mt-4 flex items-center justify-center text-[#A020F0] text-lg">
              <p className="text-lg">Uploading...</p>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            className="border-[1.5px] w-full buttons rounded-[5px] py-4 px-6 border-[#A020F026] text-[#A020F0] text-[15px] leading-[20px] font-medium"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="border-[1.5px] w-full buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
            onClick={handleUpload}
          >
            Add Image
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddImage;
