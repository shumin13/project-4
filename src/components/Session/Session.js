import React, { Component } from 'react'
import { Text, View, Image, StatusBar, Switch } from 'react-native'
import styles from '../styles/styles.js'
import DrawerButton from '../DrawerButton'

export default class Session extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: false
    }
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.newSessionContainer}>
        <StatusBar barStyle='dark-content' />
        <DrawerButton onPress={() => navigate('DrawerOpen')} />

        <Image source={require('../../images/bicycle.gif')} style={styles.sessionLogo} />

        <View style={{flexDirection: 'row', zIndex: 1}}>
          <Text style={styles.header}>
            Start New Session?
          </Text>

          <Switch
            style={{marginLeft: 10}}
            value={this.state.value}
            onValueChange={(value) => this.setState({value})}
          />
        </View>
      </View>

    )
  }
}
