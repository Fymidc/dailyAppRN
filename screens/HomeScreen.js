import { View, ScrollView, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Changer from '../components/Changer'
import Question from '../components/Question'
import Diary from '../components/Diary'
import Post from '../components/Post'
import BottomBar from '../components/BottomBar'
import { FloatingAction } from "react-native-floating-action";
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../reducers/PostReducer'
import { getAlldiaries } from '../reducers/DiaryReducer'
import {  useIsFocused } from '@react-navigation/native'
import { getAllQuestionsByUserId } from '../reducers/QuestionReducer'
import { getAllLikes } from '../reducers/LikeReducer'
import { useRef } from 'react'
import Loading from '../components/Loading'

import AsyncStorage from '@react-native-async-storage/async-storage';



export default function HomeScreen({ navigation, route }) {
  //to prevent to go splash screen when use back button
  //we can add unsaved actions and ask are u sure?

  const dispatch = useDispatch();
  const [choosen, setchoosen] = useState("post")

  const handleClick = (e) => {
    console.log(e)
    setchoosen(e)
  }

  const handleSelectedAction = (name) => {
    if (name == "bt_askquestion") {
      navigation.navigate("AddPost")
    } else if (name == "bt_adddiary") {
      navigation.navigate("AddDiary")
    } else { return null } 1

  }

  const [exitApp, setExitApp] = useState(0);
  const [user, setuser] = useState(null);
  const [userName, setuserName] = useState(null);



  const posts = useSelector(post => post.post)
  const diaries = useSelector(diary => diary.diary)
  const questions = useSelector(question => question.question)
  const likes = useSelector(like => like.like)

  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 1500);

    if (exitApp === 0) {
      setExitApp(exitApp + 1);

    } else if (exitApp === 1) {
      BackHandler.exitApp();

    }
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (isfocused === true) {
        
        backAction()
      }else{

        try {
          console.log("try çalıştı")
          navigation.goBack()
        } catch (error) {
          console.log(error)
        }
      }

      return () => BackHandler.removeEventListener("hardwareBackPress")
    })

  })




  const action = [
    {
      id: 1,
      text: "Ask Question",
      name: "bt_askquestion",
      icon: require("../assets/plus.png"),
      position: 1
    },
    {
      id: 2,
      text: "Add Diary",
      name: "bt_adddiary",
      icon: require("../assets/plus.png"),
      position: 2
    }
  ]


  const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem('Current_User')
      const namevalue = await AsyncStorage.getItem('Current_User_Name')
      if (value !== null && namevalue !== null) {
        setuser(value)
        setuserName(namevalue)
      }
    } catch (error) {
      console.log(error)
    }
  }


  const id = null
  //const user = 1;
  console.log("homeden gelen user ", user)

  const isfocused = useIsFocused();


  const data = {
    userid: user,

  }
  useEffect(() => {
    getUserData()
    console.log("useeffecten gelen val ", user)

    if (isfocused && user != null) {
      console.log("useeffecten gelen val2 ", user)

      dispatch(getAllPosts(user)),
        dispatch(getAlldiaries(user)),
        dispatch(getAllQuestionsByUserId(user))

    }

    dispatch(getAllLikes(data))
  }, [isfocused, user])



  const ulikes = useRef(likes.like?.length)
  ulikes.current = likes.like?.length

  const amount = [
    1, 2, 3
  ]

  return (
    <View style={{ flex: 1, backgroundColor: "#001935" }} >
      <Header username={userName} />
      <Changer route={route.name} handleClick={handleClick} />
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />

      <ScrollView alwaysBounceVertical={true} bounces={true} style={{ paddingHorizontal: 8, paddingVertical: 5 }} >
        {choosen == "diary" ?
            diaries.loading === true ? amount.map(a => <Loading key={a} />)
              : Object.values(diaries.diaries).map((val, index) => <Diary key={index} navigation={navigation} payload={val} />)
            : choosen == "post" ? posts.loading === true ? amount.map(a => <Loading key={a} />) : Object.values(posts.posts).map((val, index) => <Post key={index} navigation={navigation} payload={val} likes={likes.like} />) : choosen == "post"}


        <View style={{ paddingBottom: 10 }} />

      </ScrollView>
      <View  >

        <FloatingAction
          color='black'
          actions={action}

          onPressItem={name => {
            handleSelectedAction(name)
          }}
          key={action}
        />
      </View>
      <BottomBar route={route.name} navigation={navigation} />

    </View >
  )
}