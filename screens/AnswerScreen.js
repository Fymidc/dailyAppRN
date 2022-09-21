import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux';


export default function AnswerScreen({ navigation, route }) {

  const dispatch = useDispatch();
  const { text ,id} = route.params;

  const [input, setinput] = useState("")


  //console.log(input+input.length)
  const remained = 60 - input.length

  const answer = useSelector(answer => answer.answer)
  const users = useSelector(user=>user.user)

  const data = {
    id: "",
    text: "yes",
    date: "",
    ishidden: "true",
    userid: users.token?.userId,
    questionid: id
  }



  const createOneAnswer = () => {
    dispatch(createOneAnswer(data))
    navigation.goBack();
  }

  return (
    <View style={styles.maincontainer} >
      <PotsHeader navigation={navigation} create={createOneAnswer}/>
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />

      {answer.answer.length > 0 ? null
        : <View style={{ flexDirection: "column", padding: 8 }} >
          <Text> {remained}</Text>
        </View>}


      <View style={{ padding: 15 }}>
        <Text style={{ color: "black" }} >{text}</Text>
      </View>



      <View style={{ paddingHorizontal: 15 }} >
        {answer.answer?.length > 0
          ? answer.answer.map(val => <View key={val.id} style={{ flexDirection: "row" }} >
            <Text>{val.date?.slice(5)}</Text>
            <Text style={{ paddingLeft: 10 }} >{val.text}</Text>
          </View>)
          : <TextInput style={{ fontSize: 16 }} onChangeText={setinput} placeholder={"Ask me.."} autoFocus={true} multiline maxLength={60} />
        }
      </View>


    </View>
  )
}


const PotsHeader = ({ navigation ,create}) => {
  return (
    <View style={styles.container} >
      <View>
        <AntDesign onPress={() => navigation.goBack()} name='closecircleo' size={20} />
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "800" }} >What do you think?</Text>

      </View>
      <View>
        <AntDesign onPress={() => create()} name='checkcircleo' size={20} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,

  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    padding: 22

  }
})