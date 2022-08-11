import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import MaterialCommunityıcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function SplashScreen({navigation}) {

//this make screen navigatie automatically
  setTimeout(() => {
    navigation.navigate('Home'); //this.props.navigation.navigate('Login')
}, 3700);

  return (
    <View style={styles.container} >

      <ImageBackground style={styles.image}
        source={require('../assets/appbg.jpg')}
        resizeMode="cover"
        blurRadius={4}
      >
        <View style={styles.subcontainer} >

          <View style={styles.brandcontainer} >

            <MaterialCommunityıcons color="white" style={styles.icon} name='message-badge-outline' size={50} />
            <Text style={styles.maintext} >MySecret</Text>
          </View>
          <View style={styles.quotecontainer} >
            <Text style={styles.subtext} >"Kontrol edemediğin şeyler için endişelenmeyi bırak. Hayatını yaşa."</Text>
            
           
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
    padding: 5
  },
  subcontainer: {
    flex: 1,
    justifyContent: "center"
  },
  brandcontainer: {
    marginBottom: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  quotecontainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  }
})