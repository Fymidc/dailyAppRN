import { View, Text, ScrollView, BackHandler, Alert } from 'react-native'
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
import { useIsFocused } from '@react-navigation/native'
import { getAllQuestions, getAllQuestionsByUserId } from '../reducers/QuestionReducer'
import { createOneLike, deleteOneLike, getAllLikes } from '../reducers/LikeReducer'
import { useRef } from 'react'


export default function HomeScreen({ navigation, route }) {
  //to prevent to go splash screen when use back button
  //we can add unsaved actions and ask are u sure?
  // useEffect(() => {
  //   navigation.addListener('beforeRemove',(e)=>{
  //     e.preventDefault()
  //   })
  // }, [navigation])

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
  const [length, setLength] = useState("");



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
      if (route.name === "Home") {
        backAction()
      }

      try {

        navigation.goBack()
      } catch (error) {
        console.log(error)
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
  const id = null
  const user = 1;

  const isfocused = useIsFocused();


  const data = {
    userid: 1,

  }
  useEffect(() => {
    if (isfocused) {
      dispatch(getAllPosts(user)),
        dispatch(getAlldiaries(user)),
        dispatch(getAllQuestionsByUserId(user))
    

    }
  dispatch(getAllLikes(data))
  }, [isfocused])


  
  
  const [plike, setplike] = useState(null)
  //like idsi değişmiyor 




  



  const ulikes = useRef(likes.like?.length)
  ulikes.current = likes.like?.length

  

//screen deki like lerın sayısı güncellenmiyor ve icon değişimleri

  // const likeAction = (id) => {
  //   setIsLiked(!liked)
  //   setplike(id)
  //   const ldata = {
  //     id: "",
  //     userid: 1,
  //     postid: id
  //   }

  //   console.log(id)
  //   const data = {
  //     userid: 1,
  //     postid: id
  //   }


  //   console.log("id", pliked.current)
  //   //console.log("likes", ulikes)
  //   dispatch(getAllLikes(data)).then(() => {
  //     if (!liked) {
  //       //console.log("create")
  //       dispatch(createOneLike(ldata))
  //     }
  //     else {
  //       //console.log("delete")

  //       dispatch(deleteOneLike(pliked.curren))
  //     }

  //   })


  // }
  // useEffect(() => {


  //   console.log("çalıştı")

  //   const likeControl = likes.like?.find(like => like.userId === 1)
  //   if (likeControl != null) {
  //     setLikeId(likeControl.id);
  //     //console.log("homedan gelen ", likeControl.id)
  //     setIsLiked(true)
  //   }

  // }, [likes])










  return (
    <View style={{ flex: 1, backgroundColor: "#001935" }} >
      <Header />
      <Changer route={route.name} handleClick={handleClick} />
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />

      <ScrollView alwaysBounceVertical={true} bounces={true} style={{ paddingHorizontal: 8, paddingVertical: 5 }} >
        {choosen == "question"
          ? questions.questions.map(val => <Question key={val.id} navigation={navigation} payload={val} />)
          : choosen == "diary" ?
            Object.values(diaries.diaries).map((val, index) => <Diary key={index} navigation={navigation} payload={val} />)
            : choosen == "post" ? posts.loading === true ? <Text>Loading...</Text> : Object.values(posts.posts).map((val, index) => <Post key={index} navigation={navigation} payload={val} likes={likes.like}  />) : choosen == "post"}


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