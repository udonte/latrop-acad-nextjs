import React from "react";

const ToggleButton = ({
  name,
  onToggle,
  isToggled = false,
  size = "sm",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    xs: "h-4 w-8",
    sm: "h-6 w-12",
    md: "h-8 w-16",
    lg: "h-10 w-20",
  };

  const circleSizeClasses = {
    xs: "h-2 w-2",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  const translateClasses = {
    xs: "translate-x-4",
    sm: "translate-x-6",
    md: "translate-x-8",
    lg: "translate-x-10",
  };

  return (
    <label
      className={`relative inline-block ${
        sizeClasses[size]
      } cursor-pointer rounded-full transition-colors border-2 ${
        isToggled
          ? "bg-[#A020F0]/10 border-[#A020F0]"
          : "bg-gray-200 border-gray-300"
      } ${className}`}
    >
      <input
        type="checkbox"
        name={name}
        checked={isToggled}
        onChange={onToggle}
        className="peer sr-only"
        {...props}
      />
      <span
        className={`absolute top-[2px] left-1 ${
          circleSizeClasses[size]
        } rounded-full transition-transform ${
          isToggled ? `${translateClasses[size]} bg-[#A020F0]` : "bg-gray-400"
        }`}
      ></span>
    </label>
  );
};

export default ToggleButton;
