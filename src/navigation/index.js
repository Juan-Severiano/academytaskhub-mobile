import React from 'react'
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from '../views/HomeScreen'
import testScreen from '../views/testScreen'
import Filter from '../views/FilterScreen'
import YourTasks from '../views/YourTasksScreen'
import Add from '../views/AddScreen'
import Perfil from '../views/PerfilScreen'
import Login from '../views/Login'

const Tab = createBottomTabNavigator()

export default props => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        switch (route.name) {
          case 'HomeScreen':
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
            break
          case 'Filter':
            iconName = focused
              ? 'filter'
              : 'filter-outline';
            break
          case 'Add':
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
            break
          case 'YourTasks':
            iconName = focused
              ? 'grid'
              : 'grid-outline';
            break
          case 'Perfil':
            iconName = focused
              ? 'person-circle'
              : 'person-circle-outline';
            break
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}
  >
    <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ tabBarLabel: 'Tarefas' }} />
    <Tab.Screen name='Filter' component={Filter} options={{ tabBarLabel: 'Filter' }} />
    <Tab.Screen name='Add' component={Add} options={{ tabBarLabel: 'Add' }} />
    <Tab.Screen name='YourTasks' component={YourTasks} options={{ tabBarLabel: 'YourTasks' }} />
    <Tab.Screen name='Perfil' component={Perfil} options={{ tabBarLabel: 'Perfil' }} />

  </Tab.Navigator>
)
