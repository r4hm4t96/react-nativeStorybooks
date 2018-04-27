import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class Checkbox extends Component {
    static defaultProps = {
        title: 'Checkbox',
        iconWidth: 25,
        iconHeight: 25
    }

    constructor(props) {
        super(props);
        this.state = {
            enabled: false,
        }
    }

    doUpdate = () => {
        this.setState({ enabled: !this.state.enabled });
        this.props.onChange(!this.state.enabled);
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={this.doUpdate}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Image style={{
                        resizeMode: 'stretch',
                        width: this.props.iconWidth, height: this.props.iconHeight
                    }} source={this.state.enabled ? require('../../images/cbox_enabled.png') : require('../../images/cbox_disabled.png')} />
                    <Text style={{ alignSelf: 'center' }} > {this.props.title} </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
