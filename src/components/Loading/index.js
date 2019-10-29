import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

let {height, width} = Dimensions.get('window');
export default class Loading extends Comment {
    constructor(props) {
        super(props);
        that = this;
        this.state = {
            show: false
        }
    };
    static show = () => {
        that.setState({ show: true })
    };
    static hide = () => {
        that.setState({ show: false })
    };
    render() {
        return ( 
            <View style={styles.LoadingBg}>
                <Text> Loading... </Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    LoadingBg: {
        backgroundColor: 'rgba(0,0,0,.8)',
        width: width,
        height: height,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});