"use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  fetchUsersThunk,
  getUserThunk,
  editUserThunk,
  deleteUserThunk,
  createUserThunk
 } from "../thunks/user.thunk";



const initialState = {
  isLoading: false,
  error: null,
  msg: null,
  user: {},
  users: []
};



// ===================================charles==============
export const fetchUsers = createAsyncThunk(
  "api/fetchUsers",
   async (data, { rejectWithValue }) => {
     try {
        const token = data?.token
       return await fetchUsersThunk(token);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

export const getUser = createAsyncThunk(
  "api/fetchUsers",
   async (data, { rejectWithValue }) => {
     try {
        const token = data?.token
       return await getUserThunk(token);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
 

 export const createUser = createAsyncThunk(
  "api/createUser",
   async (data, { rejectWithValue }) => {
     try {
      const body  = data?.body;
       return await createUserThunk(body);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
 
 
 export const deleteUser = createAsyncThunk(
  "api/deleteUser",
   async (data, { rejectWithValue }) => {
     try {
       const id    = data?.id
       const token   = data?.token
       return await deleteUserThunk(id, token);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
 
 export const editUser= createAsyncThunk(
  "api/editUser",
   async (data, { rejectWithValue }) => {
     try {
       return await editUserThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
 




const user_slice = createSlice({
  name: "user_slice",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.users =  action?.payload || []
    })
    .addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(editUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(editUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false
    })
    .addCase(editUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(createUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false
    })
    .addCase(createUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
  },
});

export const { } = user_slice.actions;
export default user_slice.reducer;