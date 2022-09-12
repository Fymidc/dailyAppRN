import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getOneAnswerById } from '../reducers/AnswerReducer'

export default function Question(props) {

    const dispatch = useDispatch()

    const data ={
        userid:1,
        questionid:props.payload?.id
    }
    const handleclick =()=>{
        dispatch(getOneAnswerById(data))
        props.navigation.navigate("AnswerQuestion",{text:props.payload?.text,
                                                id:props.payload?.id})

    }

    return (
        <Pressable onPress={()=>handleclick()} style={styles.container} >
            <View style={styles.questionheader} >
                
                <Text style={styles.question} >{props.payload?.text}</Text>
            </View>
            <View style={styles.bottom} >
                <Text style={styles.date} >{props.payload?.date.slice(5)}</Text>
            </View>

            <View style={{ marginTop: 8, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />


        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical:5,
        borderRadius:20,
        backgroundColor:"white",
        overflow:"hidden"
    },
    questionheader:{
        padding:15,
        flexDirection:"row"
    },
    question:{
        paddingLeft:15,
        color:"black"
        
        
    },
    user:{
        fontWeight:"700"
    },
    date:{
        paddingLeft:15
    },
    bottom:{
        paddingBottom:5
    }
})