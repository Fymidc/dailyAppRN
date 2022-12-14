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




export const getOneAnswerById = createAsyncThunk('answer/getOnePostById', async (data) => {
    const userid = data.userid;
    const questionid = data.questionid;
    const response = await axios.get(`https://diary-apps.herokuapp.com/answers/user?userid=${userid}&questionid=${questionid}`)
    return response.data

})

export const deleteAnswer = createAsyncThunk('answer/deletePost', async () => {
    const response = await axios.delete('https://diary-apps.herokuapp.com/answers/2')
    return response.data //id dönücek

})

export const createOneAnswers = createAsyncThunk('answer/createOnePost', async (data) => {
    const response = await axios.post('https://diary-apps.herokuapp.com/answers',data)
    return response.data //name dönücek

})



