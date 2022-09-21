import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    posts: [],
    post:[],
    loading:false
}


export const postReducer = createSlice({
    name: 'post',
    initialState,
    reducers: { },

    extraReducers(builder) {
        builder.addCase(getAllPosts.pending, (state, action) => {

            state.loading = true
        })
        builder.addCase(getAllPosts.fulfilled, (state, action) => {

            return {
                ...state.loading,
                loading:false,
                
                ...state.posts,
                posts: action.payload
            }
        })

        builder.addCase(getOnePostById.fulfilled, (state, action) => {

            return {
                ...state.posts,
                posts: action.payload
            }
        })

        builder.addCase(createOnePost.fulfilled, (state, action) => {

            return {
                ...state.posts,
                posts: action.payload
            }
        })

        builder.addCase(deletePost.fulfilled, (state, action) => {

            return {
                ...state.posts,
                posts: state.posts.filter(post => post.id !== action.payload.id)
            }
        })

        
        
        builder.addCase(updateOnePost.fulfilled, (state, action) => {

            return {
                ...state.post,
                post:state.post.map(val=>{
                    if(val.id === action.payload.id){
                        return payload;
                    }else{
                        return post;
                    }
                })
            }
        })

       
    }

})

export default postReducer.reducer;



export const getAllPosts = createAsyncThunk('posts/getAllPosts', async (id) => {
   
    if(id !== null){
        const response = await axios.get(`https://diary-apps.herokuapp.com/posts?userid=${id}`)
        return response.data
    }else {
        const response = await axios.get(`https://diary-apps.herokuapp.com/posts`)
        return response.data
    }
    
   // return response.data
   
})



export const getOnePostById = createAsyncThunk('posts/getOnePostById', async (id) => {
    const response = await axios.get(`https://diary-apps.herokuapp.com/posts/${id}`)
    return response.data

})

export const deletePost = createAsyncThunk('posts/deletePost', async () => {
    const response = await axios.delete('https://diary-apps.herokuapp.com/posts/2')
    return response.data //id dönücek

})

export const createOnePost = createAsyncThunk('posts/createOnePost', async (data) => {
    const response = await axios.post('https://diary-apps.herokuapp.com/posts',data).catch(error => console.log(error));
    return response.data //name dönücek

})
export const updateOnePost = createAsyncThunk('posts/updateOnePost', async () => {
    const response = await axios.put('https://diary-apps.herokuapp.com/posts/1')
    //id dönücek
    return response.data
})




