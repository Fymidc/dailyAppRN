import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPosts } from '../reducers/PostReducer';
import { getAlldiaries } from '../reducers/DiaryReducer';
import { getAllQuestions } from '../reducers/QuestionReducer';

export default function Changer({ handleClick, route }) {

    const dispatch = useDispatch();
    const [choosen, setchoosen] = useState("post" )

    const clicked = (e) => {
        handleClick(e)
        setchoosen(e)
    }



    const id = null
    const user = 1;

   

    return (
        <View style={styles.container} >

            {route == "Discovery" ? <Pressable onPress={() => clicked("post")} style={choosen == "post" ? [styles.post, styles.clicked] : styles.post} >
                <Text style={choosen == "post" ? [styles.text, styles.clickedtext] : styles.text}  >POST</Text>
            </Pressable> : null}

            <Pressable onPress={() => clicked("diary")} style={choosen == "diary" ? [styles.diary, styles.clicked] : styles.diary} >
                <Text style={choosen == "diary" ? [styles.text, styles.clickedtext] : styles.text}  >DİARY</Text>
            </Pressable>

            {route == "Home" ? <Pressable onPress={() => clicked("post")} style={choosen == "post" ? [styles.post, styles.clicked] : styles.post} >
                <Text style={choosen == "post" ? [styles.text, styles.clickedtext] : styles.text}  >POST</Text>
            </Pressable> : null}
            {route == "UserScreen" ? <Pressable onPress={() => clicked("post")} style={choosen == "post" ? [styles.post, styles.clicked] : styles.post} >
                <Text style={choosen == "post" ? [styles.text, styles.clickedtext] : styles.text}  >POST</Text>
            </Pressable> : null}


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
        fontSize: 16,
        color: "white"
    },
    clickedtext: {
        fontWeight: "800",
        color: "black"
    },
    clicked: {
        backgroundColor: "white",
    }
})