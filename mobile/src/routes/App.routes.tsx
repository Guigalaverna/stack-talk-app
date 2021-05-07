import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Player from '../screens/Player'

const { Navigator, Screen } = createStackNavigator()

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
      <Screen name='Player' component={Player} />
    </Navigator>
  )
}

export default AppRoutes