import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import icedCoffeeImg from "@/assets/images/iced-coffee.png"
const app = () => {
  return (
    <View style = {style.container}>
      <ImageBackground 
      source={icedCoffeeImg}
      resizeMode='cover'
      style = {style.image}
      >
      <Text style = {style.text}>Coffee shop </Text>
      </ImageBackground>
    </View>
  )
}

export default app
const style = StyleSheet.create({
  container : {
    flex:1,
    flexDirection: 'column',
  },
  text:{
    color : 'white',
    fontSize : 42,
    fontWeight : 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  image:{
    width : '100%',
    height : '100%',
    flex : 1,
    resizeMode : 'cover',
    justifyContent : 'center',
  }
})