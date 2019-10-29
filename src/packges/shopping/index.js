"use strict";
import React, { Component,useState  } from 'react';
import {Text, View} from 'react-native';

import Header from '../../components/Header';
import Carousel from '../../components/Carousel';

let that = null;

//类形式
export default class HomePage extends Component {
    constructor(props) {
      super(props);
      that = this;
      this.state = {
         count: 0
      }
    }
    render() {
      return (
        <View style={{backgroundColor:'#F6F6F6'}}>
          <Header/>
           <Text>hello</Text>
        </View>
      );
    };
}
