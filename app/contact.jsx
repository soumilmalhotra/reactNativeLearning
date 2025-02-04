import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import icedCoffeeImg from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";

export default function TabTwoScreen() {
   return (
     <View style={styles.container}>
   
         <Text style={styles.title}>Contact Us 9312030120</Text>
   
     </View>
   );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 42,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 42,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flex: 1,
    resizeMode: "cover",
  },
  link: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: "center",
  },
  button :{
    height : 60,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    justifyContent: "center", 
  },
  buttonText:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    textAlign : 'center',
    padding : 4,


  }
});