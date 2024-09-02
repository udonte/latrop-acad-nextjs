"use client";

import Modal from "@/app/components/Modal/Modal";
import React, { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";

function AddVideo({ isOpen, onClose, onVideoUpload }) {
  const [dragging, setDragging] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null); // State for video preview
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (videoFile) {
      const objectUrl = URL.createObjectURL(videoFile);
      setVideoPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl); // Cleanup on unmount
    }
  }, [videoFile]);

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
    if (files.length > 0 && files[0].type.startsWith("video/")) {
      handleFileRead(files[0]);
    } else {
      alert("Please drop a valid video file.");
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      handleFileRead(file);
    } else {
      alert("Please select a valid video file.");
    }
  };

  const handleFileRead = (file) => {
    setVideoFile(file);
  };

  const handleUpload = () => {
    if (videoFile) {
      setUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setUploading(false);
        onVideoUpload(videoFile);
        onClose();
        setVideoFile(null);
        setVideoPreview(null);
      }, 1000);
    } else {
      alert("Please select a video");
    }
  };

  const handleCancel = () => {
    onClose();
    setVideoFile(null);
    setVideoPreview(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Add Video"
      width="sm"
      position="center"
      onClose={handleCancel}
      showHeader={true}
      showCloseIcon={true}
    >
      <div className="min-h-[300px]">
        <p className="text-xs">Upload a video to add to your blog post</p>
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
          {videoPreview && !uploading && (
            <div className="flex flex-col items-center justify-center px-4">
              <div className="rounded-md overflow-hidden">
                <video
                  src={videoPreview}
                  controls
                  className="w-full h-auto max-w-[200px] max-h-[150px] mb-2"
                />
              </div>
              <p className="text-xs font-bold text-center text-[#A020F0]">
                {videoFile.name}
              </p>
            </div>
          )}
          {!videoPreview && !uploading && (
            <div
              className="text-sm text-center w-[70%] mt-4 cursor-pointer"
              onClick={() => document.getElementById("video-input").click()}
            >
              <button aria-label="Upload video">
                <FiUpload size={25} className="text-[#222222]/50" />
              </button>
              <p>Drag and drop video here or click to upload from folder.</p>
              <input
                id="video-input"
                type="file"
                accept="video/*"
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
            Add Video
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AddVideo;
