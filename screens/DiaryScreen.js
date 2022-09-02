import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import { createOneDiary } from '../reducers/DiaryReducer';

export default function DiaryScreen({navigation}) {

  const dispatch = useDispatch();
  const [input, setinput] = useState("")

  const data = {
    id:"",
    text:input,
    date:"",
    userid:"1",
    ishidden:"false"
  }

  const sendDiary =()=>{
      dispatch(createOneDiary(data))
      navigation.navigate("Home")

  }

  return (
    <View style={styles.maincontainer} >
      <DiaryHeader sendDiary={sendDiary} navigation={navigation} />
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />
      <KeyboardAvoidingView  behavior='padding' keyboardVerticalOffset={60} >
        <ScrollView  style={{ paddingHorizontal: 15 }} >



          <TextInput style={{ fontSize: 16, justifyContent: "flex-start" }} 
           onChangeText={setinput} 
          placeholder={"Tell me what happened today?"} 
          autoFocus={true} multiline={true}

          />

        </ScrollView>
      </KeyboardAvoidingView>

    </View>
  )
}


const DiaryHeader = (props) => {
  return (
    <View style={styles.container} >
      <View>
        <AntDesign onPress={()=>props.navigation.goBack()} name='closecircleo' size={20} />
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "800" }} >Add Diary</Text>

      </View>
      <View>
        <AntDesign onPress={()=>props.sendDiary()} name='checkcircleo' size={20} />
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