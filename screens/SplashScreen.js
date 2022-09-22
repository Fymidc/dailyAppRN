import { View, Text, StyleSheet, ImageBackground, Pressable, Dimensions } from 'react-native'
import React from 'react'
import MaterialCommunityıcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useEffect } from 'react';

const width = Dimensions.get('window').width

export default function SplashScreen({navigation}) {

  const [user, setuser] = useState(null)

  const  getUserData =async ()=>{
    try {
      const value = await AsyncStorage.getItem('Current_User')
      
      if(value !== null  ) {
        setuser(value)
       
      }
    } catch (error) {
      console.log(error)
    }
  }

  getUserData();


  console.log("splashdan gelen",user)

const gotoSignup=()=>{
  navigation.navigate('Signup')
}

const gotoLogin=()=>{
  navigation.navigate('Login')
}

useEffect(() => {
  if(user !== null){
    navigation.navigate('Login')
  }
}, [user])



  return (
    <View style={styles.container} >

      <ImageBackground style={styles.image}
        source={require('../assets/newbg.jpeg')}
        resizeMode="cover"
        
        
      >
        <View style={styles.subcontainer} >

          <View style={styles.brandcontainer} >

            <MaterialCommunityıcons color="white" style={styles.icon} name='message-badge-outline' size={50} />
            <Text style={styles.maintext} >My Diary</Text>
          </View>
          <View style={styles.quotecontainer} >
            <Text style={styles.subtext} >"Stop worrying about the things you can't control."</Text>
            
           
          </View>

          <View style={{flexDirection:"row",justifyContent:"center",marginVertical:15}} >
            <Pressable onPress={()=>gotoSignup()} style={styles.press} >
              <Text style={{textAlign:"center",fontWeight:"800"}} >GET STARTED</Text>
            </Pressable>
          </View>
          <View style={{flexDirection:"row",justifyContent:"center"}} >
            <Pressable onPress={()=>gotoLogin()} >
              <Text style={{color:"white"}} >I Already Have An Account</Text>
            </Pressable>
          </View>

        </View>
        
          
      </ImageBackground>
      
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center",

  },
  icon: {
    zIndex: 10,

  },
  maintext: {
    color: "white",
    fontSize: 35,
    paddingHorizontal: 10
  },
  subtext: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    padding: 5,
    fontWeight:"800"
  },
  subcontainer: {
    flex: 1,
    justifyContent: "center"
  },
  brandcontainer: {
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  quotecontainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  press:{
    backgroundColor:"#fefbb8",
    padding:10,
    width:width/2+width/3,
    borderRadius:10
  }
})