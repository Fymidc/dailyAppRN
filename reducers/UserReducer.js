import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const  initialState={
    value:[],
    users:[]
}
   

export const fetchAllUsers = createAsyncThunk('users/fetchUsers',async ()=>{
    const response = await axios.get('http://10.0.2.2:8080/user')
    return response.data

})

export const getOneUserfromid = createAsyncThunk('users/oneUser',async ()=>{
    const response = await axios.get('http://10.0.2.2:8080/user/2')
    return response.data

})

export const userReducer = createSlice({
    name:'user',
    initialState ,
    reducers:{
      
      
       updateOneUser:(state,action)=>{
    
        const {id,userName,password} = action.payload;
        const existingUser = state.value.find(user=>user.id === id)
        if(existingUser){
            existingUser.userName = userName
            existingUser.password = password
        }
        
       },
       getFriends:(state,action)=>{
            state.friends = action.payload
       },
       loginUser:(state,action)=>{
        state.value = action.payload
       },
       createOneUser:(state,action)=>{
        state.users = action.payload
       },
       deleteOneUser:(state,action)=>{
        //may not work check it later
        state.users= state.users.filter(user=>user.id !== action.payload.id);
       },
       getOneUser:(state,action)=>{
       const finded = state.users.map(u=>({...u}))
       console.log(finded)
       
       console.log("id",action.payload)
      
    

       },


    },

    extraReducers(builder){
        builder.addCase(fetchAllUsers.fulfilled,(state,action)=>{
           
            return {
                ...state.users,
                users : action.payload
            }
        })

        builder.addCase(getOneUserfromid.fulfilled,(state,action)=>{
           
            return {
                ...state.value,
                value : action.payload
            }
        })


    }
       
       
       

})

export const {getOneUser,createOneUser,updateOneUser,deleteOneUser,
 loginUser,getFriends} = userReducer.actions

export default userReducer.reducer;


