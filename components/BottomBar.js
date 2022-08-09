import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from 'react-native-vector-icons/Feather'

export default function BottomBar() {

    const [chosen, setchosen] = useState("home")

    const iconclick=(e)=>{
        setchosen(e)
        
    }

    console.log(chosen)

    return (
        <View style={styles.container} >

            <View style={{ padding: 18,flex:1}} >
                <Ionicons style={styles.tabicons} onPress={()=>iconclick("home")} color={chosen == "home" ? "white" : "#484848"} name='home'  size={20} />
            </View>
            <View style={{ padding: 18,flex:1 }} >
                <Ionicons style={styles.tabicons} onPress={()=>iconclick("compass")} color={chosen == "compass" ? "white" : "#484848"} name='compass' size={20} />
            </View>
            <View style={{ padding: 18,flex:1 }} >
                <Feather style={styles.tabicons} onPress={()=>iconclick("users")} color={chosen == "users" ? "white" : "#484848"} name='users' size={20} />
            </View>
            <View style={{ padding: 18,flex:1}} >
                <Ionicons style={styles.tabicons} onPress={()=>iconclick("notifications")} color={chosen == "notifications" ? "white" : "#484848"} name='notifications' size={20} />
            </View>
            <View style={{ padding: 18,flex:1 }} >
                <Ionicons style={styles.tabicons} onPress={()=>iconclick("settings")} color={chosen == "settings" ? "white" : "#484848"} name='settings' size={20} />
            </View>

        </View>
    )
}
const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    
    container: {
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        overflow:'hidden',
        width:width,
        justifyContent:"space-evenly",
        flexDirection: "row",
        backgroundColor: "black"
    },
    tabicons:{
        textAlign:"center"
    }
})