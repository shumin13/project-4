import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import styles from '../styles/styles.js'
import firebase from '../firebase'

export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      birthday: '',
      bloodType: '',
      allergy: '',
      emergContactName: '',
      emergContactNumber: ''
    }
  }

  _auth () {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.props.navigation.navigate('Profile'))
    .catch(function (error) {
      alert(error.message)
    })
  }

  render () {
    // var user = firebase.auth().currentUser

    const { navigate } = this.props.navigation
    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder='name'
              placeholderTextColor='rgba(0,0,0,0.6)'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(email) => this.setState({email})}
            />

            <TextInput
              style={styles.input}
              placeholder='birthday'
              placeholderTextColor='rgba(0,0,0,0.6)'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(email) => this.setState({email})}
            />

            <TextInput
              style={styles.input}
              placeholder='blood type'
              placeholderTextColor='rgba(0,0,0,0.6)'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(email) => this.setState({email})}
            />

            <TextInput
              style={styles.input}
              placeholder='allergy'
              placeholderTextColor='rgba(0,0,0,0.6)'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(email) => this.setState({email})}
            />

            <TextInput
              style={styles.input}
              placeholder='emergency contact name'
              placeholderTextColor='rgba(0,0,0,0.6)'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(email) => this.setState({email})}
            />

            <TextInput
              style={styles.input}
              placeholder='emergency contact number'
              placeholderTextColor='rgba(0,0,0,0.6)'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(email) => this.setState({email})}
            />

            <TouchableOpacity
              onPress={() => this._auth()}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>

          </View>

        </View>
      </KeyboardAvoidingView>
    )
  }
}
