const CustomInput = ({
  inputRef,
  disabled,
  name,
  value,
  handleInputChange, // Ensure this prop is passed correctly
  type,
  label,
  className,
  inputClassName,
  placeholder,
  size, // New size prop
  icon, // New icon prop
  onLabelClick, // New onLabelClick prop
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "p-1 min-h-6";
      case "medium":
        return "p-3 min-h-14";
      case "large":
        return "p-4 min-h-16";
      default:
        return "p-3 min-h-14"; // Default size
    }
  };

  const sizeClasses = getSizeClasses();

  if (type === "textarea") {
    return (
      <div>
        <label htmlFor={name} className="font-light">
          {label}
        </label>
        <textarea
          onChange={(e) => handleInputChange(e)} // Use the passed function here
          className={`w-full outline-0 bg-white border-2 border-gray-200 rounded-xl placeholder:font-light placeholder:text-deskit-gray-400 placeholder:text-sm ${sizeClasses} ${inputClassName}`}
          name={name}
          value={value}
          rows="4"
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  } else {
    return (
      <div className={`${className}`}>
        <div className="flex item gap-2 items-center text-[#222222]">
          <label
            htmlFor={name}
            className="font-bold text-[#222222] dark:text-white"
          >
            {label}
          </label>
          {icon && (
            <span onClick={onLabelClick} className="cursor-pointer">
              {icon}
            </span>
          )}
        </div>
        <input
          ref={inputRef}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full border-2 text-[#222222] border-gray-200 outline-none bg-white placeholder:text-[#222222]/50 rounded-xl placeholder:text-sm text-sm placeholder:font-light dark:bg-deskit-black-100 px-2 dark:text-white ${sizeClasses} ${inputClassName}`}
          type={type}
          value={value}
          name={name}
          onChange={(e) => handleInputChange(e)} // Use the passed function here
          style={{
            color: "#222222",
          }}
        />
      </div>
    );
  }
};

export default CustomInput;
