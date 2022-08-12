import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Post() {
    return (
        <View style={styles.container} >
            <View style={styles.questionheader} >
                <Text style={styles.user} >Fatih</Text>
                <Text style={styles.question} >Bu benim ilk Postum merhaba nasıl hayat nasıl gidiyor </Text>
            </View>


            <View style={styles.bottom} >
                <View style={{flexDirection:"row",alignItems:"center",alignItems:"center"}} >

                    <Text style={styles.date} >00/00/00</Text>
                </View>
                <View style={{ flexDirection: "row",alignItems:"center", paddingHorizontal: 20, justifyContent: "space-around", width: 180 }} >
                    <View style={{ flexDirection: "row" }} >
                        <AntDesign name='upcircleo' size={18} />
                        <Text style={{ paddingHorizontal: 5 }} >15</Text>
                    </View>

                    <View style={{ flexDirection: "row" }} >
                        <AntDesign name='downcircleo' size={18} />
                        <Text style={{ paddingHorizontal: 5 }} >05</Text>
                    </View>

                    <View style={{ flexDirection: "row" }} >
                        <EvilIcons style={styles.comment} name='comment' size={25} />
                        <Text style={{ paddingHorizontal: 5 }} >08</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        borderRadius: 20,
        backgroundColor: "#f2ffff",
        overflow: "hidden",
        height: 110
    },
    questionheader: {
        padding: 15,
        flexDirection: "row"
    },
    question: {
        paddingHorizontal: 15,


    },
    user: {
        fontWeight: "700"
    },
    date: {
        paddingLeft: 15,
        
    },
    bottom: {
        flexDirection: "row",
        paddingBottom: 5,
        flex: 1,
        justifyContent: "space-between"
    }
})