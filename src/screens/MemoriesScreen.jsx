import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Image, ScrollView } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import BackIcon from "../icon/icon3";
import DetayIcon from "../icon/icon4";

const DetailScreen = ({navigation}) => {


    const navigateToHomeScreen = () => {
        navigation.navigate("HomeScreen");
    };
    const navigateToDetailScreen = () => {
        navigation.navigate("DetailScreen");
    };


    return (
        
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.iconStyle}
            onPress={navigateToHomeScreen}
            >
                <BackIcon />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnStyle1}
            onPress={navigateToDetailScreen}
            >
                <View style={styles.rowStyle}>
                    <View>
                        <Text style={styles.txtStyle1}>
                            Memory title
                        </Text>
                        <Text>
                            08.07.2022
                        </Text>
                    </View>

                    <DetayIcon style={styles.detayStyle}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle2}
            onPress={navigateToDetailScreen}
            >
                <View style={styles.rowStyle}>
                    <View>
                        <Text style={styles.txtStyle1}>
                            Memory title
                        </Text>
                        <Text>
                            08.07.2022
                        </Text>
                    </View>

                    <DetayIcon style={styles.detayStyle}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle3}
            onPress={navigateToDetailScreen}
            >
                <View style={styles.rowStyle}>
                    <View>
                        <Text style={styles.txtStyle1}>
                            Memory title
                        </Text>
                        <Text>
                            08.07.2022
                        </Text>
                    </View>

                    <DetayIcon style={styles.detayStyle}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle4}
            onPress={navigateToDetailScreen}
            >
                <View style={styles.rowStyle}>
                    <View>
                        <Text style={styles.txtStyle1}>
                            Memory title
                        </Text>
                        <Text>
                            08.07.2022
                        </Text>
                    </View>

                    <DetayIcon style={styles.detayStyle}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle1}
            onPress={navigateToDetailScreen}
            >
                <View style={styles.rowStyle}>
                    <View>
                        <Text style={styles.txtStyle1}>
                            Memory title
                        </Text>
                        <Text>
                            08.07.2022
                        </Text>
                    </View>

                    <DetayIcon style={styles.detayStyle}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle2}
            onPress={navigateToDetailScreen}
            >
                <View style={styles.rowStyle}>
                    <View>
                        <Text style={styles.txtStyle1}>
                            Memory title
                        </Text>
                        <Text>
                            08.07.2022
                        </Text>
                    </View>

                    <DetayIcon style={styles.detayStyle}/>
                </View>
            </TouchableOpacity>

            
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
    },
    iconStyle: {
        marginTop: 40,
        marginLeft:24,
    },
    container2: {
        backgroundColor: "white",
        width: 342,
        height: 185,
        marginLeft: 24
    },
    btnStyle1: {
        height: 88,
        width: 342,
        borderWidth: 2,
        borderRadius: 90,
        borderColor: "#81B5E9",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 24,
        marginTop:32
    },
    btnStyle2: {
        height: 88,
        width: 342,
        borderWidth: 2,
        borderRadius: 90,
        borderColor: "#6A9CAF",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 24,
        marginTop:32
    },
    btnStyle3: {
        height: 88,
        width: 342,
        borderWidth: 2,
        borderRadius: 90,
        borderColor: "#B16A71",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 24,
        marginTop:32
    },
    btnStyle4: {
        height: 88,
        width: 342,
        borderWidth: 2,
        borderRadius: 90,
        borderColor: "#DEAAEF",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 24,
        marginTop:32
    },

    txtStyle1: {
        fontSize: 24,
        marginRight:60
    },
    rowStyle: {
        flexDirection: "row",
    },
    detayStyle:{
        marginTop:5
    }
})
export default DetailScreen