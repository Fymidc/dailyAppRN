import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    comment: [],
    loading:false
}


export const commentReducer = createSlice({
    name: 'comment',
    initialState,
    reducers: { },

    extraReducers(builder) {
        builder.addCase(getAllCommentsPost.pending, (state, action) => {

           state.loading=true
        })
        builder.addCase(getAllCommentsPost.fulfilled, (state, action) => {

            return {
                ...state.loading,
                loading:false,
                ...state.comment,
                comment: action.payload
            }
        })

        builder.addCase(getAllCommentsDiary.pending, (state, action) => {
            
            state.loading=true
        })
        builder.addCase(getAllCommentsDiary.fulfilled, (state, action) => {
            
            return {
                ...state.loading,
                loading:false,
                ...state.comment,
                comment: action.payload
            }
        })

      
        builder.addCase(createOnePostComment.pending, (state, action) => {

           state.loading=true
        })
        builder.addCase(createOnePostComment.fulfilled, (state, action) => {

            return {
                ...state.loading,
                loading:false,
                ...state.comment,
                comment: action.payload
            }
        })

        builder.addCase(createOneDiaryComment.fulfilled, (state, action) => {
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



export const getAllCommentsPost = createAsyncThunk('comments/getAllcommentsPost', async (id) => {
    const response = await axios.get(`https://diary-apps.herokuapp.com/comments?postid=${id}`)
    return response.data
    // fetchAllUsers(response)
    

})

export const getAllCommentsDiary = createAsyncThunk('comments/getAllcommentsDiary', async (id) => {
    const response = await axios.get(`https://diary-apps.herokuapp.com/comments/diary?diaryid=${id}`)
    return response.data
    // fetchAllUsers(response)
    

})

export const deleteOneComment = createAsyncThunk('comments/deleteComment', async () => {
    const response = await axios.delete('https://diary-apps.herokuapp.com/comments/2')
    return response.data //id d??n??cek

})

export const createOnePostComment = createAsyncThunk('comments/createOnePostComment', async (data) => {
    
    const id = data.postid;

    const ndata ={
        id:"",
        text:data.text,
        date:data.date,
        userid:data.userid
    }
    
    const response = await axios.post(`https://diary-apps.herokuapp.com/comments?postid=${id}`,ndata).catch(error => console.log(error))
    return response.data //name d??n??cek

})

export const createOneDiaryComment = createAsyncThunk('comments/createOneDiaryComment', async (data) => {
    const id = data.diaryid;

    const ndata ={
        id:"",
        text:data.text,
        date:data.date,
        userid:data.userid
    }
    
    
    const response = await axios.post(`https://diary-apps.herokuapp.com/comments?diaryid=${id}`,ndata)
    return response.data //name d??n??cek

})

export const updateOneComment = createAsyncThunk('comments/updateOneComment', async () => {
    const response = await axios.put('https://diary-apps.herokuapp.com/comments/1')
    //id d??n??cek
    return response.data
})




