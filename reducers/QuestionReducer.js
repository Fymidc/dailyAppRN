import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    questions: [],
    question:[]
}


export const questionReducer = createSlice({
    name: 'question',
    initialState,
    reducers: { },

    extraReducers(builder) {
        builder.addCase(getAllQuestions.fulfilled, (state, action) => {

            return {
                ...state.questions,
                questions: action.payload
            }
        })

        builder.addCase(getAllQuestionsByUserId.fulfilled, (state, action) => {

            return {
                ...state.questions,
                questions: action.payload
            }
        })

        builder.addCase(getOneQuestionPerday.fulfilled, (state, action) => {

            return {
                ...state.post,
                post: action.payload
            }
        })

        builder.addCase(createOneQuestion.fulfilled, (state, action) => {

            return {
                ...state.questions,
                questions: action.payload
            }
        })

 
        
        builder.addCase(updateOneQuestion.fulfilled, (state, action) => {

            return {
                ...state.question,
                question:state.value.map(val=>{
                    if(val.id === action.payload.id){
                        return payload;
                    }else{
                        return question;
                    }
                })
            }
        })

       
    }

})

export default questionReducer.reducer;



export const getAllQuestions = createAsyncThunk('question/getAllquestions', async (id) => {
   
    if(id !== null){
        const response = await axios.get(`http://10.0.2.2:8080/questions?userid=${id}`)
        return response.data
    }else {
        const response = await axios.get(`http://10.0.2.2:8080/questions`)
        return response.data
    }
    
   // return response.data

})

export const getAllQuestionsByUserId = createAsyncThunk('question/getAllquestionsbyUserId', async (id) => {
   
   
    const response = await axios.get(`http://10.0.2.2:8080/questions/userq?userid=${id}`)
    return response.data

   // return response.data

})

export const getOneQuestionPerday = createAsyncThunk('question/getonequestionperday', async () => {
    const response = await axios.get('http://10.0.2.2:8080/questions/2')
    return response.data //id dönücek

})

export const createOneQuestion = createAsyncThunk('question/createOneQuestion', async () => {
    const response = await axios.post('http://10.0.2.2:8080/questions')
    return response.data //name dönücek

})
export const updateOneQuestion = createAsyncThunk('question/updateOneQuestion', async () => {
    const response = await axios.put('http://10.0.2.2:8080/questions/1')
    //id dönücek
    return response.data
})




