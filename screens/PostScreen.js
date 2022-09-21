import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createOnePost } from '../reducers/PostReducer'



export default function PostScreen({navigation}) {

  
  const dispatch = useDispatch()
  const [input, setinput] = useState("")
  const users = useSelector(user=>user.user)

   // console.log(input+input.length)
    const remained = 60-input.length

    const data = {
      id:"",
      text:input,
      date:"",
      userid:users.token?.userId
    }

    const sendPost =()=>{
        dispatch(createOnePost(data))
        navigation.navigate("Home")

    }

  return (
    <View style={styles.maincontainer} >
      <PotsHeader sendpost={sendPost} navigation={navigation} />
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />
      <View style={{ flexDirection: "column", padding: 8 }} >
        <Text> {remained}</Text>
      </View>
      <View style={{ paddingHorizontal: 15 }} >

        <TextInput style={{ fontSize: 16 }}
         onChangeText={setinput} 
         placeholder={"Ask me.."} 
         autoFocus={true} multiline 
         maxLength={60} 
      
         
         />
      </View>


    </View>
  )
}


const PotsHeader = (props) => {
  return (
    <View style={styles.container} >
      <View>
        <AntDesign onPress={()=>props.navigation.goBack()} name='closecircleo' size={20} />
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "800" }} >Add Post</Text>

      </View>
      <View>
        <AntDesign onPress={()=>props.sendpost()} name='checkcircleo' size={20} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,

  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    padding: 22

  }
})