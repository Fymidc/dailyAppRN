import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, {  memo, useEffect, useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from 'react-native-vector-icons/Feather'

const BottomBar=({navigation,route}) =>{

    const value = route
    const [chosen, setchosen] = useState(value)
   
    const iconclick=(e)=>{
        setchosen(route)
        navigation.navigate(e)
     }
    
   
    

    return (
        <View style={styles.container} >

            <View style={{ padding: 18,flex:1}} >
                <Ionicons style={styles.tabicons} onPress={()=>iconclick("Home") } color={chosen == "Home" ? "white" : "#484848"} name='home'  size={20} />
            </View>
            <View style={{ padding: 18,flex:1 }} >
                <Ionicons style={styles.tabicons} onPress={()=>iconclick("Discovery")} color={chosen == "Discovery" ? "white" : "#484848"} name='compass' size={20} />
            </View>
            <View style={{ padding: 18,flex:1 }} >
                <Feather style={styles.tabicons} onPress={()=>iconclick("Friends")} color={chosen == "Friends" ? "white" : "#484848"} name='users' size={20} />
            </View>
            <View style={{ padding: 18,flex:1}} >
                <Ionicons style={styles.tabicons} onPress={()=>iconclick("Notifications")} color={chosen == "Notifications" ? "white" : "#484848"} name='notifications' size={20} />
            </View>
            <View style={{ padding: 18,flex:1 }} >
                <Ionicons style={styles.tabicons} onPress={()=>iconclick("Settings")} color={chosen == "Settings" ? "white" : "#484848"} name='settings' size={20} />
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
        backgroundColor: "black",
        zIndex:20
    },
    tabicons:{
        textAlign:"center"
    }
})

export default memo(BottomBar);