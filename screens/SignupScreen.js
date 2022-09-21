import { View, Text, StyleSheet, TextInput, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import {  registeruser,  } from '../reducers/UserReducer'
import { useState } from 'react'

const width = Dimensions.get('window').width

export default function SignupScreen({navigation}) {
  

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    

    const dispatch = useDispatch();

    const data ={
        userName :username,
        password : password
    }

     const createUser= () =>{
       // console.log("  createden gelen user  ",data)
       dispatch(registeruser(data)).then(()=>{
        navigation.navigate('Login')
       })
       //after succes direct it to login screen 
         
    }
  
   

    return (
        <View style={styles.container} >
          

            <View style={styles.inputcontainer} >
                <View style={{ marginVertical: 20, flexDirection: "row", justifyContent: "center" }} >
                    <Text style={{ padding: 15, fontWeight: "800" ,fontSize:20,color:"black"}} >Create an Account</Text>
                </View>

                <View >
                    <TextInput style={styles.textinputs} placeholder='Username' onChangeText={setusername} />
                    <TextInput style={styles.textinputs} placeholder='Password' textContentType='password' secureTextEntry={true} onChangeText={setpassword} />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 15 }} >
                    <Pressable onPress={()=>createUser()} style={{backgroundColor:"#FBB827",width:width/2+width/2.5 }} >
                        <Text style={{padding:15,textAlign:"center",fontWeight:"700",color:"black"}} >Create an Account</Text>
                    </Pressable>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center" }} >
                    <Pressable onPress={()=>navigation.navigate('Login')} >
                        <Text style={{color:"grey"}} >Already have an account</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputcontainer: {
        flex: 1,
        justifyContent: "center",
        marginBottom:80
        
    },
    textinputs: {
        backgroundColor: "white",
        marginVertical: 5,
        marginHorizontal: 15,
        paddingHorizontal: 20
    }
})