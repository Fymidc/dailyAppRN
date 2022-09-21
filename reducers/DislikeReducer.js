import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    dislike: [],
}


export const dislikeReducer = createSlice({
    name: 'dislike',
    initialState,
    reducers: { },

    extraReducers(builder) {
      
        builder.addCase(getAllDislikes.fulfilled, (state, action) => {

            return {
                ...state.dislike,
                dislike: action.payload
            }
        })

        builder.addCase(deleteOneDislike.fulfilled, (state, action) => {

            return {
                ...state.dislike,
                dislike: state.dislike.filter(post => post.id !== action.payload.id)
            }
        })

        builder.addCase(createOneDislike.fulfilled, (state, action) => {

            return {
                ...state.dislike,
                dislike: action.payload
            }
        })
        
        
      

       
    }

})

export default dislikeReducer.reducer;




export const getAllDislikes = createAsyncThunk('dislike/getOnePostById', async () => {
    const response = await axios.get('https://diary-apps.herokuapp.com/dislikes/1')
    return response.data

})

export const deleteOneDislike = createAsyncThunk('dislike/deletePost', async () => {
    const response = await axios.delete('https://diary-apps.herokuapp.com/dislikes/2')
    return response.data //id dönücek

})

export const createOneDislike = createAsyncThunk('dislike/createOnePost', async () => {
    const response = await axios.post('https://diary-apps.herokuapp.com/dislikes')
    return response.data //name dönücek

})



