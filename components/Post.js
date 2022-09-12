import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCommentsPost } from '../reducers/CommentReducer'
import { createOneLike, deleteOneLike, getAllLikes } from '../reducers/LikeReducer'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { getOnePostById } from '../reducers/PostReducer'


export default function Post(props) {

    const dispatch = useDispatch()
    

    const [likeCount, setLikeCount] = useState(props.payload?.likeAmount);
    const [liked, setIsLiked] = useState(false)
    const [likeId, setLikeId] = useState(null)

    

    const gotoDetail = (id) => {
        dispatch(getAllCommentsPost(id))

        props.navigation.navigate('Detail', {
            username: props.payload?.username,
            text: props.payload?.text,
            id: props.payload?.id
        })
    }


    
      const pliked = useRef(likeId)
     pliked.current = likeId

    const handleLike = () => {
        setIsLiked(!liked)

        if (!liked) {
            savelike()
            setLikeCount(likeCount+1)
            //dispatch(createOneLike(data))
        } else {
        
            deletelike()
            setLikeCount(likeCount-1)

            //dispatch(deleteOneLike(data))
        }
    }

    const checklikes=()=>{
        console.log("çalıştı")
    
    
        const likeControl = props.payload?.userids.find(like => like === 1)
        console.log(likeControl)
        if (likeControl != null ) {
          setLikeId(likeControl.id);
         setIsLiked(true)
    
        }  //deneme yap oldu gibi
    }

    const savelike = () => {
        const ldata = {
                id: "",
                userid: 1,
                postid: props.payload?.id
              }
        console.log("create like post id",props.payload?.id)
        dispatch(createOneLike(ldata))

    }

    const deletelike = () => {
        console.log("delete like id", pliked.current)
        dispatch(deleteOneLike(pliked.current))

    }

    useEffect(() => {
        checklikes()
    
      }, [])

    //let icon = ""
   // Object.values(props.payload.userids).map(e => e === 1 ? icon = "heart" : icon = "hearto")
    // console.log(Object.values(props.payload.userids).map(e=>e === 1))

    
    //console.log("gelen like", likes.like)

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => gotoDetail(props.payload?.id)} activeOpacity={0.6} style={styles.questionheader} >
                <Text style={styles.user} >{props.payload?.username}</Text>
                <Text style={styles.question} >{props.payload?.text}</Text>
            </TouchableOpacity>


            <View style={styles.bottom} >
                <View style={{ flexDirection: "row", alignItems: "center", alignItems: "center" }} >

                    <Text style={styles.date} >{props.payload.date?.slice(5)}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10, justifyContent: "flex-end", width: 180 }} >
                    <View style={{ flexDirection: "row" }} >
                        <AntDesign onPress={() => handleLike()} style={liked? { color: "red" } : null} name="heart" size={18} />
                        <Text style={{ paddingHorizontal: 5 }} >{likeCount}</Text>
                    </View>



                    <View style={{ flexDirection: "row" }} >
                        <EvilIcons style={styles.comment} name='comment' size={25} />
                        <Text style={{ paddingHorizontal: 5 }} >{props.payload?.commentAmount}</Text>
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
        backgroundColor: "#ffff",
        overflow: "hidden",
        height: 110
    },
    questionheader: {
        padding: 15,
        flexDirection: "row"
    },
    question: {
        paddingHorizontal: 15,
        color: "black"


    },
    user: {
        fontWeight: "700",
        color: "black"
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