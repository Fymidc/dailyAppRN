import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function PostScreen() {

  

  const [input, setinput] = useState("")

  
    console.log(input+input.length)
    const remained = 60-input.length

  return (
    <View style={styles.maincontainer} >
      <PotsHeader />
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />
      <View style={{ flexDirection: "column", padding: 8 }} >
        <Text> {remained}</Text>
      </View>
      <View style={{ paddingHorizontal: 15 }} >

        <TextInput style={{ fontSize: 16 }} onChangeText={setinput} placeholder={"Ask me.."} autoFocus={true} multiline maxLength={60} />
      </View>


    </View>
  )
}


const PotsHeader = () => {
  return (
    <View style={styles.container} >
      <View>
        <AntDesign name='closecircleo' size={20} />
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "800" }} >Add Post</Text>

      </View>
      <View>
        <AntDesign name='checkcircleo' size={20} />
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