import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

export default class TextComp extends Component {
    static defaultProps = {
        inputType: 'AlphaNumeric',
        prefix: "",
        sufix: "",
        separator: ".",
        placeholder: "Enter Text here ...",
    }

    static propTypes = {
        inputType: PropTypes.oneOf('AlphaNumeric', 'Numeric', 'Password', 'Currency', 'textbox'),
        prefix: PropTypes.string,
        sufix: PropTypes.string,
        separator: PropTypes.string,
        placeholder: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }


    filterNumeric = (text) => {
        var valNumber = text.replace(/[^0-9]/g, '');
        this.setState({ value: valNumber });
    }

    filterCurrency = (text) => {
        var data = text.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, this.props.separator);
        this.setState({ value: this.props.prefix + data + this.props.sufix });
    }
    render(){
        return (
            <TextInput 
                underlineColorAndroid="rgba(0,0,0,0)"
                secureTextEntry={
                    this.props.inputType=='Password'
                    ? true  
                    : false
                }

                value={this.state.value}
                onChangeText={
                    this.props.inputType=='Numeric'
                    ?this.filterNumeric
                    :this.props.inputType=='Currency'
                        ? this.filterCurrency
                        : (text)=> this.setState({value: text})
                }
                placeholder={
                    this.props.inputType == 'Numeric' || this.props.inputType=='Currency'
                    ?"0"
                    :this.props.placeholder
                }
                keyboardType={
                    this.props.inputType == 'Numeric' || this.props.inputType =='Currency'
                    ?"Numeric"
                    :this.props.inputType=='textbox'
                    ?'textbox-file'
                    :null
                }
                placeholderTextColor='black'
                style={[{
                    width:'100%',
                    borderWidth: 1,
                    borderColor: 'black',
                    paddingLeft: 8,
                    paddingRight: 8,
                },
                this.props.inputType=='Numeric' || this.props.inputType=='Currency'
                ?{textAlign:'right'}:null]}/>

            );
        }
    }