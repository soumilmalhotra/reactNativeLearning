import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'

const app = () => {
  
    return (
      <View>
        <div style={styles.container}>
        <Text style = {styles.text}> Filter Coffee 20rps/-  </Text>
        </div>
      </View>
    )
  
}

export default app
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize : 42,
    fontWeight : 'bold',
   
  },
  container : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center'

  }
})