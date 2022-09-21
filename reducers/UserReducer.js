import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';


const initialState = {
    value: [],
    loginuser: [],
    token:[],
    friends: [],
    loading: false,
    success: false,
    
}


export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        check: (state, action) => {

        }
    },

    extraReducers(builder) {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {

            return {
                ...state.users,
                users: action.payload
            }
        })

        builder.addCase(getOneUserfromid.pending, (state, action) => {

            state.loading = true
        })
        builder.addCase(getOneUserfromid.fulfilled, (state, action) => {

            return {
               
                ...state.loading,
                loading: false,

                ...state.value,
                value: action.payload,

                ...state,
            }
        })
        builder.addCase(getMainUserfromid.pending, (state, action) => {

            state.loading = true
        })
        builder.addCase(getMainUserfromid.fulfilled, (state, action) => {

            return {
                ...state.loading,
                loading: false,
                ...state.loginuser,
                loginuser: action.payload
            }
        })

        builder.addCase(deleteOneUserfromid.fulfilled, (state, action) => {

            return {
                ...state.users,
                users: state.users.filter(user => user.id !== action.payload.id)
            }
        })

        builder.addCase(getOneUserfromname.fulfilled, (state, action) => {

            return {
                ...state.value,
                value: action.payload
            }
        })
        builder.addCase(getAlluserFriends.pending, (state, action) => {

            state.loading = true;

        })


        builder.addCase(getAlluserFriends.fulfilled, (state, action) => {
           return {
            ...state.loading,
            loading:false,

            ...state.friends,
            friends:action.payload

           }
    
        })
        builder.addCase(addFriends.fulfilled, (state, action) => {
            return {
                ...state.friends,

                friends: action.payload,
                ...state
            }

        })
        builder.addCase(removefriends.fulfilled, (state, action) => {

            return {
                ...state.friends,
                friends: state.friends.filter(user => user.id !== action.payload.id)
            }

        })

        builder.addCase(updateOneUserfromid.fulfilled, (state, action) => {

            return {
                ...state.value,
                value: state.value.map(val => {
                    if (val.id === action.payload.id) {
                        return payload;
                    } else {
                        return val;
                    }
                })
            }
        })

       
        builder.addCase(loginuser.fulfilled, (state, action) => {

            return {
                ...state.token,
                token: action.payload,
            }
        })
        builder.addCase(registeruser.fulfilled, (state, action) => {

            return {
                ...state.token,
                token: action.payload
            }
        })
    }

})

export default userReducer.reducer;
export const { check } = userReducer.actions;



export const fetchAllUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://diary-apps.herokuapp.com/user')
    return response.data
    // fetchAllUsers(response)


})

export const getOneUserfromid = createAsyncThunk('users/oneUser', async (id) => {
    const response = await axios.get(`https://diary-apps.herokuapp.com/user/${id}`)
    return response.data

})

export const getMainUserfromid = createAsyncThunk('users/mainUser', async (id) => {
    const response = await axios.get(`https://diary-apps.herokuapp.com/user/${id}`)
    return response.data

})

export const deleteOneUserfromid = createAsyncThunk('users/deleteoneUser', async () => {
    const response = await axios.delete('https://diary-apps.herokuapp.com/user/2')
    return response.data //id dönücek

})

export const getOneUserfromname = createAsyncThunk('users/getoneUserwname', async () => {
    const response = await axios.get('https://diary-apps.herokuapp.com/user/fatih')
    return response.data //name dönücek

})
export const updateOneUserfromid = createAsyncThunk('users/updateoneUser', async () => {
    const response = await axios.put('https://diary-apps.herokuapp.com/user/fatih')
    //id dönücek
    return response.data
})

export const getAlluserFriends = createAsyncThunk('users/getUserfriends', async (data) => {

    const id = data.userid

    const response = await axios.get(`https://diary-apps.herokuapp.com/user/friends/${id}`)
    //return response.data //id dönücek
    return response.data

})
export const addFriends = createAsyncThunk('users/addFriends', async (data) => {

    const userid = data.userid;
    const friendsid = data.friendsid;

    const response = await axios.post(`https://diary-apps.herokuapp.com/user/friends/add?userid=${userid}&friendsid=${friendsid}`)
    //return response.data //id dönücek
    return response.data

})
export const removefriends = createAsyncThunk('users/removefriends', async (data) => {
    const userid = data.userid;
    const friendsid = data.friendsid;
    const response = await axios.post(`https://diary-apps.herokuapp.com/user/friends/delete?userid=${userid}&friendsid=${friendsid}`)
    //return response.data //id dönücek
    return response.data

})


export const loginuser = createAsyncThunk('users/loginuser', async (data) => {
    const response = await axios.post('https://diary-apps.herokuapp.com/auth/login', data)
    //return response.data //id dönücek

    const message = response.data.message
    const userid = JSON.stringify(response.data.userId)
    const userName = response.data.userName

   
       try {
        await AsyncStorage.setItem('Token_Key', message)
        await AsyncStorage.setItem('Current_User', userid)
        await AsyncStorage.setItem('Current_User_Name', userName)
    } catch (error) {
        console.log(error)
    } 
    
   return response.data

})

export const registeruser = createAsyncThunk('users/registeruser', async (data) => {
    const response = await axios.post('https://diary-apps.herokuapp.com/auth/register',data)
    return response.data //id dönücek
    

})




