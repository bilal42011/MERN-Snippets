import { createSlice } from "@reduxjs/toolkit";

let formstepslice=createSlice({
    name:"step",
    initialState:1,
    reducers:{
incrementstep:(state)=>{
    console.log("inside incrementstep of reduxstate");
   return state+=state;
},
decrementstep:(state)=>{
    console.log("inside decrementstep of reduxstate");
   return state=state-1;
}
 }
});
export const {incrementstep,decrementstep}=formstepslice.actions;
export default formstepslice.reducer;

