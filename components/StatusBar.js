import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Actions} from 'react-native-router-flux';

const styles = require('../styles.js')
const { Button, StyleSheet, Text, View} = ReactNative;

class StatusBar extends Component {
  render() {
    return (
      <View>
        <View style={styles.statusbar}/>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
          <Button style={styles.alignLeft} onPress={(index, propsOfThisAction) =>
          Actions.pop()} title="back" />


        </View>
      </View>
    );
  }
}

module.exports = StatusBar;
