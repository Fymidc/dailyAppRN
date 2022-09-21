import { View, Text, StyleSheet, TextInput, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { loginuser } from '../reducers/UserReducer'
import { useDispatch} from 'react-redux'
import { useState } from 'react'


const width = Dimensions.get('window').width
export default function LoginScreen({ navigation }) {

    
    

    const dispatch = useDispatch();
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState(false)

    const data = {
        userName: username,
        password: password
    }

    const errorhandler =()=>{
       
    }

    const loginUser = () => {

        dispatch(loginuser(data)).unwrap()
        .then(()=>{
            seterror(false)
            navigation.navigate('Home')
            
        })
        .catch(()=>{
            seterror(true)
        setusername("")
      setpassword("")
        })

      
      

    }
  
    return (
        <View style={styles.container} >
     
            <View style={styles.inputcontainer} >
                <View style={{ marginVertical: 20, flexDirection: "column", justifyContent: "center" }} >
                    <Text style={{ padding: 15, fontWeight: "700", fontSize: 20, color: "black" }} >Welcome Back! You've been missed</Text>
                    <Text style={{color:"red" ,paddingHorizontal:15}} > {error ? "Ups! Something wrong happen. Check your password and username." : null} </Text>
                </View>

                <View >
                    <TextInput style={styles.textinputs} onChangeText={setusername} placeholder='Username' autoFocus value={username}/>
                    <TextInput style={styles.textinputs} placeholder='Password' textContentType='password' secureTextEntry={true} onChangeText={setpassword} value={password} />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 15 }} >
                    <Pressable onPress={() => loginUser()} style={{ backgroundColor: "#FBB827", width: width / 2 + width / 2.5 }} >
                        <Text style={{ padding: 15, textAlign: "center", fontWeight: "700", color: "black" }} >Log in</Text>
                    </Pressable>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center" }} >
                    <Pressable onPress={() => navigation.navigate('Signup')} >
                        <Text style={{ color: "grey" }} >If you dont have an account register now!</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    inputcontainer: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 80

    },
    textinputs: {
        backgroundColor: "white",
        marginVertical: 5,
        marginHorizontal: 15,
        paddingHorizontal: 20
    }
})