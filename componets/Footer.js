import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    ImageBackground,
} from "react-native";
import React from "react";
import data2 from "../data/data2";
import Footer1 from "./Footer1";

import TeamInfo from "./TeamInfo/TeamInfo";


const Footer = () => {
    const data = data2
    return (
        <View style={{ margin: 10 }}>
            <Text style={{ position: "absoulate",fontSize: 25, color: "blue", fontWeight: "500" }}>About us</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <Pressable style={{ margin: 10,marginBottom:90 }} key={index}>
                        <ImageBackground
                            imageStyle={{ borderRadius: 10 }}
                            style={{ width:500, height: 500 }}
                            source={{ uri: item.image }}
                        >
                            
                        </ImageBackground>
                        
                        <Text style={{ position: "fixed",color: "black",
                              fontSize:20,   left:600,  padding:1, fontWeight: "600" }}>
                            {item.name}
                        </Text>
                    </Pressable>
                ))}

                
            </ScrollView>
            <Footer1/>
            <TeamInfo/>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({});