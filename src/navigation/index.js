import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from '../views/HomeScreen'
import testScreen from '../views/testScreen'

const Tab = createBottomTabNavigator()

export default props => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName
        switch(route.name) {
          case 'HomeScreen':
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
            break
          case 'testScreen':
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
            break
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
  <Tab.Screen name='HomeScreen' component={HomeScreen} />
  <Tab.Screen name='testScreen' component={testScreen} />

  </Tab.Navigator>
)
