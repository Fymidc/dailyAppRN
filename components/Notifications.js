import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Notifications() {

  const text = "syok arrttık nasıl boyle olur be"
const commented = "commented on your post  "
  console.log(text.length)

  return (
    <View style={styles.container} >
      <Text style={{fontWeight:"800"}} >samme</Text>
      <Text style={{paddingHorizontal:10}} >{commented + "'"+ text.slice(0,18)+ "'"+".."}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ececec",
        borderRadius:15,
        padding:20,
        paddingHorizontal:30,
        marginHorizontal:10,
        marginVertical:10,
        flexDirection:"row",
        
    }
})