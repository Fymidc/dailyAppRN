import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityıcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import { addFriends } from '../reducers/UserReducer'

export default function UserHeader(props) {

  const dispatch = useDispatch()

  const data ={
    userid:1,  //auth sonrası auth olan userid sini ekle
    friendsid:props.userid
  }

  const addfriend =()=>{
    dispatch(addFriends(data))
    //console.log("add friends",props.userid)
  }

  //console.log("userfriends" , props.friends.find(friend=>friend.id))
  return (
    <View style={styles.parent} >

      <View style={styles.user} >


        
        <MaterialCommunityıcons style={styles.icon} name='message-badge-outline' size={18} />

        <Text style={styles.username} >{props.username}</Text>

      </View>
      <TouchableOpacity onPress={()=>addfriend()} activeOpacity={0.8} style={styles.followbutton}>
       {props.friends.find(friend=>friend.id === props.userid) ? null 
       :<AntDesign style={styles.star} name='plus' size={18} color="yellow" /> }
        
        <Text style={{color:"white",fontSize:15,fontWeight:"800"}} >{props.friends.find(friend=>friend.id === props.userid) ? "Following" : "Follow"}</Text>
      </TouchableOpacity>
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
},
followbutton:{
  flexDirection:"row" ,
 
  width:80,
  height:30,
  alignItems:"center",
  justifyContent:"space-around"
}

}) 