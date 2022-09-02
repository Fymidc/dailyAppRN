import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityıcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Header(props) {
  return (
    <View style={styles.parent} >

      <View style={styles.user} >


        
        <MaterialCommunityıcons style={styles.icon} name='message-badge-outline' size={18} />

        <Text style={styles.username} >{props.header ? props.header : "Fatih"}</Text>

      </View>
      <View>
        <AntDesign style={styles.star} name='star' size={18} color="yellow" />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  star: {
    color: "yellow"
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
  },
  username: {
    paddingLeft: 10,
    fontWeight: "800",
    fontSize: 18,
    color:"white",
    letterSpacing:2
    
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",

    padding: 25,
    
  },
icon:{
  color:"white"
}

}) 