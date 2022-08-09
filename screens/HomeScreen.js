import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Changer from '../components/Changer'
import Question from '../components/Question'
import Diary from '../components/Diary'
import BottomBar from '../components/BottomBar'
import { FloatingAction } from "react-native-floating-action";
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function HomeScreen() {

  const action=[
    {
      id:1,
      text :"Ask Question",
      name:"bt_askquestion",
      position : 1
    },
    {
      id:2,
      text :"Add Diary",
      name:"bt_adddiary",
      position:2
    }
  ]
  return (
    <View style={{ flex: 1 }} >
      <Header />
      <Changer />
      <ScrollView alwaysBounceVertical={true} style={{ paddingHorizontal: 8, paddingVertical: 5 }} >
        {/* <Question /> */}
        <Diary />
        <Diary />
        <Diary />
        <Diary />
        <Diary />
        <Diary />
        <Diary />
        <Diary />
        <Diary />
        <Diary />
        <Diary />

        <View style={{ paddingBottom: 10 }} />
      
      </ScrollView>
      <View  >

      <FloatingAction
      color='black'
      actions={action}
      onPressItem={name=>{
        console.log("selected"+name)
      }}
      key={action}
      />
      </View>
      <BottomBar />
      
    </View >
  )
}