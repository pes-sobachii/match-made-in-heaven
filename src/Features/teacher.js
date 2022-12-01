import { createSlice } from "@reduxjs/toolkit";
import teachers from "../mockdb";

export const teachersSlice = createSlice({
   name: 'teachers',
   initialState:{value:{name: '', age: '', description: '', lovePercentage: 0}, userName:''},
   reducers:{
      findPair: (state, action) => {
         let percentage = Math.floor((Math.random() * 20) + 80)
         let randomTeacher = Math.floor((Math.random() * teachers.length) + 0)
         state.value = {...teachers[randomTeacher], lovePercentage: percentage}
         state.userName = action.payload
      }
   }
})

export const { findPair } = teachersSlice.actions

export default teachersSlice.reducer