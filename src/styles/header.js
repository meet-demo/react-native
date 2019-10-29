import { StyleSheet } from 'react-native';

const Header = StyleSheet.create({
    font:{
      fontFamily:'iconfont',
      fontSize:25,
      color:'#FFF',
    },
    search:{
      fontFamily:'iconfont',
      fontSize:20,
      color:'#CCC',
      marginHorizontal:10
    },
    photo:{
      fontSize:30,
      fontFamily:'iconfont',
      color:'#CCC',
      marginHorizontal: 10,
    },
    TitleSize:{
      fontSize:10,
      color:'#FFF',
      alignSelf:'center'
    },
    TitleMarg:{
      marginRight: 10,
    },
    TitleIcon:{
      marginTop:25,
      marginBottom:5,
      flexDirection:'row',
      alignSelf: 'flex-end',
    },
    TitleBar:{
        backgroundColor: '#C82519',
        width:'100%',
        height:100,
      },
    TitleBarLeft:{

    }

});
export default Header;