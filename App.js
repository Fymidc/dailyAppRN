/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiscoveryScreen from './screens/DiscoveryScreen';
import PostScreen from './screens/PostScreen';
import DiaryScreen from './screens/DiaryScreen';
import BottomBar from './components/BottomBar';

const App = () => {

 
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
    
  
}


 

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container} >
        <Stack.Navigator  initialRouteName='Home' screenOptions={screenOptions} >
          <Stack.Screen   name='Splash' component={SplashScreen} />
          <Stack.Screen options={{animation:"slide_from_right"}} name='Home' component={HomeScreen} />
          <Stack.Screen  options={{animation:"none"}} name='Discovery' component={DiscoveryScreen} />
          <Stack.Screen   name='AddPost' component={PostScreen} />
          <Stack.Screen   name='AddDiary' component={DiaryScreen} />
          
        
        </Stack.Navigator>
        {/* <SplashScreen/> */}
        {/* <HomeScreen /> */}

      </SafeAreaView>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //paddingTop: Platform.OS === "android" ? 25 : 0
  }
})


export default App;
