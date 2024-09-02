"use client"
import axios from "axios";
import { URL } from "../actionTypes";
import { toast } from "react-toastify";

export const createBlogThunk = async (data) =>{
  try {
    const response= await axios.post(`${URL}/blogs/create`, data, {
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

export const editBlogThunk = async(data) =>{
    const body  = data?.body;
    const token = data?.token;
    const id    = data?.id
  try {
    const response = await axios.patch(`${URL}/blogs/${id}/update`, body, {
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

export const fetchBlogsThunk = async () =>{
  
  try {
    const response = await axios.get(`${URL}/blogs/`)
    return response?.data
  } catch (err) {
    console.log(err.response)
    return err
  }
};

export const getBlogThunk = async (id) =>{
  try {
    const response = await axios.get(`${URL}/blogs/${id}/show`)
    return response?.data
  } catch (err) {
    console.log(err.response)
    return err
  }
};

export const deleteBlogThunk = async (id, token) =>{ 
 
    try {
      const response = await axios.delete(`${URL}/blogs/${id}/delete`, {
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