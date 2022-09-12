import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { useDispatch } from 'react-redux'



export default function Comment(props) {
    //delete feature later



    return (
        <View style={styles.container} >
            <TouchableOpacity activeOpacity={0.6} style={styles.questionheader} >
                <Text
                    style={[styles.user, { color: props.payload?.userName === props.username ? "red" : "black" }]}
                >{props.payload?.userName}
                    : <Text style={styles.question} >{props.payload?.text}</Text>
                </Text>

            </TouchableOpacity>




        </View>
    )
}



const styles = StyleSheet.create({
    container: {

        marginVertical: 5,
        borderRadius: 20,
        backgroundColor: "#ffff",
        overflow: "hidden",

    },
    questionheader: {
        flex: 1,

        padding: 15,
        flexDirection: "row"
    },
    question: {
        paddingHorizontal: 15,
        color: "black",
        fontWeight: "600",
        fontSize: 14

    },
    user: {
        fontWeight: "700",

        fontSize: 15
    },

})