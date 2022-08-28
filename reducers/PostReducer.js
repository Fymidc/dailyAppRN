import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    posts: [],
    post:[]
}


export const postReducer = createSlice({
    name: 'post',
    initialState,
    reducers: { },

    extraReducers(builder) {
        builder.addCase(getAllPosts.fulfilled, (state, action) => {

            return {
                ...state.posts,
                posts: action.payload
            }
        })

        builder.addCase(getOnePostById.fulfilled, (state, action) => {

            return {
                ...state.post,
                post: action.payload
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
                post:state.value.map(val=>{
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
        const response = await axios.get(`http://10.0.2.2:8080/posts?userid=${id}`)
        return response.data
    }else {
        const response = await axios.get(`http://10.0.2.2:8080/posts`)
        return response.data
    }
    
   // return response.data
   

})

export const getOnePostById = createAsyncThunk('posts/getOnePostById', async () => {
    const response = await axios.get('http://10.0.2.2:8080/posts/1')
    return response.data

})

export const deletePost = createAsyncThunk('posts/deletePost', async () => {
    const response = await axios.delete('http://10.0.2.2:8080/posts/2')
    return response.data //id dönücek

})

export const createOnePost = createAsyncThunk('posts/createOnePost', async () => {
    const response = await axios.post('http://10.0.2.2:8080/posts')
    return response.data //name dönücek

})
export const updateOnePost = createAsyncThunk('posts/updateOnePost', async () => {
    const response = await axios.put('http://10.0.2.2:8080/posts/1')
    //id dönücek
    return response.data
})




