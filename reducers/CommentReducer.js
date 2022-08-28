import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    comment: [],
}


export const commentReducer = createSlice({
    name: 'comment',
    initialState,
    reducers: { },

    extraReducers(builder) {
        builder.addCase(getAllComments.fulfilled, (state, action) => {

            return {
                ...state.comment,
                comment: action.payload
            }
        })

      
        builder.addCase(createOneComment.fulfilled, (state, action) => {

            return {
                ...state.comment,
                comment: action.payload
            }
        })

        builder.addCase(deleteOneComment.fulfilled, (state, action) => {

            return {
                ...state.comment,
                comment: state.comment.filter(commen => commen.id !== action.payload.id)
            }
        })

        
        
        builder.addCase(updateOneComment.fulfilled, (state, action) => {

            return {
                ...state.comment,
                comment:state.value.map(val=>{
                    if(val.id === action.payload.id){
                        return payload;
                    }else{
                        return comment;
                    }
                })
            }
        })

       
    }

})

export default commentReducer.reducer;



export const getAllComments = createAsyncThunk('comments/getAllcomments', async () => {
    const response = await axios.get('http://10.0.2.2:8080/comments')
    return response.data
    // fetchAllUsers(response)
    

})


export const deleteOneComment = createAsyncThunk('comments/deletePost', async () => {
    const response = await axios.delete('http://10.0.2.2:8080/comments/2')
    return response.data //id dönücek

})

export const createOneComment = createAsyncThunk('comments/createOnePost', async () => {
    const response = await axios.post('http://10.0.2.2:8080/comments')
    return response.data //name dönücek

})
export const updateOneComment = createAsyncThunk('comments/updateOnePost', async () => {
    const response = await axios.put('http://10.0.2.2:8080/comments/1')
    //id dönücek
    return response.data
})




