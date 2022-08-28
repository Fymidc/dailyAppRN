import { combineReducers } from "@reduxjs/toolkit"
import  answerReducer  from "./AnswerReducer"
import  commentReducer  from "./CommentReducer"
import  diaryReducer  from "./DiaryReducer"
import  likeReducer  from "./LikeReducer"
import  postReducer from "./PostReducer"
import  userReducer  from "./UserReducer"


const rootReducer = combineReducers({
    user: userReducer,
    post:postReducer,
    diary:diaryReducer,
    answer:answerReducer,
    like:likeReducer,
    comment:commentReducer,
})

export default rootReducer