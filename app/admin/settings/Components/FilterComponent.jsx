// FilterComponent.js
import React from "react";
import CustomDropdown from "@/app/components/CustomDropdown";
import CustomInput from "@/app/components/CustomInput";

const FilterComponent = ({
  courseOptions,
  filteredCourse,
  setFilteredCourse,
  filteredDate,
  setFilteredDate,
}) => {
  const handleSelect = (name, value) => {
    if (name === "course") {
      setFilteredCourse(value);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "date") {
      setFilteredDate(e.target.value);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-start gap-2">
        <div className="w-full">
          <p>Course</p>
          <CustomDropdown
            size={"smd"}
            inputClasses={"w-full"}
            name="course"
            placeHolder={"Select Course"}
            options={courseOptions}
            onSelect={handleSelect}
          />
        </div>
        <div className="w-full">
          <p>Date</p>
          <CustomInput
            type={"date"}
            size={"medium"}
            inputClassName={"w-full"}
            placeholder={"Select Date"}
            name="date"
            value={filteredDate}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
