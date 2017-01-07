import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDIrhFQdsflU1HuTo0LBPme2sy45VaK26A",
  authDomain: "todofirebaseapp-7e3dd.firebaseapp.com",
  databaseURL: "https://todofirebaseapp-7e3dd.firebaseio.com",
  storageBucket: "todofirebaseapp-7e3dd.appspot.com",
  messagingSenderId: "863948846414"
};
firebase.initializeApp(config);

const database = firebase.database();
const databaseRef = database.ref();

databaseRef.set({
  nome: 'Breno Henrique'
});

export default class todoFirebaseApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('todoFirebaseApp', () => todoFirebaseApp);