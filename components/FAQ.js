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

class FAQ extends Component {
  
    

  render() {
    return (
      <KeyboardAvoidingView style={styles.listContainer} behavior="padding" >
        <StatusBar title="FAQ + Fre..." />
        <Text style={{flex: 1, fontSize: 20}}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
           and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, 
           sometimes on purpose (injected humour and the like).
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
module.exports = FAQ;