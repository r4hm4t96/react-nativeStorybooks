import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Image,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    StatusBar,
    AsyncStorage,
    ToastAndroid,
} from 'react-native';

import {RequestHelper,setInitialRoute} from '../assets/libraries/Helpers';

export default class SplashScreen extends Component{
    constructor(props){
        super(props);
        this.props = props;
    };

    componentDidMount(){
        setTimeout(async()=>{
            var token = await AsyncStorage.getItem("accessToken");
            if(token != null){
                setInitialRoute('HomeScreen', this.props);   
           }else{
                setInitialRoute('Login', this.props);   
           }
        },1000 );
    };

    render(){
        return(
            <View style = {{
                flex:1,
                flexDirection: 'column',
                justifyContent:'center',
            }}>
            <StatusBar translucent={true} backgroundColor="rgba(255,255,255,0)"/>
            <Image 
                source={require("../images/background.jpg")}/>
            <View style={{
                position: 'absolute',
                backgroundColor:"white",
                paddingLeft:10,
                paddingRight:10,
                paddingTop:33,
                paddingBottom:33,
                width:150,
                alignSelf:'center',
                borderRadius:200
            }} >
                <Image 
                    source={require("../images/logo.png")}
                    style={styles.logo}/>
            </View>
        </View>
        );
    }

}

const styles = StyleSheet.create({
    logo:{
        width: "100%",
        height: 80,
        resizeMode: "contain",
    }
})