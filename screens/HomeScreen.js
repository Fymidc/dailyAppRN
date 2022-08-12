import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Changer from '../components/Changer'
import Question from '../components/Question'
import Diary from '../components/Diary'
import BottomBar from '../components/BottomBar'
import { FloatingAction } from "react-native-floating-action";
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function HomeScreen({navigation,route}) {
//to prevent to go splash screen when use back button
//we can add unsaved actions and ask are u sure?
  // useEffect(() => {
  //   navigation.addListener('beforeRemove',(e)=>{
  //     e.preventDefault()
  //   })
  // }, [navigation])
  
  const [choosen, setchoosen] = useState("question")

const handleClick=(e)=>{
  console.log(e)
  setchoosen(e)
}

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
      <Changer route={route.name}  handleClick={handleClick} />
      <ScrollView alwaysBounceVertical={true} style={{ paddingHorizontal: 8, paddingVertical: 5 }} >
       {choosen == "question" ? <Question /> : choosen == "diary" ? <Diary /> : <Text>POSTLAR</Text>}
      

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
      <BottomBar route={route.name} navigation={navigation} />
      
    </View >
  )
}