"use strict";
import React, { Component,useState  } from 'react';
import {View,Text,Image} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../../styles/carousel'

export default class CarouselComponent extends Component {
    render(){
        return(
            <View style={styles.bann}>
                <Image source={require('../../assets/images/bann2.png')} style={{resizeMode:'cover',height:'100%',width:'100%',borderRadius:10}}/>
              {/* <Swiper 
                    style={styles.wrapper} 
                    showsButtons={false} 
                    autoplay={true} 
                    paginationStyle={styles.paginationStyle} 
                    dotStyle={styles.dotStyle} 
                    activeDotStyle={styles.activeDotStyle}
                >
                    <Image source={require('../../assets/images/bann1.png')} style={styles.bannerImg} />
                    <Image source={require('../../assets/images/bann1.png')} style={styles.bannerImg} />
                    <Image source={require('../../assets/images/bann1.png')} style={styles.bannerImg} />
                    <Image source={require('../../assets/images/bann1.png')} style={styles.bannerImg} />
                </Swiper> */}
            </View>
        );
    }

}