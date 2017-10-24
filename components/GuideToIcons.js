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

class GuideToIcons extends Component {
  
    

  render() {
    return (
      <KeyboardAvoidingView style={styles.listContainer} behavior="padding" >
        <StatusBar title="Guide To Icons" />
        <Text style={{flex: 1, fontSize: 20}}>
        Dette ikon angiver at dette er et økonomi spørgsmål
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
module.exports = GuideToIcons;