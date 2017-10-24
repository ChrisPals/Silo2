import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as firebase from 'firebase';
import StatusBar from './StatusBar';
import ActionButton from './ActionButton';
import ListItem from './ListItem';
import styles from '../styles';
import HomePage from './HomePage';
import BottomToolbar from 'react-native-bottom-toolbar'

const {
  AsyncStorage,
  ListView,
  StyleSheet,
  TextInput,
  Text,
  Item,
  View,
  KeyboardAvoidingView,
  TouchableHighlight,
  Alert,
  TitledInput,
  TextInputlars,
} = ReactNative;

//definnere hvad classen hedder og hvad den extender

class About extends Component {
  
    

  render() {
    return (
      <KeyboardAvoidingView style={styles.listContainer} behavior="padding" >
        <StatusBar title="About" />
        <Text style={{flex: 1, fontSize: 20}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
       


        <BottomToolbar>
        <BottomToolbar.Action
          title="Home"
          onPress={(index, propsOfThisAction) =>
            Actions.HomePage()}
        />
        <BottomToolbar.Action
        title="Knowledge"
        onPress={(index, propsOfThisAction) =>
            Actions.Knowledge()}

        />
        <BottomToolbar.Action
        title="Menu"
        onPress={(index, propsOfThisAction) =>
          Actions.Menu()}
        />
      </BottomToolbar>
      </KeyboardAvoidingView>

    )
  }
  
}

//Exporterer til app.js så den kan bruges
module.exports = About;