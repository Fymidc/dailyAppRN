import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Friends() {
  return (
    <View style={styles.container} >
      <Text>Friends</Text>
      <Text>Remove</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ececec",
        borderRadius:15,
        padding:20,
        paddingHorizontal:40,
        marginHorizontal:10,
        marginVertical:10,
        flexDirection:"row",
        justifyContent:"space-between"
    }
})