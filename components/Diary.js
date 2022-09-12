import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import React, { useState } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useDispatch } from 'react-redux'
import { updateOneDiary } from '../reducers/DiaryReducer'
import { getAllCommentsDiary } from '../reducers/CommentReducer'

export default function Diary(props) {

    

    const dispatch = useDispatch();
    //hidden 
    const [visible, setvisible] = useState(true)

    const tdata ={
        id:props.payload?.id,
        ishidden:"false",
    }
    const fdata ={
        id:props.payload?.id,
        ishidden :"true"
    }
    // const id =  props.payload?.id
    const isvisible = () => {
       
        setvisible(!visible)
        if(visible === false){
             dispatch(updateOneDiary(tdata))
            
        }else {
            dispatch(updateOneDiary(fdata))
        }
    }

    const text = props.payload.text

    const gotoDetail=(id)=>{
        dispatch(getAllCommentsDiary(id))
        props.navigation.navigate('Detail',{ username : props.payload?.username,
            text :props.payload?.text,
                id:props.payload?.id,
                ishidden:props.payload?.ishidden})
    }

   
    return (
        <TouchableOpacity onPress={()=>gotoDetail(props.payload?.id)} activeOpacity={0.6} style={styles.container} >
            <View style={styles.diaryheader} >
                <Text style={styles.user} >{props.payload?.username}</Text>
                <Text style={styles.diary} >{text?.length > 18 ? text.substring(0, 45) + "..." : text}</Text>
            </View>

            <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between" }} >
                <View style={styles.bottom} >
                    <Text style={styles.date} >{props.payload.date?.slice(5)}</Text>

                </View>
                <View style={{ marginRight: 25, flexDirection: "row", alignItems: "center" }} >
                    <View style={{ flexDirection: "row", paddingHorizontal: 12,alignItems:"center" }} >
                        <EvilIcons style={styles.comment} name='comment' size={20} />
                        <Text>{props.payload?.commentAmount}</Text>
                    </View>

                    {props.discovery  ? <View/> : <Ionicons onPress={() => isvisible()} name={visible ? "eye-outline" : "eye-off-outline"} size={18} color="black" />}
                </View>
            </View>

            <View style={{ marginTop: 8, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        borderRadius: 20,
        backgroundColor: "#fefbd8",
        overflow: "hidden",
        height:100
    },
    diaryheader: {
        padding: 15,
        flexDirection: "row"
    },
    diary: {
        paddingLeft: 15,
        color:"black"


    },
    user: {
        fontWeight: "700",
        color:"black"
    },
    date: {
        paddingLeft: 15
    },
    bottom: {
        paddingBottom: 5,
        flexDirection: "row",
        alignItems:"center"
    },
    comment: {
        paddingLeft: 10,

    }
})