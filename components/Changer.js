import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function Changer() {

    const [choosen, setchoosen] = useState("question")

    const clicked=(e)=>{
        setchoosen(e)
    }

    return (
        <View style={styles.container} >

            <Pressable onPress={()=>clicked("question")} style={choosen == "question" ? [styles.question,styles.clicked] : styles.question} >
                <Text style={choosen == "question" ? [styles.text,styles.clickedtext] : styles.text} >QUESTİONS</Text>

            </Pressable>
            <Pressable onPress={()=>clicked("diary")} style={choosen == "diary" ? [styles.diary,styles.clicked] : styles.diary} >
                <Text style={choosen == "diary" ? [styles.text,styles.clickedtext] : styles.text}  >DİARY</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:8,
        justifyContent:"space-evenly",
        flexDirection:"row",
        
        
    },
    question:{
        flex:1,
        borderRadius:30,
        alignItems:"center",
        padding:12,
    },
    diary:{
        borderRadius:30,
        padding:12,
        flex:1,
        alignItems:"center"
    },
    text:{
        fontSize:16
    },
    clickedtext:{
        fontWeight:"800",
        color:"white"
    },
    clicked:{
        backgroundColor:"black",
    }
})