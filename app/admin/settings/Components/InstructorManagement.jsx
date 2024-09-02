"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { MdMoreVert, MdOutlineClose } from "react-icons/md";
import FilterComponent from "./FilterComponent";
import InstructorDelete from "./InstructorDelete";
import InstructorDetails from "./InstructorDetails";
import CustomCheckbox from "@/app/components/CustomCheckbox";

const InstructorManagement = () => {
  const [rememberMe, setRememberMe] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  // DETAILS MODAL
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const closeDetailsModal = () => setDetailsModalOpen((prev) => !prev);

  // DELETE MODAL
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const closeDeleteModal = () => setDeleteModalOpen((prev) => !prev);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filteredCourse, setFilteredCourse] = useState("");
  const [filteredDate, setFilteredDate] = useState("");
  const studentsPerPage = 10;

  // Define the students array with 30 students
  const students = [
    {
      id: 1,
      name: "Amaka Eze",
      course: "Frontend Engineering",
      email: "amaka.eze@gmail.com",
      phone: "+2348123456789",
      dateCreated: "2024-08-01",
    },
    {
      id: 2,
      name: "Chinedu Okeke",
      course: "Backend Development",
      email: "chinedu.okeke@yahoo.com",
      phone: "+2348023456789",
      dateCreated: "2024-08-02",
    },
    {
      id: 3,
      name: "Fatima Bello",
      course: "Data Science",
      email: "fatima.bello@hotmail.com",
      phone: "+2348134567890",
      dateCreated: "2024-08-03",
    },
    {
      id: 4,
      name: "Ifeanyi Nwosu",
      course: "Cyber Security",
      email: "ifeanyi.nwosu@outlook.com",
      phone: "+2348145678901",
      dateCreated: "2024-08-04",
    },
    {
      id: 5,
      name: "Zainab Lawal",
      course: "Mobile Development",
      email: "zainab.lawal@gmail.com",
      phone: "+2348156789012",
      dateCreated: "2024-08-05",
    },
    {
      id: 6,
      name: "Musa Abdullahi",
      course: "Cloud Computing",
      email: "musa.abdullahi@yahoo.com",
      phone: "+2348167890123",
      dateCreated: "2024-08-06",
    },
    {
      id: 7,
      name: "Ngozi Obi",
      course: "DevOps",
      email: "ngozi.obi@hotmail.com",
      phone: "+2348178901234",
      dateCreated: "2024-08-07",
    },
    {
      id: 8,
      name: "Bashir Usman",
      course: "AI and Machine Learning",
      email: "bashir.usman@outlook.com",
      phone: "+2348189012345",
      dateCreated: "2024-08-08",
    },
    {
      id: 9,
      name: "Funke Adebayo",
      course: "UI/UX Design",
      email: "funke.adebayo@gmail.com",
      phone: "+2348190123456",
      dateCreated: "2024-08-09",
    },
    {
      id: 10,
      name: "Abdul Rahman",
      course: "Software Testing",
      email: "abdul.rahman@yahoo.com",
      phone: "+2348012345678",
      dateCreated: "2024-08-10",
    },
    {
      id: 11,
      name: "Grace Nnamdi",
      course: "Frontend Engineering",
      email: "grace.nnamdi@gmail.com",
      phone: "+2348023456789",
      dateCreated: "2024-08-11",
    },
    {
      id: 12,
      name: "Tunde Ojo",
      course: "Backend Development",
      email: "tunde.ojo@yahoo.com",
      phone: "+2348134567890",
      dateCreated: "2024-08-12",
    },
    {
      id: 13,
      name: "Sadiq Ibrahim",
      course: "Data Science",
      email: "sadiq.ibrahim@hotmail.com",
      phone: "+2348145678901",
      dateCreated: "2024-08-13",
    },
    {
      id: 14,
      name: "Ebele Nwankwo",
      course: "Cyber Security",
      email: "ebele.nwankwo@outlook.com",
      phone: "+2348156789012",
      dateCreated: "2024-08-14",
    },
    {
      id: 15,
      name: "Ahmed Yusuf",
      course: "Mobile Development",
      email: "ahmed.yusuf@gmail.com",
      phone: "+2348167890123",
      dateCreated: "2024-08-15",
    },
    {
      id: 16,
      name: "Adaobi Uche",
      course: "Cloud Computing",
      email: "adaobi.uche@yahoo.com",
      phone: "+2348178901234",
      dateCreated: "2024-08-16",
    },
  ];

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // course options
  const courseOptions = [
    { value: "", label: "All Courses" }, // Added option for "All Courses"
    { value: "frontend", label: "Frontend Engineering" },
    { value: "backend", label: "Backend Development" },
    { value: "data", label: "Data Science" },
    { value: "cyber", label: "Cyber Security" },
    { value: "mobile", label: "Mobile Development" },
    { value: "cloud", label: "Cloud Computing" },
  ];

  // Handle course dropdown selection
  const handleSelect = (name, value) => {
    if (name === "course") {
      setFilteredCourse(value);
    }
  };

  // Filter students based on search term, course, and date
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.phone.includes(searchTerm);

    const matchesCourse =
      filteredCourse === "" ||
      student.course.toLowerCase().includes(filteredCourse);

    const matchesDate =
      filteredDate === "" || student.dateCreated.split(" ")[0] === filteredDate; // Adjusted for consistency

    return matchesSearch && matchesCourse && matchesDate;
  });

  // Get current students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleFilterModal = () => {
    setFilterModalOpen(!filterModalOpen);
  };

  const applyFilters = () => {
    toggleFilterModal();
  };

  // reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setFilteredCourse("");
    setFilteredDate("");
  };

  return (
    <div className="container mx-auto relative">
      <div className="flex items-center md:justify-end mb-8 md:absolute md:top-[-50px] md:right-0">
        <div className="w-[300px] relative">
          <Image
            src={"/assets/calendar/Search.svg"}
            width={16}
            height={16}
            alt="search icon"
            quality={100}
            className="absolute top-3 left-4"
          />
          <input
            placeholder={"Search for Instructor, email, or phone"}
            className="w-full border-2 border-gray-200 outline-none bg-white text-xs placeholder:text-deskit-gray-400 rounded-lg placeholder:font-light pl-10 px-4 py-3"
            type={"text"}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Image
            src={"/assets/calendar/filter.svg"}
            width={16}
            height={16}
            alt="filter icon"
            quality={100}
            className="absolute top-4 right-4 cursor-pointer"
            onClick={toggleFilterModal}
          />
          {/* Filter Modal */}
          {filterModalOpen && (
            <div className="absolute left-0 md:left-[-100px] top-[120px] inset-0 bg-gray bg-opacity-50 flex justify-center items-center z-50 w-full md:w-[400px]">
              <div className="bg-white px-4 py-4 rounded-lg shadow-lg max-w-md w-full text-sm">
                <div className="flex items-start justify-between">
                  <p className="text-lg font-bold mb-4">Filter</p>
                  <button onClick={toggleFilterModal}>
                    <MdOutlineClose size={20} className="font-bold" />
                  </button>
                </div>

                <div>
                  {/* Replace the CustomDropdown and CustomInput here */}
                  <FilterComponent
                    courseOptions={courseOptions}
                    filteredCourse={filteredCourse}
                    setFilteredCourse={setFilteredCourse}
                    filteredDate={filteredDate}
                    setFilteredDate={setFilteredDate}
                  />
                  <div className="flex flex-col md:flex-wrap items-center md:gap-1 mt-2">
                    <div className="w-full flex items-center gap-2">
                      <CustomCheckbox
                        checked={rememberMe}
                        onChange={handleCheckboxChange}
                        size="sm"
                        className="accent-[#A020F0] checked:bg-[#A020F0]"
                      />
                      <p className="text-xs">Remember these filters</p>
                    </div>
                    <button
                      className="border-[1.5px] mt-4 w-full buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
                      onClick={applyFilters}
                    >
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* table */}
      <div className="rounded-2xl overflow-hidden">
        <div
          className="bg-white rounded-2xl p-1 md:p-8 overflow-x-scroll  mt-8"
          style={{
            scrollbarWidth: "thin" /* For Firefox */,
            WebkitScrollbarWidth: "thin" /* For WebKit-based browsers */,
            scrollbarTrackColor:
              "#f1f1f1" /* Background color of the scrollbar track */,
            scrollbarColor:
              "#E2E4E8 #ffffff" /* Color of the scrollbar thumb and track */,
            borderRadius: "8px" /* Radius of the scrollbar thumb */,
          }}
        >
          <table className="min-w-full rounded-2xl border shadow overflow-hidden">
            <thead className="bg-gray-100 text-gray-400">
              <tr>
                <th className="py-3 px-4 border-b text-left font-medium">
                  Instructor Name
                </th>
                <th className="py-3 px-4 border-b text-left font-medium">
                  Course
                </th>
                <th className="py-3 px-4 border-b text-left font-medium  hidden md:table-cell">
                  Email
                </th>
                <th className="py-3 px-4 border-b text-left font-medium hidden lg:table-cell">
                  Phone
                </th>
                <th className="py-3 px-4 border-b text-left font-medium">
                  Date created
                </th>
                <th className="py-3 px-4 border-b text-left font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.length > 0 ? (
                currentStudents.map((student) => (
                  <tr key={student.id} className="text-sm relative">
                    <td className="py-3 px-4 border-b">{student.name}</td>
                    <td className="py-3 px-4 border-b">{student.course}</td>
                    <td className="py-3 px-4 border-b hidden md:table-cell ">
                      {student.email}
                    </td>
                    <td className="py-3 px-4 border-b hidden lg:table-cell">
                      {student.phone}
                    </td>
                    <td className="py-3 px-4 border-b">
                      {student.dateCreated}
                    </td>
                    <td className="py-3 px-4 border-b text-center relative">
                      <MdMoreVert
                        size={20}
                        className="cursor-pointer"
                        onClick={() => handleDropdown(student.id)}
                      />
                      {activeDropdown === student.id && (
                        <div
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute z-50 right-4 top-[35px] text-deskit-blue-300 w-fit min-w-max border rounded overflow-hidden bg-white shadow-lg"
                        >
                          <div className="px-3 py-3 gap-x-3 w-full min-w-max text-sm hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                            <p
                              className="text-left"
                              onClick={() =>
                                setDetailsModalOpen((prev) => !prev)
                              }
                            >
                              See Details
                            </p>
                          </div>
                          <div className="px-3 py-3 gap-x-3 w-full min-w-max text-sm hover:bg-gray-100 cursor-pointer">
                            <p
                              className="text-left"
                              onClick={() =>
                                setDeleteModalOpen((prev) => !prev)
                              }
                            >
                              Delete User
                            </p>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-5">
                    No records found based on the applied filters.
                    <div className="flex items-center justify-center w-full">
                      <div className="w-[300px] ">
                        <button
                          className="border-[1.5px] mt-4 w-fit buttons bg-[#A020F0] rounded-[5px] py-4 px-6 text-[#ffffff] text-[15px] leading-[20px] font-medium"
                          onClick={resetFilters}
                        >
                          Show all Instructors
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-between mt-8">
        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-xl"
          onClick={() => paginate(currentPage - 1)}
        >
          <CgChevronLeft />
          <p>Previous</p>
        </div>

        <div className="flex items-center gap-2">
          {[...Array(totalPages).keys()].map((number) => (
            <div
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`p-2 rounded h-fit w-[40px] text-center cursor-pointer hover:bg-[#A020F0] hover:text-white ${
                currentPage === number + 1
                  ? "bg-[#A020F0] text-white"
                  : "bg-white text-black"
              }`}
            >
              {number + 1}
            </div>
          ))}
        </div>

        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-xl"
          onClick={() => paginate(currentPage + 1)}
        >
          <p>Next</p>
          <CgChevronRight />
        </div>
      </div>

      <InstructorDelete isOpen={deleteModalOpen} onClose={closeDeleteModal} />
      <InstructorDetails
        isOpen={detailsModalOpen}
        onClose={closeDetailsModal}
      />
    </div>
  );
};

export default InstructorManagement;
