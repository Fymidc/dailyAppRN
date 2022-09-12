import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    value: [],
    users: [],
    friends: [],
    loading:false
}


export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {

            return {
                ...state.users,
                users: action.payload
            }
        })

        builder.addCase(getOneUserfromid.fulfilled, (state, action) => {

            return {
                ...state.value,
                value: action.payload
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

            state.loading =true;
            
        })


        builder.addCase(getAlluserFriends.fulfilled, (state, action) => {

           
            state.friends = action.payload
            state.loading = false
            
        })
        builder.addCase(addFriends.fulfilled, (state, action) => {
            return{
                ...state.friends,

                friends : action.payload
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
                        return value;
                    }
                })
            }
        })

        builder.addCase(loginuser.fulfilled, (state, action) => {

            return {
                ...state.value,
                value: action.payload
            }
        })
        builder.addCase(registeruser.fulfilled, (state, action) => {

            return {
                ...state.value,
                value: action.payload
            }
        })
    }

})

export default userReducer.reducer;



export const fetchAllUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('http://10.0.2.2:8080/user')
    return response.data
    // fetchAllUsers(response)


})

export const getOneUserfromid = createAsyncThunk('users/oneUser', async () => {
    const response = await axios.get('http://10.0.2.2:8080/user/2')
    return response.data

})

export const deleteOneUserfromid = createAsyncThunk('users/deleteoneUser', async () => {
    const response = await axios.delete('http://10.0.2.2:8080/user/2')
    return response.data //id dönücek

})

export const getOneUserfromname = createAsyncThunk('users/getoneUserwname', async () => {
    const response = await axios.get('http://10.0.2.2:8080/user/fatih')
    return response.data //name dönücek

})
export const updateOneUserfromid = createAsyncThunk('users/updateoneUser', async () => {
    const response = await axios.put('http://10.0.2.2:8080/user/fatih')
    //id dönücek
    return response.data
})

export const getAlluserFriends = createAsyncThunk('users/getUserfriends', async (data) => {
   
    const id = data.userid
   
    const response = await axios.get(`http://10.0.2.2:8080/user/friends/${id}`)
    //return response.data //id dönücek
    return response.data

})
export const addFriends = createAsyncThunk('users/addFriends', async (data) => {

    const userid = data.userid;
    const friendsid = data.friendsid;

    const response = await axios.get(`http://10.0.2.2:8080/user/friends/add?userid=${userid}&friendsid=${friendsid}`)
    //return response.data //id dönücek
    return response.data

})
export const removefriends = createAsyncThunk('users/removefriends', async (data) => {
    const userid = data.userid;
    const friendsid = data.friendsid;
    const response = await axios.get(`http://10.0.2.2:8080/user/friends/delete?userid=${userid}&friendsid=${friendsid}`)
    //return response.data //id dönücek
    return response.data

})


export const loginuser = createAsyncThunk('users/loginuser', async (data) => {
    const response = await axios.post('http://10.0.2.2:8080/auth/login', data)
    //return response.data //id dönücek
    return response.data

})

export const registeruser = createAsyncThunk('users/registeruser', async () => {
    const response = await axios.post('http://10.0.2.2:8080/auth/register')
    //return response.data //id dönücek
    dispatch(getAlluserFriends(response.data))

})




