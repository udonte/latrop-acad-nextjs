"use client";

import React, { useState } from "react";
import CustomCheckbox from "@/app/components/CustomCheckbox";

const Roles = () => {
  const [roles, setRoles] = useState({
    admin: {
      profileUpdate: false,
      loginLogout: false,
      classInitiation: false,
    },
    instructor: {
      profileUpdate: false,
      loginLogout: false,
      classInitiation: false,
    },
    student: {
      profileUpdate: false,
      loginLogout: false,
    },
  });

  const handleCheckboxChange = (role, permission) => {
    setRoles((prevRoles) => ({
      ...prevRoles,
      [role]: {
        ...prevRoles[role],
        [permission]: !prevRoles[role][permission],
      },
    }));
  };

  return (
    <div>
      {/* top */}
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-[80px] mt-8 text-[#222222]">
        {/* left */}
        <div className="w-full md:w-[300px]">
          <p className="font-bold">Roles</p>
          <p>Manage role types</p>
        </div>
        {/* right */}
        <div className="w-full md:w-[200px] space-y-4">
          <div className="bg-gray-100 py-3 px-4 rounded-md text-sm">
            Administrator
          </div>
          <div className="bg-gray-100 py-3 px-4 rounded-md text-sm">
            Instructor
          </div>
          <div className="bg-gray-100 py-3 px-4 rounded-md text-sm">
            Student
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-[80px] mt-8 text-[#222222]">
        {/* left */}
        <div className="w-full md:w-[300px]">
          <p className="font-bold">Permissions</p>
          <p>Manage permission settings across all user types</p>
        </div>
        {/* right */}
        <div className="w-full md:w-[600px]">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-700">
                  <th className="py-2 text-center"></th>
                  <th className="py-2 text-center">Admin</th>
                  <th className="py-2 text-center">Instructor</th>
                  <th className="py-2 text-center">Student</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-dashed border-b border-gray-300">
                  <td className="py-3 text-xs md:text-base">Profile Update</td>
                  <td className="py-3 text-center">
                    <div className="flex justify-center">
                      <CustomCheckbox
                        checked={roles.admin.profileUpdate}
                        onChange={() =>
                          handleCheckboxChange("admin", "profileUpdate")
                        }
                        name="profileUpdateAdmin"
                        size="sm"
                        className="accent-[#A020F0] checked:bg-[#A020F0]"
                      />
                    </div>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex justify-center">
                      <CustomCheckbox
                        checked={roles.instructor.profileUpdate}
                        onChange={() =>
                          handleCheckboxChange("instructor", "profileUpdate")
                        }
                        name="profileUpdateInstructor"
                        size="sm"
                        className="accent-[#A020F0] checked:bg-[#A020F0]"
                      />
                    </div>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex justify-center">
                      <CustomCheckbox
                        checked={roles.student.profileUpdate}
                        onChange={() =>
                          handleCheckboxChange("student", "profileUpdate")
                        }
                        name="profileUpdateStudent"
                        size="sm"
                        className="accent-[#A020F0] checked:bg-[#A020F0]"
                      />
                    </div>
                  </td>
                </tr>

                <tr className="border-dashed border-b border-gray-300">
                  <td className="py-3  text-xs md:text-base">
                    Login and Logout
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex justify-center">
                      <CustomCheckbox
                        checked={roles.admin.loginLogout}
                        onChange={() =>
                          handleCheckboxChange("admin", "loginLogout")
                        }
                        name="loginLogoutAdmin"
                        size="sm"
                        className="accent-[#A020F0] checked:bg-[#A020F0]"
                      />
                    </div>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex justify-center">
                      <CustomCheckbox
                        checked={roles.instructor.loginLogout}
                        onChange={() =>
                          handleCheckboxChange("instructor", "loginLogout")
                        }
                        name="loginLogoutInstructor"
                        size="sm"
                        className="accent-[#A020F0] checked:bg-[#A020F0]"
                      />
                    </div>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex justify-center">
                      <CustomCheckbox
                        checked={roles.student.loginLogout}
                        onChange={() =>
                          handleCheckboxChange("student", "loginLogout")
                        }
                        name="loginLogoutStudent"
                        size="sm"
                        className="accent-[#A020F0] checked:bg-[#A020F0]"
                      />
                    </div>
                  </td>
                </tr>

                <tr className="border-dashed border-b border-gray-300">
                  <td className="py-3 text-xs md:text-base">
                    Initiate class meeting creation
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex justify-center">
                      <CustomCheckbox
                        checked={roles.admin.classInitiation}
                        onChange={() =>
                          handleCheckboxChange("admin", "classInitiation")
                        }
                        name="classInitiationAdmin"
                        size="sm"
                        className="accent-[#A020F0] checked:bg-[#A020F0]"
                      />
                    </div>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex justify-center">
                      <CustomCheckbox
                        checked={roles.instructor.classInitiation}
                        onChange={() =>
                          handleCheckboxChange("instructor", "classInitiation")
                        }
                        name="classInitiationInstructor"
                        size="sm"
                        className="accent-[#A020F0] checked:bg-[#A020F0]"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
