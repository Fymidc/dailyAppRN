import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    diaries: [],
    diary:[]
}


export const diaryReducer = createSlice({
    name: 'diary',
    initialState,
    reducers: { },

    extraReducers(builder) {
        builder.addCase(getAlldiaries.fulfilled, (state, action) => {

            return {
                ...state.diaries,
                diaries: action.payload
            }
        })

        builder.addCase(getOneDiaryById.fulfilled, (state, action) => {

            return {
                ...state.diary,
                diary: action.payload
            }
        })
        builder.addCase(createOneDiary.fulfilled, (state, action) => {

            return {
                ...state.diaries,
                diaries: action.payload
            }
        })

        builder.addCase(deleteDiary.fulfilled, (state, action) => {

            return {
                ...state.diaries,
                diaries: state.diaries.filter(post => post.id !== action.payload.id)
            }
        })

        
        
        builder.addCase(updateOneDiary.fulfilled, (state, action) => {

            return {
                ...state.diary,
                diary:state.value.map(val=>{
                    if(val.id === action.payload.id){
                        return payload;
                    }else{
                        return diary;
                    }
                })
            }
        })

       
    }

})

export default diaryReducer.reducer;



export const getAlldiaries = createAsyncThunk('diaries/getAlldiaries', async () => {
    const response = await axios.get('http://10.0.2.2:8080/diaries')
    return response.data
    // fetchAllUsers(response)
    

})

export const getOneDiaryById = createAsyncThunk('diaries/getOnePostById', async () => {
    const response = await axios.get('http://10.0.2.2:8080/diaries/1')
    return response.data

})

export const deleteDiary = createAsyncThunk('diaries/deletePost', async () => {
    const response = await axios.delete('http://10.0.2.2:8080/diaries/2')
    return response.data //id dönücek

})

export const createOneDiary = createAsyncThunk('diaries/createOnePost', async () => {
    const response = await axios.post('http://10.0.2.2:8080/diaries')
    return response.data //name dönücek

})
export const updateOneDiary = createAsyncThunk('diaries/updateOnePost', async () => {
    const response = await axios.put('http://10.0.2.2:8080/diaries/1')
    //id dönücek
    return response.data
})




