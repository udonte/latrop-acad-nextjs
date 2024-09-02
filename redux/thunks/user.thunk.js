"use client"
import axios from "axios";
import { URL } from "../actionTypes";
import { toast } from "react-toastify";

export const createUserThunk = async (user) =>{
  try {
    const response= await axios.post(`${URL}/users`, user, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      toast.success('User Created Successfully!');
      return true
  } catch (err) {
      message.error(err?.response?.data?.message);
      console.log(err?.response);
      return err
  }
};

export const editUserThunk = async(data) =>{
    const body  = data?.body;
    const token = data?.token;
    const id    = data?.id
  try {
    const response = await axios.patch(`${URL}/users/${id}`, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    toast.success('Profile Updated');
    return true
    
  } catch (err) {
      message.error(err?.response?.data?.message);
      console.log(err.response); 
      return err 
  }
};

export const fetchUsersThunk = async (token) =>{
  
  if (!token) return null;
  try {
    const response = await axios.get(`${URL}/users`, {
      headers: {
        Authorization:`Bearer ${token}`,
      },
    })
    return response?.data
  } catch (err) {
    console.log(err.response)
    return err
  }
};

export const getUserThunk = async (token) =>{
  
  if (!token) return null;
  try {
    const response = await axios.get(`${URL}/users/${id}`, {
      headers: {
        Authorization:`Bearer ${token}`,
      },
    })
    return response?.data
  } catch (err) {
    console.log(err.response)
    return err
  }
};

export const deleteUserThunk = async (id, token) =>{ 
 
    try {
      const response = await axios.delete(`${URL}/user/${id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      toast.success('User is deleted successfully');
      return true
      
    } catch (err) {
      // notInProgress();
      toast.error(err?.response?.data?.message);
      console.log(err);
      return err
    }
};