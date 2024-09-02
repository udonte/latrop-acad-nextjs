"use client";
import React, { useEffect, useRef } from "react";

const VideoModal = ({ isOpen, onClose }) => {
	const modalRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
			<div
				ref={modalRef}
				className="relativerounded-lg overflow-hidden w-[60%]"
			>
				<div className="relative aspect-video">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/14laHugBRtA"
						title="Video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default VideoModal;
