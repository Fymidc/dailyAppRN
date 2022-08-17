import { View, Text, StyleSheet, TextInput, Pressable, Dimensions } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SignupScreen({navigation}) {
    const width = Dimensions.get('window').width


    return (
        <View style={styles.container} >
            <View style={{ flexDirection: "row", justifyContent: "flex-start" }} >
                <AntDesign style={{padding:15}} onPress={() => navigation.goBack()} name='closecircleo' size={20} />

            </View>

            <View style={styles.inputcontainer} >
                <View style={{ marginVertical: 20, flexDirection: "row", justifyContent: "center" }} >
                    <Text style={{ padding: 15, fontWeight: "800" ,fontSize:20,color:"black"}} >Create an Account</Text>
                </View>

                <View >
                    <TextInput style={styles.textinputs} placeholder='Username' />
                    <TextInput style={styles.textinputs} placeholder='Password' textContentType='password' secureTextEntry={true}/>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 15 }} >
                    <Pressable style={{backgroundColor:"#FBB827",width:width/2+width/2.5 }} >
                        <Text style={{padding:15,textAlign:"center",fontWeight:"700",color:"black"}} >Create an Account</Text>
                    </Pressable>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center" }} >
                    <Pressable>
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