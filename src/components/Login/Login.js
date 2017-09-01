import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import { Constants } from 'expo'
import LoginForm from './LoginForm'

export default class Home extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>

          <View style={styles.logoContainer}>
            <Image source={require('../../images/logo.gif')} style={styles.logo} />
            <Text style={styles.title}>
              Project Title
            </Text>
          </View>

          <View style={styles.formContainer}>
            <LoginForm />
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
    marginVertical: 20,
    marginTop: 30
  }
})
