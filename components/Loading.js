import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container} >
            <View style={styles.questionheader} >

                <View >
                    <View style={styles.user} ></View>
                </View>

                <View style={styles.question} ></View>
            </View>


            <View style={styles.bottom} >
                <View style={{ flexDirection: "row", alignItems: "center", alignItems: "center" }} >

                    <View style={styles.date} ></View>
                </View>
                <View style={{marginRight:20, flexDirection: "row", alignItems: "center", paddingHorizontal: 10, justifyContent: "flex-end", width: 140,backgroundColor:"rgba(153, 158, 163,0.2)" ,height:30}} >
                    <View style={{ flexDirection: "row" }} >
                        <View style={{ paddingHorizontal: 5 }} ></View>
                    </View>



                    <View style={{ flexDirection: "row" }} >
                        
                        <View style={{ paddingHorizontal: 5 }} ></View>
                    </View>
                </View>
            </View>

        </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        borderRadius: 20,
        backgroundColor:"rgba(153, 158, 163,0.1)",
        overflow: "hidden",
        height: 110
    },
    questionheader: {
        padding: 15,
        flexDirection: "row",
       
    },
    question: {
        paddingHorizontal: 15,
        color: "black",
        backgroundColor:"rgba(153, 158, 163,0.2)",
        width:265,
        height:40


    },
    user: {
        fontWeight: "700",
        color: "black",
        backgroundColor:"rgba(153, 158, 163,0.2)",
        width:100,
        height:40
    },
    date: {
        marginLeft: 25,
        backgroundColor:"rgba(153, 158, 163,0.2)",
        width:100,
        height:25

    },
    bottom: {
        flexDirection: "row",
        paddingBottom: 5,
        flex: 1,
        justifyContent: "space-between"
    }
})