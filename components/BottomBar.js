import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RBSheet from "react-native-raw-bottom-sheet"
import { useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const BottomBar = ({ navigation, route }) => {

    //link to email need to be checked on real device
    const [user, setuser] = useState(null)

    const refRBSheet = useRef();

    const value = route
    const [chosen, setchosen] = useState(value)

    const iconclick = (e) => {
        setchosen(route)
        navigation.navigate(e)
    }


    const removeUserData = async () => {
        try {
            await AsyncStorage.removeItem('Current_User')
            await AsyncStorage.removeItem('Current_User_Name')

            setuser(null)

        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = () => {
        removeUserData()

        if (user === null) {
            navigation.navigate('Splash')
        }
        console.log("logout")
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
                    <TouchableOpacity onPress={() => Linking.openURL('mailto:fatih@example.com')} activeOpacity={0.7} style={styles.settingview} >
                        <Ionicons name='mail-outline' size={16} color="black" />
                        <Text style={styles.text} >Contact us</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity onPress={() => handleLogout()} activeOpacity={0.7} style={styles.settingview} >
                        <AntDesign name='logout' size={16} color="black" />
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
        paddingTop: 5


    },
    settingview: {

        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
        paddingHorizontal: 30,
        marginHorizontal: 5,

        flexDirection: "row",
    },
    text: {
        color: "black",
        fontSize: 16,
        paddingHorizontal: 10

    }
})

export default memo(BottomBar);