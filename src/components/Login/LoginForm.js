import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native'

export default class LoginForm extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <TextInput
          style={styles.input}
          placeholder='email'
          placeholderTextColor='rgba(0,0,0,0.6)'
          returnKeyType='next'
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder='password'
          placeholderTextColor='rgba(0,0,0,0.6)'
          returnKeyType='done'
          secureTextEntry
          ref={ (input) => this.passwordInput = input }
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#e1e8f0',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '700'
  }
})
