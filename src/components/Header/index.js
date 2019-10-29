"use strict";
import React, { Component,useState  } from 'react';
import {Text, View, TextInput} from 'react-native';
import { Header,SearchBar  } from 'react-native-elements';
import styles from '../../styles/header'


export default class HeaderComponent extends Component {
    render(){
        return(
            <View style={styles.TitleBar}>
                <View style={styles.TitleIcon}>
                    <View style={styles.TitleMarg}>
                        <Text style={styles.font}>{'\ue60c'}</Text>
                        <Text style={styles.TitleSize}>扫啊扫</Text>
                    </View>
                    <View style={styles.TitleMarg}>
                        <Text style={styles.font}>{'\ue659'}</Text>
                        <Text style={styles.TitleSize}>分类</Text>
                    </View>
                </View>
                <View style={{marginHorizontal:10,borderRadius:100,backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.search}>{'\ue695'}</Text>
                    <TextInput style={{height:30,fontSize:12,padding: 0,color:'#ccc',flex:1}} placeholder='请输入'/>
                    <Text style={styles.photo}>{'\ue644'}</Text>
                </View>
                <View style={{backgroundColor:'#C82519',height:130}}>
                    
                </View>
            </View>
        );
    }

}