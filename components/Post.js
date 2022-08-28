import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Post(props) {

    const gotoDetail=()=>{
        props.navigation.navigate('Detail')
    }

  

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={()=>gotoDetail()}  activeOpacity={0.6} style={styles.questionheader} >
                <Text style={styles.user} >{props.payload?.username}</Text>
                <Text style={styles.question} >{props.payload?.text}</Text>
            </TouchableOpacity>


            <View style={styles.bottom} >
                <View style={{flexDirection:"row",alignItems:"center",alignItems:"center"}} >

                    <Text style={styles.date} >{props.payload?.date.slice(5)}</Text>
                </View>
                <View style={{ flexDirection: "row",alignItems:"center", paddingHorizontal:10,justifyContent: "flex-end", width: 180 }} >
                    <View style={{ flexDirection: "row" }} >
                        <AntDesign name='hearto' size={18} />
                        <Text style={{ paddingHorizontal: 5 }} >15</Text>
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
        backgroundColor: "#fefbd8",
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