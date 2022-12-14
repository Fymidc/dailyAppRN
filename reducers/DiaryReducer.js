import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    diaries: [],
    diary: [],
    loading: false
}


export const diaryReducer = createSlice({
    name: 'diary',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(getAlldiaries.pending, (state, action) => {

            state.loading = true
        })
        builder.addCase(getAlldiaries.fulfilled, (state, action) => {

            return {
                ...state.loading,
                loading:false,
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
                ...state.diaries,
                diaries: state.diaries.map(val => {
                    if (val.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return val
                    }
                })
            }
        })


    }

})

export default diaryReducer.reducer;



export const getAlldiaries = createAsyncThunk('diaries/getAlldiaries', async (id) => {
    if (id !== null) {
        const response = await axios.get(`https://diary-apps.herokuapp.com/diaries?userid=${id}`)
        return response.data
    } else {
        const response = await axios.get(`https://diary-apps.herokuapp.com/diaries`)
        return response.data
    }



})

export const getOneDiaryById = createAsyncThunk('diaries/getOneDiaryById', async () => {
    const response = await axios.get('https://diary-apps.herokuapp.com/diaries/1')
    return response.data

})

export const deleteDiary = createAsyncThunk('diaries/deleteDiary', async () => {
    const response = await axios.delete('https://diary-apps.herokuapp.com/diaries/2')
    return response.data //id d??n??cek

})

export const createOneDiary = createAsyncThunk('diaries/createOneDiary', async (data) => {
    const response = await axios.post('https://diary-apps.herokuapp.com/diaries', data).catch(error => console.log(error));
    return response.data //name d??n??cek

})
export const updateOneDiary = createAsyncThunk('diaries/updateOneDiary', async (data) => {


    const id = data.id
    const ndata = {
        ishidden: data.ishidden
    }

    const response = await axios.put(`https://diary-apps.herokuapp.com/diaries/${id}`, ndata).catch(error => console.log(error))


    return response.data
})




