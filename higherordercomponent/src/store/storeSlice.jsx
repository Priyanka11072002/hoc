import { createSlice } from "@reduxjs/toolkit";

const initialState = {name:"",email:"",password:""}
const StoreCreateSlice = createSlice({
  name:"storeSlice"  ,
  initialState: initialState,
 
  reducers:{
    
    setName:(state,action)=>{
        state.name = (action.payload)
       
    },

    setEmail:(state,action)=>{
      state.email = (action.payload)
     
  },

  setPassword:(state,action)=>{
    state.password = (action.payload)
   
}

  }

})
 export const {setName, setEmail, setPassword} = StoreCreateSlice.actions
export  default StoreCreateSlice.reducer