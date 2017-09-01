import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  View
} from 'react-native'
import { Constants } from 'expo'

export default class SideNav extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('EditProfile')}
          title="Edit Profile"
          color="#000"
        />
        <Button
          onPress={() => navigate('Sensor')}
          title="Sensor"
          color="#000"
        />
        <Button
          onPress={() => navigate('Settings')}
          title="Settings"
          color="#000"
        />
        <Button
          onPress={() => navigate('Logout')}
          title="Logout"
          color="#000"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e1e8f0',
    alignItems: 'center'
  }
})
