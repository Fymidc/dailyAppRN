import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import BottomBar from '../components/BottomBar'
import Friends from '../components/Friends'

export default function FriendsScreen({navigation,route}) {
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={{fontSize:18,fontWeight:"800"}} >FRIENDS</Text>
            </View>
            <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />


            <ScrollView style={styles.friendsContainer} >
                <Friends/>
                <Friends/>
                <Friends/>
                <Friends/>

                <View style={{ paddingBottom: 10 }} />
            </ScrollView>



            <BottomBar route={route.name} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fefbe8"
    },
    header:{
        flexDirection:"row",
        justifyContent:"center",
        padding:25
    },
    friendsContainer:{
        flex:1
    }
})