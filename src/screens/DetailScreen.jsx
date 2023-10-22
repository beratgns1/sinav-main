import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Image } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import BackIcon from "../icon/icon3";

const DetailScreen = ({navigation}) => {

  
    const navigateToHomeScreen = () => {
        navigation.navigate("HomeScreen");
    };

    
    return (
        <View style={styles.container}>
            
        <View style={styles.container2}>  
        <TouchableOpacity style={styles.btnStyle}
        onPress={navigateToHomeScreen}
        >
            <BackIcon/>
        </TouchableOpacity>
              <TextInput 
              placeholder="Bir Başlık Giriniz"
              style={styles.textinputstyle1} 
              />
              <Text style={styles.dateStyle}>
                8 Temmuz 2022
                </Text>
              <TextInput 
              placeholder="Bir Metin Giriniz" 
              style={styles.textinputStyle2}
              />
         </View>
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width:"100%",
        height:"100%",
      }, 
      btnStyle:{
        marginTop:40,
      },
      container2: {
        backgroundColor: "white",
        width:342,
        height: 185,
        marginLeft:24
      },
      textinputstyle1: {
      fontSize:24,
      fontFamily: 'Lora-Regular',
      color:"#3E4C59",
      marginTop:24,
    },
    dateStyle:{
        marginLeft:5,
        color:"#8E9090"
    },
    textinputStyle2: {
      fontSize:14,
      fontFamily: 'Lora-Regular',
      color:"#797A7B"
    },
})
export default DetailScreen