import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import Login from './src/components/Auth/Login'
import Register from './src/components/Auth/Register'
import Profile from './src/components/Profile/Profile'
import SideNav from './src/components/SideNav'

import NewSession from './src/components/Session/NewSession'

const drawerNavigation = DrawerNavigator({
  Tabs: {
    screen: NewSession
  }
}, {
  // Register custom drawer component
  contentComponent: props => <SideNav {...props} />
})

export default StackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Profile: {
    screen: Profile
  },
  DrawerNavigation: {
    screen: drawerNavigation
  }
}, {
  headerMode: 'none'
})
