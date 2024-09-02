"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
    fetchBlogsThunk,
    getBlogThunk,
    editBlogThunk,
    deleteBlogThunk,
    createBlogThunk
} from "../thunks/blog.thunk";



const initialState = {
  isLoading: false,
  error: null,
  mesaage:null,
  blog: {},
  featuredPost: {},
  blogs: []
};



// ===================================charles==============
export const fetchBlogs = createAsyncThunk(
    "api/fetchBlogs",
     async (_, { rejectWithValue }) => {
       try {
         return await fetchBlogsThunk();
       } catch (error) {
         return rejectWithValue(error.response.data);
       }
     }
   );
  
  export const getBlog = createAsyncThunk(
    "api/getBlog",
     async (blog_id, { rejectWithValue }) => {
       try {
         return await getBlogThunk(blog_id);
       } catch (error) {
         return rejectWithValue(error.response.data);
       }
     }
   );
   
  
   export const createBlog = createAsyncThunk(
    "api/createBlog",
     async (data, { rejectWithValue }) => {
       try {
        const body  = data?.body;
         return await createBlogThunk(body);
       } catch (error) {
         return rejectWithValue(error.response.data);
       }
     }
   );
   
   
   export const deleteBlog = createAsyncThunk(
    "api/deleteBlog",
     async (data, { rejectWithValue }) => {
       try {
         const id    = data?.id
         const token   = data?.token
         return await deleteBlogThunk(id, token);
       } catch (error) {
         return rejectWithValue(error.response.data);
       }
     }
   );
   
   export const editBlog= createAsyncThunk(
    "api/editBlog",
     async (data, { rejectWithValue }) => {
       try {
         return await editBlogThunk(data);
       } catch (error) {
         return rejectWithValue(error.response.data);
       }
     }
   );



const blog_slice = createSlice({
  name: "blog_slice",
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.blogs = action?.payload?.data || []
        state.mesaage = action?.payload?.message
        state.featuredPost = action?.payload?.data?.find((item, index)=>{
            return item.isFeatured === true

        })
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.blog = action?.payload?.data || {}
        state.mesaage = action?.payload?.message || "Single blog details fetched successfully"
      })
      .addCase(getBlog.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export const { } = blog_slice.actions;
export default blog_slice.reducer;