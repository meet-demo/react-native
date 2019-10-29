"use strict";
import React, { Component,useState  } from 'react';
import {Text, View} from 'react-native';

import Header from '../../components/Header';

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
        <View style={{backgroundColor:'#F5F5F5'}}>
            <Header/>
            <Text>News</Text>
        </View>
      );
    };
}
