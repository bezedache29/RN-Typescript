/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'

import { useLogging } from './hooks/useLogging'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreScreen from './screens/ExploreScreen'
import RestaurantsScreen from './screens/RestaurantsScreen'
import ProfileScreen from './screens/ProfileScreen'

export type RootStackParams = {
  Explore
  Restaurants
  Profile
}

const RootStack = createNativeStackNavigator<RootStackParams>()

const App = () => {
  const [logging] = useLogging('Application')

  useEffect(() => {
    logging.info('Loading application...')
  }, [logging])

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Explore">
        <RootStack.Screen name="Explore" component={ExploreScreen} />
        <RootStack.Screen name="Restaurants" component={RestaurantsScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
