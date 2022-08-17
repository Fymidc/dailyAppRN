import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Notifications() {

  const text = "syok arrttık nasıl boyle olur be"
const commented = "commented on your post  "
  console.log(text.length)

  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container} >
      <Text style={{fontWeight:"800"}} >samme</Text>
      <Text style={{paddingHorizontal:10}} >{commented + "'"+ text.slice(0,18)+ "'"+".."}</Text>
    </TouchableOpacity>
  )
}

//unread notification will be blue as we see after click on it 
//bg color will be #fefbd8 

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#87bdd8",
        borderRadius:15,
        padding:20,
        paddingHorizontal:30,
        marginHorizontal:10,
        marginVertical:10,
        flexDirection:"row",
        
    }
})