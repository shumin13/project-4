import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA8NyWPjkQLV6duBnyAf-K9WE-UDbiaLOQ",
  authDomain: "project-4-c79e1.firebaseapp.com",
  databaseURL: "https://project-4-c79e1.firebaseio.com",
  projectId: "project-4-c79e1",
  storageBucket: "project-4-c79e1.appspot.com",
  messagingSenderId: "437402668990"
}
firebase.initializeApp(firebaseConfig)

import React from 'react'
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import SideNav from './src/components/SideNav'

import Login from './src/components/Auth/Login'
import Register from './src/components/Auth/Register'

import Home from './src/tabs/Home'
import Settings from './src/tabs/Settings'
import Profile from './src/screens/Profile'
import Modal from './src/screens/Modal'



// Stack navigation for Settings and Profile screens
const SettingsTab = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null,               // Hide the header
      headerBackTitle: 'Back',    // Title back button Back when we navigate to Profile from Settings
    },
  },
  // Profile: {
  //   screen: Profile,
  //   navigationOptions: ({ navigation }) => ({
  //     // Customize header's title with user name passed to navigate()
  //     // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
  //     title: `${navigation.state.params.user}'s Profile`,
  //   }),
  // },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,               // Hide the header
      headerBackTitle: 'Back',    // Title back button Back when we navigate to Profile from Settings
    },
  },
}, {
  headerMode: 'screen',
})

// Tab navigation for Home and Settings screens
const TabNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    },
  },
  Settings: {
    screen: SettingsTab,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-settings' : 'ios-settings-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    },
  },
})

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = DrawerNavigator({
  Tabs: {
    screen: TabNavigation,
  }
}, {
  // Register custom drawer component
  contentComponent: props => <SideNav {...props} />
})

// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
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
  TabsWithDrawer: {
    screen: TabsWithDrawerNavigation,
  },
  Modal: {
    screen: Modal
  },
}, {
  // In modal mode screen slides up from the bottom
  mode: 'modal',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
  headerMode: 'none',
})
