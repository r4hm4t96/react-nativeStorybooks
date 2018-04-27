import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ToastAndroid,
  StatusBar,
  TextInput,
} from 'react-native';
// import {SearchBar} from '../CariBar';
import { Icon } from 'react-native-elements';

export default class FlatListComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  componentDidMount() {
    return fetch('https://reqres.in/api/users?page=2')
          //  fetch('https://reqres.in/api/users?page')
      .then((response) => response.json())
      .then((responseJson) => {
        // just setState here e.g.
        this.setState({ dataSource: responseJson.data, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderItem = ({ item }) => {
    return (
      
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3, }}
        onPress={() => ToastAndroid.show(item.first_name + item.last_name, ToastAndroid.SHORT)}>
        <Image style={{ width: 100, height: 100, margin: 5 }}
          source={{ uri: item.avatar }} />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>
            {item.first_name} {item.last_name}
          </Text>
        </View>
      </TouchableOpacity>
    )

  }

  renderSeparator = () => {
    return (
      <View
        style={{ height: 1, width: '100%', backgroundColor: 'black' }}>

      </View>
     
    )
  }

  
  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <View style={{paddingBottom:20, paddingTop:20}}>
           {/* <SearchBar/> */}
           </View>
        <View style={{ flex: 1, paddingTop: 20 }}>
       
          <StatusBar
          translucent={true}
          backgroundColor="rgba(255, 255, 255, 0)" />
          <ActivityIndicator />
        </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
      {/* <SearchBar/> */}
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
       
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  touchButton: {
    alignSelf: 'center',
    backgroundColor: '#2980b9',
    paddingVertical: 25,
    width: 295,
    margin: 15,
  },
  touchButtonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold'
  },
  container: {
      backgroundColor: "#03A9F4",
      position: 'absolute',
      width: '100%',
      zIndex: 9,
      paddingTop: 25,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 15
  },
});