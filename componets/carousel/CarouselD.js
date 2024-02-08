import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const CarouselD = () => {
    const types = [
        {
            id:"0",
            image:"https://urbanfitwellness.com/assets/img/flex/img5.jpg",
            name:"Personalized Fitness",
        },
        {
            id:"1",
            image:"https://urbanfitwellness.com/assets/img/flex/img6.jpg",
            name:"Premium & Sporty"
        },
        {
            id:"2",
            image:"https://urbanfitwellness.com/assets/img/flex/img7.jpg",
            name:"Feed your body with Right Nutrition."
        },
        
        {
          id:"3",
          image:"https://urbanfitwellness.com/assets/img/flex/img1.webp",
          name:"Personalized Fitness"
      },
      
      {
        id:"4",
        image:"https://urbanfitwellness.com/assets/img/flex/img2.webp",
        name:"Personalized Fitness"
    },
    
    {
      id:"5",
      image:"https://urbanfitwellness.com/assets/img/flex/img3.webp",
      name:"Feed your body with Right Nutrition."
  },
  
  {
    id:"6",
    image:"https://urbanfitwellness.com/assets/img/flex/img4.webp",
    name:"e"
},
    ]

  return (
    <>
      
      <div className="carousel_back color">
        <div className="data">
      <Carousel breakPoints={breakPoints}>
        {types.map((item,index) => (
            <View style={{margin:100}} key={index}>
                <Image source={{uri:item.image}} style={{width:300,height:280}}/>
                <Text style={{marginTop:6,textAlign:"center"}}>{item.name}</Text>
            </View>
        ))}
         </Carousel>
         </div>
      </div>
      
    </>
  )
}

export default CarouselD;

const styles = StyleSheet.create({})