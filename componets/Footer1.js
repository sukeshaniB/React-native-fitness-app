import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    ImageBackground,
} from "react-native";
import React from "react";
import data3 from "../data/data3";


const Footer1 = () => {
    const data = data3
    return (
        <View style={{ margin: 10 }}>
            <Text style={{ position: "absoulate",fontSize: 25, color: "blue", fontWeight: "500" }}>Health & Fitness at your
Fingertips.</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <Pressable style={{ margin: 10,marginBottom:90 }} key={index}>
                        <ImageBackground
                            imageStyle={{ borderRadius: 10 }}
                            style={{ width:500, height: 500 }}
                            source={{ uri: item.image }}
                        >
                            <Text
                                style={{
                                    position: "absolute",
                                    bottom: 10,
                                    left: 10,
                                    fontSize: 27,
                                    fontWeight: "900",
                                    color: "white",
                                }}
                            >
                                {item.offer} 
                            </Text>
                        </ImageBackground>
                        
                        <Text style={{ position: "fixed",color: "black",fontSize:20,
                                 left:600,  padding:1, fontWeight: "600" }}>
                            {item.name}
                        </Text>
                        
                    </Pressable>
                ))}
            </ScrollView>
        </View>
        
    );
};

export default Footer1;

const styles = StyleSheet.create({});