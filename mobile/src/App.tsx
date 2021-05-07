import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import Home from './screens/Home'
import PlayerProvider from './contexts/PlayerContext'

function App() {
  return (
    <NavigationContainer>
      <PlayerProvider>
        <Home />
      </PlayerProvider>
    </NavigationContainer>
  )
}

export default App
