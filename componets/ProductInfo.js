import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    ImageBackground,
} from "react-native";
import React from "react";

import data1 from "../data/data1";
import { MaterialIcons } from "@expo/vector-icons";

const ProductInfo = () => {
    const data = data1
    return (
        <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 25, color: "blue", fontWeight: "500" }}>Our Services!</Text>

            <br />
            <Text style={{ fontSize: 19, color: "black", fontWeight: "500" }}>Urban Fit offers a full range of group fitness activities like HIIT, Zumba, Kickboxing suitable for all levels of fitness lovers. We also provide personal training sessions at the studio at your convenience.</Text>



            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <Pressable style={{ margin: 10,marginBottom:90 }} key={index}>
                        <ImageBackground
                            imageStyle={{ borderRadius: 10 }}
                            style={{ width:370, height: 290 }}
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
                        <Text style={{ position: "absolute",
                                   padding:1, bottom: -70, marginTop: 10, fontSize: 15, fontWeight: "600" }}>
                            {item.name}
                        </Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
};

export default ProductInfo;

const styles = StyleSheet.create({});