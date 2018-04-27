import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { colors } from 'react-native-elements';

export default class Button extends Component {
    static defaultProps = {
        title: 'Button',
        onPress: () => {},

    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.8}>
                <View style={{ width:'50%', backgroundColor: 'orange', alignSelf:'center', borderWidth:1, }}>
                    <Text style={{ textAlign: 'center', color: 'steelblue' }}>Press</Text>
                </View>
            </TouchableOpacity>
        )
    }
}