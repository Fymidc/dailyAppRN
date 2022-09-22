import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector} from 'react-redux'
import { getAllCommentsPost } from '../reducers/CommentReducer'
import { createOneLike, deleteOneLike, getAllLikes } from '../reducers/LikeReducer'
import { useEffect } from 'react'

import { useState } from 'react'
import { useRef } from 'react'

import { getOneUserfromid } from '../reducers/UserReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Post(props) {

    const dispatch = useDispatch()

    const [likeCount, setLikeCount] = useState(props.payload?.likeAmount);
    const [liked, setIsLiked] = useState(false)
    const [likeId, setLikeId] = useState(null)

    const users = useSelector(user=>user.user)
    const likes = useSelector(like=>like.like)
    //const [user, setuser] = useState(null)


    // const  getUserData =async ()=>{
    //     try {
    //       const value = await AsyncStorage.getItem('Current_User')
    //       if(value !== null) {
    //         setuser(value)
    //       }
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    
    //   getUserData()

    const gotoDetail = (id) => {
        dispatch(getAllCommentsPost(id))

        props.navigation.navigate('Detail', {
            username: props.payload?.username,
            text: props.payload?.text,
            id: props.payload?.id,
            userid:props.payload?.userId
        })
    }



    const pliked = useRef(likeId)
    pliked.current = likeId

    const handleLike = () => {

        const data = {
            userid:users.token?.userId,
            postid:props.payload?.id
        }
        
        dispatch(getAllLikes(data))
        setIsLiked(!liked)

        if (!liked) {
            savelike()
            setLikeCount(likeCount + 1)
          
        } else {

            deletelike()
            setLikeCount(likeCount - 1)

        }
    }

    const checklike = () => {
        console.log("çalıştı")
       

        const likeControl = props.payload?.userids.find(like => like == users.token?.userId)
        console.log("like control",likeControl)
        if (likeControl != null) {
            setLikeId(likeControl);
            setIsLiked(true)

        }  
    }

    const savelike = () => {
        const ldata = {
            id: "",
            userid: users.token?.userId,
            postid: props.payload?.id
        }
       
        dispatch(createOneLike(ldata))

    }

    const deletelike = () => {
        const likeid = likes.like.find(l=>l.postId === props.payload?.id)
    
        dispatch(deleteOneLike(likeid.id))

    }

    useEffect(() => {
        checklike()

    }, [])



    const handleUserclick=()=>{
      const data ={
        userid:users.token?.userId
      }
      console.log("posttan gelen user",users.token?.userId)
        if(props.payload?.userid == users.token.userId){
            return null
        }else{
            
             dispatch(getOneUserfromid(props.payload?.userid)).then(()=>{
              // dispatch(getAlluserFriends(data))
                 props.navigation.navigate('UserScreen')
             })
           
        }
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => gotoDetail(props.payload?.id)} activeOpacity={0.6} style={styles.questionheader} >

                <TouchableOpacity  onPress={()=>handleUserclick()} activeOpacity={0.8} >
                    <Text style={styles.user} >{props.payload?.username}</Text>
                </TouchableOpacity>

                <Text style={styles.question} >{props.payload?.text}</Text>
            </TouchableOpacity>


            <View style={styles.bottom} >
                <View style={{ flexDirection: "row", alignItems: "center", alignItems: "center" }} >

                    <Text style={styles.date} >{props.payload.date?.slice(5)}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10, justifyContent: "flex-end", width: 180 }} >
                    <View style={{ flexDirection: "row" }} >
                        <AntDesign onPress={() => handleLike()} style={liked ? { color: "red" } : null} name="heart" size={18} />
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