import React, { Component } from 'react'
import { Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import styles from '../styles/styles.js'

import DrawerButton from '../DrawerButton'

export default class NewSession extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.newSessionContainer}>
        <StatusBar barStyle='dark-content' />

        <DrawerButton onPress={() => navigate('DrawerOpen')} />

        <View style={styles.logoContainer}>
          <Image source={require('../../images/bicycle.gif')} style={styles.sessionLogo} />
          <Text style={styles.title}>
            Start New Session (pending slider)
          </Text>
        </View>
      </View>
    )
  }
}
