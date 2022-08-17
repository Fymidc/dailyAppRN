import { View, Text, StyleSheet, ImageBackground, Pressable, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'
import MaterialCommunityıcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function SplashScreen({navigation}) {

//this make screen navigatie automatically
//   setTimeout(() => {
//     navigation.navigate('Home'); //this.props.navigation.navigate('Login')
// }, 3700);
const gotoSignup=()=>{
  navigation.navigate('Signup')
}

const gotoLogin=()=>{
  navigation.navigate('Login')
}
  return (
    <View style={styles.container} >

      <ImageBackground style={styles.image}
        source={require('../assets/pencilbg.jpg')}
        resizeMode="cover"
        blurRadius={5}
        
      >
        <View style={styles.subcontainer} >

          <View style={styles.brandcontainer} >

            <MaterialCommunityıcons color="white" style={styles.icon} name='message-badge-outline' size={50} />
            <Text style={styles.maintext} >MySecret</Text>
          </View>
          <View style={styles.quotecontainer} >
            <Text style={styles.subtext} >"Kontrol edemediğin şeyler için endişelenmeyi bırak. Hayatını yaşa."</Text>
            
           
          </View>

          <View style={{flexDirection:"row",justifyContent:"center",marginVertical:15}} >
            <Pressable onPress={()=>gotoSignup()} style={styles.press} >
              <Text style={{textAlign:"center",fontWeight:"800"}} >GET STARTED</Text>
            </Pressable>
          </View>
          <View style={{flexDirection:"row",justifyContent:"center"}} >
            <Pressable onPress={()=>gotoLogin()} >
              <Text style={{color:"grey"}} >I Already Have An Account</Text>
            </Pressable>
          </View>

        </View>
        
          
      </ImageBackground>
      
    </View>
  )
}

const width = Dimensions.get('window').width

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