import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from 'react-native-vector-icons/Feather'
import RBSheet from "react-native-raw-bottom-sheet"
import { useRef } from 'react'

const BottomBar = ({ navigation, route }) => {

    const refRBSheet = useRef();

    const value = route
    const [chosen, setchosen] = useState(value)

    const iconclick = (e) => {
        setchosen(route)
        navigation.navigate(e)
    }




    return (
        <View style={styles.container} >

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType="slide"

                openDuration={800}
                closeDuration={500}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0,0.1)"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    },
                    container: {
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20
                    }
                }}
            >
                <View style={styles.settingContainer} >

                    <TouchableOpacity activeOpacity={0.7} style={styles.settingview} >
                        <Text style={styles.text} >Themes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.settingview} >
                        <Text style={styles.text} >Language</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.settingview} >
                        <Text style={styles.text} >Help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.settingview} >
                        <Text style={styles.text} >Sign out</Text>
                    </TouchableOpacity>

                </View>
            </RBSheet>

            <View style={{ padding: 18, flex: 1 }} >
                <Ionicons style={styles.tabicons} onPress={() => iconclick("Home")} color={chosen == "Home" ? "white" : "#484848"} name='home' size={20} />
            </View>
            <View style={{ padding: 18, flex: 1 }} >
                <Ionicons style={styles.tabicons} onPress={() => iconclick("Discovery")} color={chosen == "Discovery" ? "white" : "#484848"} name='compass' size={20} />
            </View>
            <View style={{ padding: 18, flex: 1 }} >
                <Feather style={styles.tabicons} onPress={() => iconclick("Friends")} color={chosen == "Friends" ? "white" : "#484848"} name='users' size={20} />
            </View>
            
            <View style={{ padding: 18, flex: 1 }} >
                <Ionicons style={styles.tabicons} onPress={() => refRBSheet.current.open()} color={chosen == "Settings" ? "white" : "#484848"} name='settings' size={20} />
            </View>

        </View>
    )
}
const width = Dimensions.get('window').width

const styles = StyleSheet.create({

    container: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        overflow: 'hidden',
        width: width,
        justifyContent: "space-evenly",
        flexDirection: "row",
        backgroundColor: "black",
        zIndex: 20
    },
    tabicons: {
        textAlign: "center"
    },
    settingContainer: {
        flex: 1,
        paddingTop:5
        
        
      },
      settingview:{
        
        backgroundColor: "white",
        
        padding: 10,
        paddingHorizontal: 30,
        marginHorizontal: 5,
       
        flexDirection: "row",
      },
      text:{
        color:"black",
        fontSize:16,
        
      }
})

export default memo(BottomBar);