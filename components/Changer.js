import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function Changer({ handleClick, route }) {

    const [choosen, setchoosen] = useState("question")

    const clicked = (e) => {
        handleClick(e)
        setchoosen(e)
    }


    return (
        <View style={styles.container} >

            <Pressable onPress={() => clicked("question")} style={choosen == "question" ? [styles.question, styles.clicked] : styles.question} >
                <Text style={choosen == "question" ? [styles.text, styles.clickedtext] : styles.text} >{route == "Discovery" ? "POSTS" : "QUESTİONS"}</Text>

            </Pressable>
            <Pressable onPress={() => clicked("diary")} style={choosen == "diary" ? [styles.diary, styles.clicked] : styles.diary} >
                <Text style={choosen == "diary" ? [styles.text, styles.clickedtext] : styles.text}  >DİARY</Text>
            </Pressable>

            {route == "Home" ? <Pressable onPress={() => clicked("post")} style={choosen == "post" ? [styles.post, styles.clicked] : styles.post} >
                <Text style={choosen == "post" ? [styles.text, styles.clickedtext] : styles.text}  >POST</Text>
            </Pressable> :null}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        justifyContent: "space-evenly",
        flexDirection: "row",


    },
    question: {
        flex: 1,
        borderRadius: 30,
        alignItems: "center",
        padding: 12,
    },
    diary: {
        borderRadius: 30,
        padding: 12,
        flex: 1,
        alignItems: "center"
    },
    post: {
        borderRadius: 30,
        padding: 12,
        flex: 1,
        alignItems: "center"
    },
    text: {
        fontSize: 16
    },
    clickedtext: {
        fontWeight: "800",
        color: "white"
    },
    clicked: {
        backgroundColor: "black",
    }
})