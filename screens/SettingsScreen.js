import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import BottomBar from '../components/BottomBar'


export default function SettingScreen({ navigation, route }) {
  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Text style={{ fontSize: 18, fontWeight: "800" }} >SETTINGS</Text>
      </View>
      <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: "#EDEADE" }} />


      <View style={styles.settingContainer} >
        <TouchableOpacity activeOpacity={0.7} style={styles.settingview} >
          <Text>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.settingview} >
          <Text>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.settingview} >
          <Text>Themes</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.settingview} >
          <Text>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.settingview} >
          <Text>Sign out</Text>
        </TouchableOpacity>

      </View>



      <BottomBar route={route.name} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 25
  },
  settingContainer: {
    flex: 1,
    
  },
  settingview:{
    backgroundColor: "#ececec",
    
    padding: 20,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
  }
})