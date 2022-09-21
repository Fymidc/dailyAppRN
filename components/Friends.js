import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAlluserFriends, getOneUserfromid, removefriends } from '../reducers/UserReducer'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Friends(props) {

  const [following, setfollowing] = useState(true)
const user = useSelector(user=>user.user)

  const dispatch = useDispatch()

  

  const deleteFriend = (id) => {
    const data = {
      userid: users.token?.userId,
      friendsid:id
  }
    dispatch(removefriends(data)).then(()=>{
      dispatch(getAlluserFriends(data))
    })

  }

  const handleNavigate = () => {
    dispatch(getOneUserfromid(props.payload?.id))
    props.navigation.navigate('UserScreen')
  }

  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={() => handleNavigate()} activeOpacity={0.8} >

        <Text style={styles.texts} >{props.payload?.userName}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteFriend(props.payload?.id)} activeOpacity={0.8} style={styles.textbutton} >
        <Text style={{ color: "white", fontSize: 15 }} >
          {following ? "Remove" : "Removed" }
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
    alignItems: "center",
  },
  texts: {
    color: "black",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 2,

  },
  textbutton: {
    backgroundColor: "orange",
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10

  }
})