import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import { Constants } from 'expo'
import * as firebase from 'firebase'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
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
    const { navigate } = this.props.navigation
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />

          <View style={styles.logoContainer}>
            <Image source={require('../../images/logo.gif')} style={styles.logo} />
            <Text style={styles.title}>
              Project Title
            </Text>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder='email'
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
              placeholder='password'
              placeholderTextColor='rgba(0,0,0,0.6)'
              returnKeyType='done'
              secureTextEntry
              ref={(input) => this.passwordInput = input}
              onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity
              onPress={() => this._auth()}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Register')}>
              <Text style={styles.otherText}>No account yet? Register now.</Text>
            </TouchableOpacity>

          </View>

        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ed3cf',
    paddingTop: Constants.statusBarHeight
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 80,
    height: 80
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 20,
    marginTop: 30
  },
  formContainer: {
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
  },
  otherText: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'italic',
    marginVertical: 10
  }
})
