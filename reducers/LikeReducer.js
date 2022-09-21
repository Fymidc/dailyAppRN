import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    like: [],
    loading:false
}


export const likeReducer = createSlice({
    name: 'like',
    initialState,
    reducers: { },

    extraReducers(builder) {
        // builder.addCase(fetchTodo.pending, (state, action) => {
        //     state.isLoading = true;
        //     console.log("Start loading");
        //   });
      
        builder.addCase(getAllLikes.fulfilled, (state, action) => {

            return {
                ...state,
                like: action.payload
            }

        })

        builder.addCase(getAllLikes.pending, (state, action) => {

            state.loading=true;

        })

        

        builder.addCase(deleteOneLike.fulfilled, (state, action) => {

            return {
                ...state.like,
                like: state.like.filter(like => like.id !== action.payload.id)
            }
        })

        builder.addCase(createOneLike.fulfilled, (state, action) => {

            return {
                ...state.like,
                like: action.payload
            }
        })
        
        
      

       
    }

})

export default likeReducer.reducer;




export const getAllLikes = createAsyncThunk('like/getAllLikes', async (data) => {

    const userid = data.userid;
    const postid = data.postid;
    
    if(userid && postid){

        const response = await axios.get(`https://diary-apps.herokuapp.com/likes?userid=${userid}&postid=${postid}`)
        return response.data
    }else if(userid) {
        const response = await axios.get(`https://diary-apps.herokuapp.com/likes?userid=${userid}`)
        return response.data
    }else{
        const response = await axios.get(`https://diary-apps.herokuapp.com/likes`)
        return response.data
    }


})

export const deleteOneLike = createAsyncThunk('like/deleteOneLike', async (id) => {
   //console.log("delete like reducer",id) 
    const response = await axios.delete(`https://diary-apps.herokuapp.com/likes/${id}`)
    return response.data //id dönücek

})

export const createOneLike = createAsyncThunk('like/createOneLike', async (data) => {
    //console.log("create çalıştı")
    const response = await axios.post('https://diary-apps.herokuapp.com/likes',data)
    return response.data //name dönücek
    
})



