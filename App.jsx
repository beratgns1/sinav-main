import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./src/screens/DetailScreen";
import MemoriesScreen from './src/screens/MemoriesScreen';

import SeeMyMemoriesIcon from './src/icon/icon1';
import SaveIcon from './src/icon/icon2';

const HomeScreen = ({navigation}) => {

  const navigateToDetailScreen = () => {
    navigation.navigate("DetailScreen");
};
const navigateToMemoriesScreen = () => {
  navigation.navigate("MemoriesScreen");
};

  return (
    <View style={ styles.container }>
      <View style={styles.container2}>
              
              <TextInput 
              placeholder="Bir Başlık Giriniz"
              style={styles.textinputstyle1} 
              />
              <TextInput 
              placeholder="Bir Metin Giriniz" 
              style={styles.textinputStyle2}
              />

         </View>
      <View style={ styles.container3 }>
        <TouchableOpacity style={ styles.btn1 }
        onPress={navigateToMemoriesScreen}
        >
          <SeeMyMemoriesIcon/>
          <Text style={ styles.btn1txt }>See My Memories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.btn2 }
        onPress={navigateToDetailScreen}
        >
          <Text style={ styles.btn2txt }>Save</Text>
          <SaveIcon/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown: false}} />
        <Stack.Screen name="MemoriesScreen" component={MemoriesScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    width:"100%",
    height:"100%",
    justifyContent:"space-between"
  },
  container2: {
    backgroundColor: "white",
    width:342,
    height: 185,
    marginTop:40,
    marginLeft:24
  }, 
  textinputstyle1: {
  fontSize:24,
  fontFamily: 'Lora-Regular',
  color:"#3E4C59"
},
textinputStyle2: {
  fontSize:14,
  fontFamily: 'Lora-Regular',
  color:"#797A7B"
},
  container3: {
    flexDirection:"row",
    marginLeft:24,
    marginBottom:40
  },
  btn1:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:"#FFD700",
    borderWidth: 3,
    borderRadius: 90,
    borderColor: "#FFD700",
    fontSize:14,
    height:44 ,
    width:208 ,
  },
  btn1txt:{
    color:"#322E2E",
    fontSize:14,
    marginRight:10
  },
  btn2:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:"#FFD700",
    borderWidth: 3,
    borderRadius: 90,
    borderColor: "#FFD700",
    fontSize:14,
    height:44 ,
    width:118 ,
    marginLeft:16
  },
  btn2txt:{
    color:"#322E2E",
    fontSize:14,
    marginLeft:10
  },
})

export default App;

