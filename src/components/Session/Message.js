/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

var SmsAndroid = require('react-native-sms-android');
// import SmsAndroid from 'react-native-sms-android';


export default class AndroidTest extends Component {
  sendSMSFunction() {
    SmsAndroid.sms(
  '+65 8569 4149', // phone number to send sms to
  'This is the sms text', // sms body
  'sendDirect', // sendDirect or sendIndirect
  (err, message) => {
    if (err){
      console.log("error");
    } else {
      console.log(message); // callback message
    }
  }
);
  SmsAndroid.sms(
  '+65 9819 9862', // phone number to send sms to
  'This is the indirect text', // sms body
  'sendDirect', // sendDirect or sendIndirect
  (err, message) => {
  if (err){
    console.log("error");
  } else {
    console.log(message); // callback message
  }
  }
  );

  SmsAndroid.sms(
'+65 65 9819 9862', // phone number to send sms to
'This is the sms text', // sms body
'sendIndirect', // sendDirect or sendIndirect
(err, message) => {
  if (err){
    console.log("error");
  } else {
    console.log(message); // callback message
  }
}
);
}

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={this.sendSMSFunction.bind(this)}>
           <Text>Send SMS</Text>
         </TouchableOpacity>
        <Text style={styles.welcome}>
            i hope works!
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
     padding: 10,
     borderWidth: .5,
     borderColor: '#bbb',
     margin: 10,
     alignItems: 'center',
     justifyContent: 'center'
   }
});

// AppRegistry.registerComponent('AndroidTest', () => AndroidTest);
