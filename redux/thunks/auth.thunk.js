"use client";
import axios from "axios";
import { URL } from "../actionTypes";
import { toast } from "react-toastify";

export const authenticateUserThunk = async (user) => {
  try {
    user.strategy = "local";
    const response = await axios.post(`${URL}/auth/login`, user);
    toast.success("Sign In complete");
    console.log(response?.data);
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
    return error;
  }
};

export const deauthenticateThunk = async () => {
  return true;
};

export const signupUserThunk = async (user) => {
  try {
    const response = await axios.post(`${URL}/register/signup`, user);
    toast.success("Sign Up complete. Taking you to Login Page!");
    console.log(response?.data);
    return response?.data;
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.message);
    return err;
  }
};

export const enrollUserThunk = async (user) => {
  try {
    const response = await axios.post(`${URL}/register/enroll`, user);

    toast.success("Sign Up complete. Taking you to Login Page!");
    console.log(response?.data);
    return response?.data;
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.message);
    return err;
  }
};

export const editUserPasswordThunk = async (data) => {
  const dataDetails = {
    token: data?.token,
    password: data?.password,
  };
  try {
    const response = await axios.patch(
      `${URL}/users/reset/password/`,
      dataDetails,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    toast.success(response?.data?.message || "password updated pls login ");
    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const forgotPasswordThunk = async (userEmail) => {
  const email = userEmail;
  try {
    const response = await axios.patch(`${URL}/users/forgot/password/`, email, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    toast.success(response?.data?.message || "email sent to your inbox");
    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
};
