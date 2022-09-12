import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Changer from '../components/Changer'
import Question from '../components/Question'
import Diary from '../components/Diary'
import BottomBar from '../components/BottomBar'
import { FloatingAction } from "react-native-floating-action";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Post from '../components/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../reducers/PostReducer'
import { getAlldiaries } from '../reducers/DiaryReducer'
import { getAllLikes } from '../reducers/LikeReducer'

export default function DiscoveryScreen({ navigation,route }) {
  //to prevent to go splash screen when use back button
  //we can add unsaved actions and ask are u sure?
  // useEffect(() => {
  //   navigation.addListener('beforeRemove',(e)=>{
  //     e.preventDefault()
  //   })
  // }, [navigation])
  const dispatch = useDispatch();
const [choosen, setchoosen] = useState("post")

const handleClick=(e)=>{
  
  setchoosen(e)
}

const id = null
const user = 1;

useEffect(() => {
  dispatch(getAllPosts(id)),
  dispatch(getAlldiaries(id))

}, [])
const posts = useSelector(post=>post.post)
  const diaries = useSelector(diary=>diary.diary)

  return (
    <View style={{ flex: 1 ,backgroundColor:"#001935"}} >
      <Header header={"#Discover"} />
      <Changer route={route.name} handleClick={handleClick}/>
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />

      <ScrollView alwaysBounceVertical={true} style={{ paddingHorizontal: 8, paddingVertical: 5 }} >
        {choosen == "post" 
        ?  posts.posts.map(val=> <Post key={val.id} navigation={navigation} payload={val} /> )
        : Object.values(diaries.diaries).map((val,index)=> <Diary key={index} navigation={navigation} payload ={val} discovery={"true"} />  )}
        
    
        <View style={{ paddingBottom: 10 }} />

      </ScrollView>
     
      <BottomBar route={route.name} navigation={navigation}/>

    </View >
  )
}