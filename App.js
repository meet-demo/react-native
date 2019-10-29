"use strict";
import React, { Component,useState  } from 'react';
import {StyleSheet, Text, View,Alert,TouchableOpacity,StatusBar} from 'react-native';
import zysoft from './src/api';

import Header from './src/components/Header';
import Carousel from './src/components/Carousel';
import Table from './src/components/TableBar';
let that = null;

//类形式
export default class Main extends Component {
    constructor(props) {
      super(props);
      that = this;
      this.state = {
         count: 0
      }
    }
    componentDidMount(){
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
    render() {
      return (
        <Table/>
      );
    };
}
//React Hooks 编写 函数编程
// function demo(){
//   const [ count , setCount ] = useState(0);
//       return (
//         <View style={styles.BottomContent}>
//             <Text onPress={()=>{
//               Alert.alert(
//                 '温馨提示',
//                 `当前数值为：${count} 你确定数值+1？`,
//                 [
//                   {text: '确定', onPress: () => setCount(count+1)},
//                   {
//                     text: '取消',
//                     onPress: () => setCount(count-1),
//                     style: 'cancel',
//                   },
//                 ],
//                 {cancelable: false},
//               );
//             }}>hello {count}</Text>
//           </View>
//       );
// }
// export default demo;

const styles = StyleSheet.create({
  TitleBar:{
    backgroundColor: 'rgb(255,37,27)',
    width:'100%',
    height:80,
  },
  TitleText:{
    color:'#FFF',
    fontWeight:'bold',
    textAlign:'center',
    fontSize: 15,
    marginTop:45,

  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  BottomContent:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonRadius:{
    color:'#fff',
    fontSize: 20,
    marginBottom: 20,
    marginRight: 20,
    textAlign:'center',
    alignItems: 'center',
    lineHeight:50,
    alignSelf: 'flex-end',
    elevation: 5,
    height: 50,
    width: 50,
    borderRadius:100,
    backgroundColor:'rgba(28,134,238,.8)',
  }

});