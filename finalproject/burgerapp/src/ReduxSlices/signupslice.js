import {createSlice} from "@reduxjs/toolkit";

const signupslice=createSlice({
name:"signup",
initialState:{
step1:{isvalid:false,name:"",stepname:"step1"},
step2:{isvalid:false,email:"",stepname:"step2"},
step3:{isvalid:false,password:"",stepname:"step3"},
step4:{isvalid:false,zipcode:"",stepname:"step4"}
},
reducers:{
signupstep1:(state,action)=>{
    return {
        ...state,
        step1:{
            ...state.step1,
            name:action.payload,
            isvalid:true
        }
    }
},
signupstep2:(state,action)=>{
    return {
        ...state,
        step2:{
            ...state.step2,
            email:action.payload,
            isvalid:true
        }
    }
},
signupstep3:(state,action)=>{
    return {
        ...state,
        step3:{
            ...state.step3,
            password:action.payload,
            isvalid:true
        }
    }
},
signupstep4:(state,action)=>{
    return {
        ...state,
        step4:{
            ...state.step4,
            zipcode:action.payload,
            isvalid:true
        }
    }
}

}
});
export const {signupstep1,signupstep2,signupstep3,signupstep4}=signupslice.actions;
export default signupslice.reducer;