import React, {Component} from 'react';
import { ActivityIndicator, AsyncStorage, StyleSheet, Text, View } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import * as firebase from 'firebase';
import Authentication from './components/Authentication';
import HomePage from './components/HomePage';
import Topic from './components/Topic';
import Menu from './components/Menu';
import About from './components/About';
import FAQ from './components/FAQ';
import NotificationSettings from './components/NotificationSettings';
import SendFeedback from './components/SendFeedback';
import GuideToIcons from './components/GuideToIcons';
import AddQuestion from './components/AddQuestion';
import Knowledge from './components/Knowledge';
import BottomToolbar from 'react-native-bottom-toolbar';



const firebaseConfig = {
  apiKey: "AIzaSyDGx6zhZQToXDNJwx0sqRwRJosMFFFZSJU",
  authDomain: "test-1d316.firebaseapp.com",
  databaseURL: "https://test-1d316.firebaseio.com",
  projectId: "test-1d316",
  storageBucket: "test-1d316.appspot.com",
  messagingSenderId: "1006265468223"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
console.ignoredYellowBox = [
  "Setting a timer"
];

export default class App extends Component {
  constructor() {
    super();
    this.state = { hasToken: false, isLoaded: false };
  }
  componentWillMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true });
    });
  }
  render() {
    if (!this.state.isLoaded) {
      return (
        <ActivityIndicator />
      )
    } else {
      return (
        <Router>
          <Scene key='root'>
            <Scene
              component={HomePage}
              hideNavBar={true}
              initial={this.state.hasToken}
              key='HomePage'
              title='Home Page'
            />
            <Scene
              component={Topic}
              hideNavBar={true}
              initial={this.state.hasToken}
              key='Topic'
              title='Topic'
            />
            <Scene
              component={Menu}
              hideNavBar={true}
              initial={this.state.hasToken}
              key='Menu'
              title='Menu'
            />
            <Scene
              component={Authentication}
              hideNavBar={true}
              initial={!this.state.hasToken}
              key='Authentication'
              title='Authentication'
            />
            <Scene
              component={About}
              hideNavBar={true}
              initial={!this.state.hasToken}
              key='About'
              title='About'
            />
            <Scene
              component={FAQ}
              hideNavBar={true}
              initial={!this.state.hasToken}
              key='FAQ'
              title='FAQ'
            />
            <Scene
              component={GuideToIcons}
              hideNavBar={true}
              initial={!this.state.hasToken}
              key='GuideToIcons'
              title='GuideToIcons'
            />
            <Scene
              component={NotificationSettings}
              hideNavBar={true}
              initial={!this.state.hasToken}
              key='NotificationSettings'
              title='NotificationSettings'
            />
            <Scene
              component={SendFeedback}
              hideNavBar={true}
              initial={!this.state.hasToken}
              key='SendFeedback'
              title='SendFeedback'
            />
            <Scene
              component={AddQuestion}
              hideNavBar={true}
              initial={!this.state.hasToken}
              key='AddQuestion'
              title='AddQuestion'
            />
            <Scene
              component={Knowledge}
              hideNavBar={true}
              initial={!this.state.hasToken}
              key='Knowledge'
              title='Knowledge'
            />
          </Scene>
        </Router>
      );
    }
  }
}