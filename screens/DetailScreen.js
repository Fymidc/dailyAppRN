import { View, Text, StyleSheet, TextInput, ScrollView, Modal, Alert, Pressable, Dimensions, Keyboard } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityıcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../components/Comment';
import { createOneDiaryComment, createOnePostComment, getAllCommentsDiary, getAllCommentsPost } from '../reducers/CommentReducer'

const height = Dimensions.get('window').height

export default function DetailScreen({ navigation, route }) {

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState("");

  const pcomments = useSelector(comment => comment.comment)
  const users = useSelector(user=>user.user)
  

  const { username, text, id ,ishidden} = route.params;

  


  const pdata = {
    id: "",
    text: input,
    date: "",
    userid: users.token?.userId,
    postid: id
  }

  const ddata = {
    id: "",
    text: input,
    date: "",
    userid: users.token?.userId, 
    diaryid: id
  }

  const createComment = () => {

    if(ishidden === undefined){
      dispatch(createOnePostComment(pdata)).then(()=>{
        dispatch(getAllCommentsPost(id))
      } )
    Keyboard.dismiss()
    setInput("")
    }else{
      
      dispatch(createOneDiaryComment(ddata)).then(()=>{
        
        dispatch(getAllCommentsDiary(id))
      })
    Keyboard.dismiss()
    setInput("")
    }
    
  }
  

  const openModal = () => {
    setModalVisible(true)
  }


  return (
    <View style={styles.maincontainer} >
      <DetailHeader openModal={openModal} userid={id} username={username} navigation={navigation} />
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />

      <View style={{ flex: 1 }} >

        <DeleteModal modalVisible={modalVisible}  setModalVisible={setModalVisible} />


        <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 15 }} >
          <Text style={{ lineHeight: 22, fontSize: 16, color: "white" }}>
            {text}


          </Text>

          <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />


          <View style={{ paddingVertical: 15 }} >
            { pcomments.loading === true ? <Text>Loading...</Text> :  Object.values(pcomments.comment).map((val, index) =><Comment username={username} key={index} payload={val}  /> )}

          </View>
        </ScrollView>
      </View>


      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }} >
        <TextInput style={{
          color: "black", fontSize: 15,
          paddingHorizontal: 25,
          flex: 1, backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#EDEADE"
        }}

          placeholder="comment on ..."
          multiline
          value={input}
          maxLength={80}
          onChangeText={setInput}
          returnKeyType="send"
          onSubmitEditing={() => createComment()}

        />
        <Pressable onPress={() => createComment()} >
          <Text style={{ color: `rgba(0, 25, 53,0.${input.length > 0 ? 9 : 2})`, paddingRight: 10, fontSize: 15, fontWeight: "800" }} >Send</Text>
        </Pressable>
        {/* <Ionicons onPress={()=> createComment()} style={{paddingRight:10}} color={"#001935"} name='send-outline' size={25} /> */}
      </View>



    </View>
  )
}


const DetailHeader = (props) => {

  const goBack = () => {
    props.navigation.goBack()
  }


  return (
    <View style={styles.container} >
      <View>
        <MaterialCommunityıcons onPress={() => goBack()} style={styles.icon} name='message-badge-outline' size={18} />
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "800", color: "white" }} >{props.username}</Text>

      </View>
      <View>
        <AntDesign onPress={() => props.userid === 1 ? props.openModal() : goBack()} style={styles.icon} name='closecircleo' size={20} />
      </View>

    </View>
  )
}

const DeleteModal = (props) => {

  const deleteItem =()=>{
    console.log("deleted")
    props.setModalVisible(!props.modalVisible)


  }
  

  return (
    <View style={styles.centeredView}>

      <Modal animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          props.setModalVisible(!props.modalVisible);
        }} >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text style={{ marginBottom: 15, textAlign: "center", padding: 15 }} >Are You Sure?</Text>

            <View style={{flexDirection:"row",paddingHorizontal:5}} >
              <Pressable
                style={styles.button}
                onPress={() => props.setModalVisible(!props.modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => deleteItem()}
              >
                <Text style={styles.textStyle}>Delete</Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Modal  >
    </View>
  )
}




console.log(height / 2)

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#001935"

  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    padding: 22,


  },
  centeredView: {
    position: "absolute",
    alignSelf: "center",
    marginVertical: height / 3,
    justifyContent: "center",
    alignItems: "center",

  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    elevation: 10
  },
  button: {
    marginHorizontal:5,
    borderRadius: 20,
    padding: 10,
    width: 100,
    elevation: 2,
    backgroundColor: "red"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  icon: {
    color: "white"
  }
})