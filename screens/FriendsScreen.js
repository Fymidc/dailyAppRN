import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import BottomBar from '../components/BottomBar'
import Friends from '../components/Friends'


export default function FriendsScreen({navigation,route}) {
 
        
        const users = useSelector(user=>user.user)
  
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={{color:"white", letterSpacing:4, fontSize:19,fontWeight:"800"}} >FRIENDS</Text>
            </View>
            <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />


            <ScrollView style={styles.friendsContainer} >
                {users.loading === true ? <Text>loading...</Text> 
                : users.friends?.map((friend , index )=>  <Friends key={index} navigation={navigation} payload={friend} /> )  }
              

                <View style={{ paddingBottom: 10 }} />
            </ScrollView>



            <BottomBar route={route.name} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#001935"
    },
    header:{
        flexDirection:"row",
        justifyContent:"center",

        padding:20,
        
    },
    friendsContainer:{
        flex:1
    }
})