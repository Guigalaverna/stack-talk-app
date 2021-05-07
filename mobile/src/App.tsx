import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import PlayerProvider from './contexts/PlayerContext'
import AppRoutes from './routes/App.routes'

function App() {
  return (
    <NavigationContainer>
      <PlayerProvider>
        <AppRoutes />
      </PlayerProvider>
    </NavigationContainer>
  )
}

export default App
