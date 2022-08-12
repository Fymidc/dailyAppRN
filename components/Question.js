import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Question() {
    return (
        <View style={styles.container} >
            <View style={styles.questionheader} >
                
                <Text style={styles.question} >benim soruma cevap vereceksin ibnenin evladı nasıl cevap vermessin</Text>
            </View>
            <View style={styles.bottom} >
                <Text style={styles.date} >00/00/00</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical:5,
        borderRadius:20,
        backgroundColor: "#f2ffff",
        overflow:"hidden"
    },
    questionheader:{
        padding:15,
        flexDirection:"row"
    },
    question:{
        paddingLeft:15,
        
        
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