import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA8NyWPjkQLV6duBnyAf-K9WE-UDbiaLOQ',
  authDomain: 'project-4-c79e1.firebaseapp.com',
  databaseURL: 'https://project-4-c79e1.firebaseio.com',
  projectId: 'project-4-c79e1',
  storageBucket: 'project-4-c79e1.appspot.com',
  messagingSenderId: '437402668990'
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import Login from './src/components/Auth/Login'
import Register from './src/components/Auth/Register'
import Profile from './src/components/Profile/Profile'
import SideNav from './src/components/SideNav'

import Home from './src/tabs/Home'
import Settings from './src/tabs/Settings'

const drawerNavigation = DrawerNavigator({
  Tabs: {
    screen: Home
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
