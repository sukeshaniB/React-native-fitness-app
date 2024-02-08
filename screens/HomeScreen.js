import { StyleSheet, Text, View, SafeAreaView, TextInput,ScrollView } from 'react-native'
import { Divider, Image } from 'semantic-ui-react'
import React from 'react'
import './Homescreen.css'

import Footer from '../componets/Footer'
import ProductInfo from '../componets/ProductInfo'
import CarouselD from '../componets/carousel/CarouselD'


const HomeScreen = () => {
  return (
   
   <ScrollView style={{marginTop:40}}>
      <div className="twobar">

        <nav className="nav">
          <ul className="nav navbar-nav">
           
            <li className="active"></li>
            <li>
              <a href="/" className="Home">Home</a></li>
            <li> <a href="/Delivary">Delivary</a></li>
            <li> <a href="/Payment">Payment</a></li>
          </ul>
          <ul className="nav-navbar">
            <li> <a href="/CalSS+9992457434">Cal+9992457434</a></li>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="dropdown">
              <li>
                <button className="dropbtn">
                  English
                  <i className="fa fa-caret-down"></i>
                </button></li>
            </div>
          </ul>
        </nav>

      </div>
      <CarouselD/>
      <ProductInfo/>
      <Footer/>
      </ScrollView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({})