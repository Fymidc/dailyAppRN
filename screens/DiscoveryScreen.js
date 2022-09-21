import { View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Changer from '../components/Changer'
import Diary from '../components/Diary'
import BottomBar from '../components/BottomBar'
import Post from '../components/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../reducers/PostReducer'
import { getAlldiaries } from '../reducers/DiaryReducer'
import { useIsFocused } from '@react-navigation/native'
import { getAlluserFriends } from '../reducers/UserReducer'
import Loading from '../components/Loading'

import AsyncStorage from '@react-native-async-storage/async-storage';


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
const [user, setuser] = useState(null)

const handleClick=(e)=>{
  
  setchoosen(e)
}

const  getUserData =async ()=>{
  try {
    const value = await AsyncStorage.getItem('Current_User')
    if(value !== null) {
      setuser(value)
    }
  } catch (error) {
    console.log(error)
  }
}



const id = null

const data ={
  userid:user
}

const isfocused = useIsFocused();

useEffect(() => {
  if(isfocused){
    getUserData()
     dispatch(getAllPosts(id)),
  dispatch(getAlldiaries(id))
  dispatch(getAlluserFriends(data))
  }
 

}, [isfocused])
const posts = useSelector(post=>post.post)
  const diaries = useSelector(diary=>diary.diary)

  const amount =[
    1,2,3
  ]

  return (
    <View style={{ flex: 1 ,backgroundColor:"#001935"}} >
      <Header route={route.name} header={"#Discover"} />
      <Changer route={route.name} handleClick={handleClick}/>
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />

      <ScrollView alwaysBounceVertical={true} style={{ paddingHorizontal: 8, paddingVertical: 5 }} >
        {choosen == "post" 
        ? posts.loading === true ? amount.map(a=> <Loading key={a} />) :  posts.posts.map(val=> <Post key={val.id} navigation={navigation} payload={val} /> )
        : diaries.loading === true ? amount.map(a=> <Loading key={a} />) : Object.values(diaries.diaries).map((val,index)=> <Diary key={index} navigation={navigation} payload ={val} discovery={"true"} />  )}
        
    
        <View style={{ paddingBottom: 10 }} />

      </ScrollView>
     
      <BottomBar route={route.name} navigation={navigation}/>

    </View >
  )
}