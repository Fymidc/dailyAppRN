import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removefriends } from '../reducers/UserReducer'

export default function Friends(props) {

  const dispatch = useDispatch()

  const deleteFriend=(id)=>{
    dispatch(removefriends(id))
   
  }

  const handleNavigate =()=>{
    props.navigation.navigate('UserScreen',{userid:props.payload?.id,
                                              username:props.payload?.userName})
  }

  return (
    <View style={styles.container} >
      <TouchableOpacity  onPress={()=>handleNavigate()} activeOpacity={0.8} >

      <Text style={styles.texts} >{props.payload?.userName}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>deleteFriend(props.payload?.id)} activeOpacity={0.8} style={styles.textbutton} >
        <Text style={{color:"white",fontSize:15}} >
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fefbd8",
    borderRadius: 15,
    padding: 10,
    paddingHorizontal: 40,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
  },
  texts: {
    color: "black",
    fontSize:16,
    fontWeight:"800",
    letterSpacing:2,
   
  },
  textbutton:{
    backgroundColor:"orange",
    width:100,
    height:30,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10
    
  }
})