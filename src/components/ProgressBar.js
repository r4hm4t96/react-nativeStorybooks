import React, { Component } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.width = new Animated.Value(0);
        this.parentWidth = Dimensions.get('window').width;
    }

    componentDidMount = () => {
        Animated.spring(this.width, {
            toValue: (this.props.progress / 100) * this.parentWidth,
        }).start();
    };

    componentDidUpdate = () => {
        Animated.spring(this.width, {
            toValue: (this.props.progress / 100) * this.parentWidth,
        }).start();
    }


    render() {
        return (
            <View onLayout={ (event)=> this.parentWidth = event.nativeEvent.layout.width } style={{ width: "100%" }}>
                <Animated.View style={{ width: this.width, backgroundColor: 'red', height: 50, position: 'absolute', zIndex: 9, }} />
                <Animated.View style={{ backgroundColor: 'grey', height: 50 }} />
            </View>
        );
    }
}
