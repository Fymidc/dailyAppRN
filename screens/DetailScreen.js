import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Modal, Alert, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityıcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function DetailScreen({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true)
  }

  return (
    <View style={styles.maincontainer} >
      <DetailHeader openModal={openModal} navigation={navigation} />
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />

      <View style={{ flex: 1 }} >

        <DeleteModal modalVisible={modalVisible} setModalVisible={setModalVisible} />


        <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 15}} >
          <Text style={{ lineHeight: 22, }}>
            gelen text buratda  gözükecek
            gelen text buratda  gözükecek


          </Text>

          <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />


          <View style={{ paddingHorizontal: 20, paddingVertical: 15 }} >
            <Text>commentler burada olacak</Text>


          </View>
        </ScrollView>
      </View>



      <TextInput style={{ paddingHorizontal: 25, borderTopWidth: 1, borderTopColor: "#EDEADE" }}
        placeholder="comment on ..."
        multiline
        maxLength={80}
      />


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
        <Text style={{ fontSize: 18, fontWeight: "800" }} >UserName</Text>

      </View>
      <View>
        <AntDesign onPress={() => props.openModal()} name='closecircleo' size={20} />
      </View>

    </View>
  )
}

const DeleteModal =(props)=>{
  return(
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
                <Pressable
                  style={styles.button}
                  onPress={() => props.setModalVisible(!props.modalVisible)}
                >
                  <Text style={styles.textStyle}>Delete</Text>
                </Pressable>
              </View>
            </View>
          </Modal  >
        </View>
  )
}


const height = Dimensions.get('window').height

console.log(height/2)

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor:"#fefbe8"

  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    padding: 22

  },
  centeredView: {
    position:"absolute",
    alignSelf:"center",
    marginVertical:height/3,
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
})