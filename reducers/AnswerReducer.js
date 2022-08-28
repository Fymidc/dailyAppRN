import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    answer: [],
}


export const answerReducer = createSlice({
    name: 'answer',
    initialState,
    reducers: { },

    extraReducers(builder) {
      
        builder.addCase(getOneAnswerById.fulfilled, (state, action) => {

            return {
                ...state.answer,
                answer: action.payload
            }
        })

        builder.addCase(deleteAnswer.fulfilled, (state, action) => {

            return {
                ...state.answer,
                answer: state.answer.filter(post => post.id !== action.payload.id)
            }
        })

        builder.addCase(createOneAnswers.fulfilled, (state, action) => {

            return {
                ...state.answer,
                answer: action.payload
            }
        })
        
        
      

       
    }

})

export default answerReducer.reducer;




export const getOneAnswerById = createAsyncThunk('answer/getOnePostById', async () => {
    const response = await axios.get('http://10.0.2.2:8080/answers/1')
    return response.data

})

export const deleteAnswer = createAsyncThunk('answer/deletePost', async () => {
    const response = await axios.delete('http://10.0.2.2:8080/answers/2')
    return response.data //id dönücek

})

export const createOneAnswers = createAsyncThunk('answer/createOnePost', async () => {
    const response = await axios.post('http://10.0.2.2:8080/answers')
    return response.data //name dönücek

})



