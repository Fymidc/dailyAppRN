import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import PostScreen from '../screens/PostScreen';
import DiaryScreen from '../screens/DiaryScreen';
import FriendsScreen from '../screens/FriendsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingsScreen';
import DetailScreen from '../screens/DetailScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import AnswerScreen from '../screens/AnswerScreen';

export default function ReactNavigator() {

    
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,


  }



  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container} >
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions} >
          <Stack.Screen name='Splash' component={SplashScreen} />
          <Stack.Screen options={{ animation: "slide_from_right" }} name='Home' component={HomeScreen} />
          <Stack.Screen options={{animation:"none"}} name='Discovery' component={DiscoveryScreen} />
          <Stack.Screen options={{animation:"none"}} name='Friends' component={FriendsScreen} />
          <Stack.Screen options={{animation:"none"}} name='Notifications' component={NotificationScreen} />
          <Stack.Screen options={{animation:"none"}} name='Settings' component={SettingScreen} />
          <Stack.Screen options={{animation:"slide_from_right"}} name='Detail' component={DetailScreen} />
          <Stack.Screen options={{animation:"slide_from_bottom"}} name='Signup' component={SignupScreen} />
          <Stack.Screen options={{animation:"slide_from_bottom"}} name='Login' component={LoginScreen} />
          <Stack.Screen options={{animation:"slide_from_right"}} name='AnswerQuestion' component={AnswerScreen} />
          
          
          
          <Stack.Group screenOptions={{ animation:"slide_from_bottom",presentation:'modal',headerShown:false }} >

            <Stack.Screen name='AddPost' component={PostScreen} />
            
            <Stack.Screen name='AddDiary' component={DiaryScreen} />
          </Stack.Group>


        </Stack.Navigator>
        {/* <SplashScreen/> */}
        {/* <HomeScreen /> */}

      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      //paddingTop: Platform.OS === "android" ? 25 : 0
    }
  })
  