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

export default function DiscoveryScreen({ navigation,route }) {
  //to prevent to go splash screen when use back button
  //we can add unsaved actions and ask are u sure?
  // useEffect(() => {
  //   navigation.addListener('beforeRemove',(e)=>{
  //     e.preventDefault()
  //   })
  // }, [navigation])
const [choosen, setchoosen] = useState("question")

const handleClick=(e)=>{
  
  setchoosen(e)
}
 
  return (
    <View style={{ flex: 1 ,backgroundColor:"#d5f4e6"}} >
      <Header header={"#Discover"} />
      <Changer route={route.name} handleClick={handleClick}/>
      <ScrollView alwaysBounceVertical={true} style={{ paddingHorizontal: 8, paddingVertical: 5 }} >
        {choosen == "question" ? <Post /> : <Diary discovery={"true"} />}
        
    
        <View style={{ paddingBottom: 10 }} />

      </ScrollView>
     
      <BottomBar route={route.name} navigation={navigation}/>

    </View >
  )
}