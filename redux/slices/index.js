"use client"

import authSlice from "./auth.slice";
import userSlice from "./user.slice";
import blogSlice from "./blog.slice";


const combineSlices = {
    authSlice,
    userSlice,
    blogSlice,
}

export default combineSlices