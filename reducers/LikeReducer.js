import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    like: [],
}


export const likeReducer = createSlice({
    name: 'like',
    initialState,
    reducers: { },

    extraReducers(builder) {
      
        builder.addCase(getAllLikes.fulfilled, (state, action) => {

            return {
                ...state.like,
                like: action.payload
            }
        })

        builder.addCase(deleteOneLike.fulfilled, (state, action) => {

            return {
                ...state.like,
                like: state.like.filter(post => post.id !== action.payload.id)
            }
        })

        builder.addCase(createOneLike.fulfilled, (state, action) => {

            return {
                ...state.like,
                like: action.payload
            }
        })
        
        
      

       
    }

})

export default likeReducer.reducer;




export const getAllLikes = createAsyncThunk('like/getOnePostById', async () => {
    const response = await axios.get('http://10.0.2.2:8080/likes/1')
    return response.data

})

export const deleteOneLike = createAsyncThunk('like/deletePost', async () => {
    const response = await axios.delete('http://10.0.2.2:8080/likes/2')
    return response.data //id dönücek

})

export const createOneLike = createAsyncThunk('like/createOnePost', async () => {
    const response = await axios.post('http://10.0.2.2:8080/likes')
    return response.data //name dönücek

})



