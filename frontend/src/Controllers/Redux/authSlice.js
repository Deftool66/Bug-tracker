import {createSlice} from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'auth',
  initialState: {
    admin: false,
    LoggedIn: false,
  },
  reducers: {
    signIn:(state,action)=>{
      const {name,password} = action.payload;
      console.log(name,password);
      state.LoggedIn = true;
      state.admin =true;
      console.log(state.LoggedIn);
    },
    signOut:(state)=>{
      state.LoggedIn = false;
      state.admin =false;
    },
    createUser:(state, action)=>{
    },
  } // reducers
});
export default slice.reducer;
export const {signIn,signOut,createUser} = slice.actions;
