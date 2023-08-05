import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack';

import Auth from '../views/Auth'
import App from '../../App'

const mainRoutes = {
  Auth: {
    name: 'Auth',
    screen: Auth,
  },
  Home: {
    name: 'Home',
    screen: App,
  }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
  initialRouteName: 'Auth'
})

export default createAppContainer(mainNavigator)
