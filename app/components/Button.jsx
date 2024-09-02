import React from "react";

const Button = ({
  type = "button",
  size = "md",
  children,
  variant = "primary",
  onClick,
  disabled = false,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md focus:outline-none transition  ";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-2 py-4 text-sm",
    lg: "px-8 py-5.5 text-base",
  };

  const variants = {
    primary:
      "border-[1.5px] buttons bg-[#A020F0] rounded-[5px] text-[#ffffff] text-[15px] leading-[20px] font-medium ",
    secondary:
      "      border-[1.5px] buttons rounded-[5px] border-[#A020F026] text-[#A020F0] text-[15px] leading-[20px] font-medium",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${
    variants[variant]
  }  ${fullWidth ? "w-full" : ""} ${className}`;

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
