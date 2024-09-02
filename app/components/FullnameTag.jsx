import React from "react";

const FullnameTag = ({
  firstName = "",
  lastName = "",
  size,
  className,
  textClassName,
  designation,
}) => {
  const sizes = {
    xl: "h-[60px] w-[60px] text-2xl",
    lg: "h-8 w-8 text-lg",
    sm: "h-6 w-6",
  };

  const setSize = sizes[size] || sizes.lg;

  return (
    <div className="flex gap-x-2 items-center">
      <div
        className={`${setSize} ${className} rounded-full bg-gray-400 font-bold  flex items-center justify-center text-black`}
      >
        <h1 className={`uppercase`}>
          {firstName && firstName[0]}
          {lastName && lastName[0]}
        </h1>
      </div>
      <div className="text-left truncate leading-5">
        <p
          className={`${textClassName} capitalize font-semibold`}
        >{`${firstName} ${lastName}`}</p>
        <p className="text-[12px]">{designation}</p>
      </div>
    </div>
  );
};

export default FullnameTag;
