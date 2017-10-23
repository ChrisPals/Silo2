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
  TextInputlars,
} = ReactNative;

//definnere hvad classen hedder og hvad den extender

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
     this.fireRef = firebase.storage().ref('items')
     this.itemsRef = firebase.database().ref().child('items')
    }
    
  getRef() {
    return firebase.database().ref();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.listContainer} behavior="padding" >
        <StatusBar title="Add Question"/>

        <TextInput
            style={{flex: 1}}
        />

        <TextInput
            style={{textAlign: 'center', height: 400, fontSize: 20}}
            placeholder="Type your question here"
            onChangeText={(text) => this.setState({text})}
        />

          <ActionButton onPress={this._addItem.bind(this)} title="Add" />

            <BottomToolbar>
              <BottomToolbar.Action
                title="Home"
                onPress={(index, propsOfThisAction) =>
                  Actions.HomePage()}
              />
              <BottomToolbar.Action
                title="Noti"
                onPress={(index, propsOfThisAction) =>
                  console.warn(index + ' ' + JSON.stringify(propsOfThisAction))}
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
  _addItem() {
    this.itemsRef.push({ title: this.state.text, timestamp: firebase.database.ServerValue.TIMESTAMP});
  }
}

//Exporterer til app.js så den kan bruges
module.exports = AddQuestion;
