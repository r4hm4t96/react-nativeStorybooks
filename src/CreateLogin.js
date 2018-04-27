import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Image,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    ToastAndroid,
    StatusBar,
    Alert,
    AsyncStorage
} from 'react-native'
import {RequestHelper, setInitialRoute} from '../assets/libraries/Helpers';

var styles = require('../assets/styles/Style1');

export default class CreateLogin extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.props = props;
        this.state={
            username:null,
            password:null,
            isReady:false,
            token: null,
            // instruksi: false,
            loading:false,
        };
        this.inputFile={};
        this.instruksi= this.instruksi.bind(this);
    }

   
    // componentDidMount = async () => {
    //     const v = await AsyncStorage.getItem("accessToken");
    //     if (v != undefined) {
    //         this.setState({ token_storage: v });
    //         setInitialRoute('HomeScreen', this.props);
    //     };
    // };

    componentDidMount(){

    };

    handleUserName = (text) => {
        this.setState({ username: text })
    };

    handlePassword = (text) => {
        this.setState({ password: text })
    };

    focusNext(id) {
        this.inputFile[id].focus();
    };

    instruksi() {
        this.setState({
          loading: true
        });
        setTimeout(() => {
          this.setState({
            instruksi: true,
            loading: false
          })
        }, 2000)
      }

      SomethisReing = async () => {
        if(this.state.username == null || this.state.password == null || this.state.username.trim() == "" || this.state.password.trim() == ""){
            Alert.alert("Error", "Please fill a valid username and password!");
        }else{
            if(!this.state.isReady) {
                this.setState({isReady: true});
                let bodyParameter = {
                    email: this.state.username,
                    password: this.state.password,
                };
                try{
                    var data = await RequestHelper('https://reqres.in/api/login', 'POST', bodyParameter);
                    this.setState({isReady: false});
                    if(data.error != undefined){
                        Alert.alert("Error", data.error);
                    }else if(data.token != undefined){
                        this.setState({token: data.token});
                        AsyncStorage.setItem("accessToken", data.token);
                        setInitialRoute('HomeScreen', this.props);
                    }
                    // setInitialRoute('HomeScreen', this.props);
                    // this.props.navigation.navigate('HomeScreen');
                }catch(error){
                    ToastAndroid.show(error.message, 0);
                    this.setState({isReady: false});
                }
            }
        }
    };

    render(){
        return(
            
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                    }}
                >
                <StatusBar translucent={true} backgroundColor="rgba(255, 255, 255, 0)"/>
                
                <Image style={{flex:1,
                        resizeMode:'stretch',
                        position:'absolute'}}

                    source={require("../images/background.jpg")}/>

            <View style={styles.container}>
                <Image source={require('../images/logo.png')} style={styles.EditImage}/>
           
                    <TextInput style={styles.EditText}
                        underlineColorAndroid="transparent"
                        placeholder="Username"
                        blurOnSubmit={false}
                        returnKeyType={"next"}
                        onSubmitEditing={() => {this.focusNext('password')}}
                        ref={input => {
                            this.inputFile['username'] = input;
                        }}
                         onChangeText={this.handleUserName}
                    />

                    <TextInput style={styles.EditText}
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        blurOnSubmit={true}
                        secureTextEntry={true}
                        returnKeyType={"done"}
                        onSubmitEditing={() => {this.SomethisReing()}}
                        ref={input => { 
                            this.inputFile['Password'] = input;
                        }}
                        onChangeText={this.handlePassword}
                        
                    />

                    <TouchableOpacity style={styles.EditButton} onPress={this.SomethisReing} >
                    {
                        this.state.isReady ?
                        <ActivityIndicator color="blue" size="small" animating /> :
                        <Text style={{color:'#FF9800'}}>LOGIN </Text>
                    }
                    </TouchableOpacity>
            </View>
        </View>
        );
    };
};