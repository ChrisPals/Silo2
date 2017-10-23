import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as firebase from 'firebase';
import StatusBar from './StatusBar';
import ActionButton from './ActionButton';
import ListItem from './ListItem';
import styles from '../styles';
import Menu from './Menu';
import AddQuestion from './AddQuestion';
import BottomToolbar from 'react-native-bottom-toolbar'

const {
  AsyncStorage,
  ListView,
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableHighlight,
  Alert
} = ReactNative;

//definnere hvad classen hedder og hvad den extender

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',      
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items').orderByChild('timestamp')
  }
  getRef() {
    return firebase.database().ref();
  }
  componentDidMount() {     
      this.listenForItems(this.itemsRef);
  }
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items.reverse())
      });
    });
  }


  
  render() {
    return (
      <KeyboardAvoidingView style={styles.listContainer} behavior="padding" >
        <StatusBar title="DØK Channel" />
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderItem.bind(this)}
        enableEmptySections={true}
        style={styles.listview}/>
          
        <ActionButton onPress={Actions.AddQuestion} title="Add Question" />
        <BottomToolbar>
          <BottomToolbar.Action
            title="Home"
            onPress={(index, propsOfThisAction) =>
              Actions.HomePage()}
          />
          <BottomToolbar.Action
          title="Noti"
          onPress={(index, propsOfThisAction) =>
            Actions.Authentication()}
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
    this.itemsRef.push({ title: this.state.text });
  }
  _renderItem(item) {
    const onPress = () => {
      Actions.Topic({ title: item.title, item: item});
        // null,
        // [
        //   {text: 'Yes', onPress: (text) => Actions.Topic()},
        //   {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        // ],
        // {cancelable: false}
    };
    return (
      <ListItem item={item} onPress={onPress} />
    );
  }
}
//Exporterer til app.js så den kan bruges
module.exports = HomePage;