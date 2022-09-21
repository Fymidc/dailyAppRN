import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import Changer from '../components/Changer'

import Diary from '../components/Diary'
import Post from '../components/Post'
import BottomBar from '../components/BottomBar'

import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../reducers/PostReducer'
import { getAlldiaries } from '../reducers/DiaryReducer'

export default function UserScreen({ navigation, route }) {

  const dispatch = useDispatch();
  const [choosen, setchoosen] = useState("post")
  
  const handleClick = (e) => {
   
    setchoosen(e)
  }


  const posts = useSelector(post => post.post)
  const diaries = useSelector(diary => diary.diary)
  const users = useSelector(user => user.user)

  const likes = useSelector(like => like.like)

  const user = users.value?.id;

  


  useEffect(() => {

  dispatch(getAllPosts(user)),
  dispatch(getAlldiaries(user))
    

}, [])

const [following, setfollowing] = useState(false)


const chekifFollow=()=>{
  
  if(!users.loading){
    if(users.friendsid === undefined ){
      setfollowing(false)
    }
  const mfriend = users.friends.find(friend =>friend.id === users.value?.id )
 
   
   if(mfriend != null){
     setfollowing(true)
   }else{
    setfollowing(false)

   }
  }
   
 }
useEffect(() => {  
      chekifFollow()
     }, [users.friends])



  return (
    <View style={{ flex: 1, backgroundColor: "#001935" }} >
      <UserHeader setfollowing={setfollowing} following={following} username={users.value?.userName} userid={users.value?.id} />
      <Changer route={route.name} handleClick={handleClick} />
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />

      <ScrollView alwaysBounceVertical={true} bounces={true} style={{ paddingHorizontal: 8, paddingVertical: 5 }} >
        {choosen == "diary" ?
          Object.values(diaries.diaries)?.map((val, index) => <Diary key={index} navigation={navigation} payload={val} />)
          : choosen == "post" ? posts.loading === true ? <Text>Loading...</Text> : Object.values(posts.posts)?.map((val, index) => <Post key={index} navigation={navigation} payload={val} likes={likes.like} />) : null}


        <View style={{ paddingBottom: 10 }} />

      </ScrollView>


      <BottomBar route={route.name} navigation={navigation} />

    </View >
  )
}