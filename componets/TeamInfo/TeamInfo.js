import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import Carousel from "react-elastic-carousel";
import Item1 from "./Item1";
import "./style1.css";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const TeamInfo = () => {
    const types = [
        {
            id: "0",
            name: "Suvidha Verma",
            para: "The fitness trainers at Urban Fit Studio are knowledgeable, helpful  and provide amazing training without any doubt. Love the happy  vibe"
        },
        {
            id: "1",
            name: "Harshad Shinde",
            para: " Urban fit studio is truly an amazing place to start building a fit and healthy body. The studio has a very comfortable and positive vibes "
        },
        {
            id: "2",
            name: "Ajinkya",
            para: " Amazing ambience, absolute cleanliness . I really enjoy the positive vibes in the studio  "
        },

        {
            id: "3",
            name: " Ria",
            para: " The gym equipment is top class and the staff is really warm and welcoming. Truly recommend"
        },

        {
            id: "4",
            name: "Priyanka",
            para: "The studio is spacious and equipped with the latest equipment Fantastic place to workout."
        },


    ]


    return (
        <>
        <Text style={{ position: "absoulate",fontSize: 25, color: "blue", fontWeight: "500" }}>Team Feedback.</Text>

            <div className="back-ground color">
                <div className="data">
                
                    <Carousel breakPoints={breakPoints}>
                        {types.map((item, index) => (
                            <View style={{ margin: 100 }} key={index}>
                                <Text style={{  textAlign: "center", fontSize: 19, color: "blue" }}>{item.name}</Text>
                                <Text style={{
                                 width: 300, height: 280, color: "#40404F", fontSize: 20,
                                    left: 600, padding: 1, fontWeight: "600"
                                }}>{item.para}</Text>
                            </View>
                        ))}
                    </Carousel>
                </div>
            </div>

        </>
    )
}

export default TeamInfo

const styles = StyleSheet.create({})