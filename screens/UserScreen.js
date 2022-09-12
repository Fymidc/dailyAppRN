import { View, Text, ScrollView, BackHandler, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import Changer from '../components/Changer'
import Question from '../components/Question'
import Diary from '../components/Diary'
import Post from '../components/Post'
import BottomBar from '../components/BottomBar'
import { FloatingAction } from "react-native-floating-action";
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../reducers/PostReducer'
import { getAlldiaries } from '../reducers/DiaryReducer'
import { useIsFocused } from '@react-navigation/native'
import { getAllQuestions, getAllQuestionsByUserId } from '../reducers/QuestionReducer'
import { createOneLike, deleteOneLike, getAllLikes } from '../reducers/LikeReducer'
import { useRef } from 'react'
import { getAlluserFriends } from '../reducers/UserReducer'


export default function UserScreen({ navigation, route }) {

  const dispatch = useDispatch();
  const [choosen, setchoosen] = useState("post")

  const { userid, username } = route.params;

  const handleClick = (e) => {
    console.log(e)
    setchoosen(e)
  }



  const [exitApp, setExitApp] = useState(0);
  const [length, setLength] = useState("");



  const posts = useSelector(post => post.post)
  const diaries = useSelector(diary => diary.diary)
  const users = useSelector(user => user.user)

  const likes = useSelector(like => like.like)

  console.log("posts",posts.posts)

//console.log(likes.like)
  const id = null
  const user = userid;

  const data = {
    userid: 1,

  }
  useEffect(() => {

    dispatch(getAllPosts(user)),
      dispatch(getAlldiaries(user)),
      dispatch(getAlluserFriends(data))
    //dispatch(getAllLikes(data))
  }, [])





  const [plike, setplike] = useState(null)
  //like idsi değişmiyor 


  const ulikes = useRef(likes.like?.length)
  ulikes.current = likes.like?.length





  return (
    <View style={{ flex: 1, backgroundColor: "#001935" }} >
      <UserHeader friends={users.friends} username={username} userid={userid} />
      <Changer route={route.name} handleClick={handleClick} />
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />

      <ScrollView alwaysBounceVertical={true} bounces={true} style={{ paddingHorizontal: 8, paddingVertical: 5 }} >
        {choosen == "diary" ?
          Object.values(diaries.diaries).map((val, index) => <Diary key={index} navigation={navigation} payload={val} />)
          : choosen == "post" ? posts.loading === true ? <Text>Loading...</Text> : Object.values(posts.posts).map((val, index) => <Post key={index} navigation={navigation} payload={val} likes={likes.like} />) : null}


        <View style={{ paddingBottom: 10 }} />

      </ScrollView>


      <BottomBar route={route.name} navigation={navigation} />

    </View >
  )
}