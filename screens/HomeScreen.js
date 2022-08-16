import { View, Text, ScrollView, BackHandler, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Changer from '../components/Changer'
import Question from '../components/Question'
import Diary from '../components/Diary'
import Post from '../components/Post'
import BottomBar from '../components/BottomBar'
import { FloatingAction } from "react-native-floating-action";
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function HomeScreen({ navigation, route }) {
  //to prevent to go splash screen when use back button
  //we can add unsaved actions and ask are u sure?
  // useEffect(() => {
  //   navigation.addListener('beforeRemove',(e)=>{
  //     e.preventDefault()
  //   })
  // }, [navigation])

  const [choosen, setchoosen] = useState("question")

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
 const backAction = () => {
   setTimeout(() => {
     setExitApp(0);
   }, 1500);

   if (exitApp === 0) {
     setExitApp(exitApp + 1);

   } else if ( exitApp === 1) {
     BackHandler.exitApp();
     
   }
   return true;
 }


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress',()=>{
      if(route.name === "Home"){
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
      position: 1
    },
    {
      id: 2,
      text: "Add Diary",
      name: "bt_adddiary",
      position: 2
    }
  ]
  return (
    <View style={{ flex: 1,backgroundColor:"#fefbe8" }} >
      <Header />
      <Changer route={route.name} handleClick={handleClick} />
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />

      <ScrollView alwaysBounceVertical={true} style={{ paddingHorizontal: 8, paddingVertical: 5 }} >
        {choosen == "question" ? <Question /> : choosen == "diary" ? <Diary navigation={navigation} /> : <Post navigation={navigation} />}

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