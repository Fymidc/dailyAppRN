import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function EditScreen() {


  return (
    <View style={styles.maincontainer} >
      <DiaryHeader />
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />
      <KeyboardAvoidingView  behavior='padding' keyboardVerticalOffset={60} >
        <ScrollView  style={{ paddingHorizontal: 15 }} >



          <TextInput style={{ fontSize: 16, justifyContent: "flex-start" }} 
          
          autoFocus={true} multiline={true}

          />

        </ScrollView>
      </KeyboardAvoidingView>

    </View>
  )
}


const DiaryHeader = () => {
  return (
    <View style={styles.container} >
      <View>
        <AntDesign name='closecircleo' size={20} />
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "800" }} >Edit</Text>

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