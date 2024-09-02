// CourseDetails.js

import Image from "next/image";
import React from "react";
import { courseDetails } from "./constants";

const CourseDetails = () => {
  return (
    <div className="">
      <div className="w-full rounded-xl bg-[#FFD43A]/10 p-4 md:p-8 min-h-[850px]">
        <div className="mb-8">
          <p className="text-xl font-semibold mb-2">{courseDetails.title}</p>
          <p>{courseDetails.description}</p>
        </div>
        <div className="space-y-4">
          {/* payment options */}
          <div className="mb-4">
            <div className="flex items-center gap-3 font-semibold mb-4">
              Payment Options
            </div>
            {courseDetails.paymentOptions.map((option, index) => (
              <div key={index} className="flex items-center gap-3 mb-2">
                <Image
                  src="/assets/learning_path/checkmark.svg"
                  alt="checkmark"
                  width={15}
                  height={15}
                />
                <div className="flex items-center gap-3">{option}</div>
              </div>
            ))}
          </div>

          {/* course duration */}
          <div className="mb-4">
            <div className="flex items-center gap-3 font-semibold mb-4">
              Course Duration
            </div>
            <div className="mb-2">{courseDetails.courseDuration.duration}</div>
            {courseDetails.courseDuration.details.map((detail, index) => (
              <div key={index} className="flex items-center gap-3 mb-2">
                <Image
                  src="/assets/learning_path/checkmark.svg"
                  alt="checkmark"
                  width={15}
                  height={15}
                />
                <div className="flex items-center gap-3">{detail}</div>
              </div>
            ))}
          </div>

          {/* time commitment */}
          <div className="mb-4">
            <div className="flex items-center gap-3 font-semibold mb-4">
              Time Commitment
            </div>
            <div className="mb-2">{courseDetails.timeCommitment}</div>
          </div>

          {/* location */}
          <div className="mb-4">
            <div className="flex items-center gap-3 font-semibold mb-4">
              Location
            </div>
            <div className="mb-2">{courseDetails.location}</div>
          </div>

          {/* eligibility */}
          <div className="mb-4">
            <div className="flex items-center gap-3 font-semibold mb-4">
              Eligibility
            </div>
            {courseDetails.eligibility.map((criteria, index) => (
              <div key={index} className="flex items-center gap-3 mb-2">
                <Image
                  src="/assets/learning_path/checkmark.svg"
                  alt="checkmark"
                  width={15}
                  height={15}
                />
                <div className="flex items-center gap-3 mb-2">{criteria}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
