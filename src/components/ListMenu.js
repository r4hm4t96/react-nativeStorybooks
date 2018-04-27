import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native'

import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import Button from './Button';
// import { AlphaNumeric, Password, Numeric, Currency } from './TextComp';
import TextComp from './TextComp';
import Checkbox from './CheckBox';
import ProgressBar from './ProgressBar';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      tambah: false,
    }
  }

  addProgress = () => {
    if (this.state.progress < 100) {
      if (this.state.tambah) {
        this.setState({ progress: this.state.progress + 10 });
      } else {
        if (this.state.progress > 0)
          this.setState({ progress: this.state.progress - 10 });
      }
    }
  }

  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    return (
      <View>
        <Dropdown
          label='Favorite Fruit'
          data={data}/>
        {/* <AlphaNumeric />
        <Password />
        <Numeric />
        <Currency prefix="Rp." separator="," /> */}
        <TextComp/>
        <TextComp inputType='Numeric'/>
        <TextComp inputType='Password'/>
        <TextComp inputType='Currency' prefix='Rp.' />
        <ProgressBar progress={this.state.progress} />
        <Checkbox title="Add Progress" onChange={(bool) => this.setState({ tambah: bool })} />
        <Button  title={'Add More'} onPress={this.addProgress} />
      </View>
    );
  }
}