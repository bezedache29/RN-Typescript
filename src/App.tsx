/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import Card from './components/Card'
import { useLogging } from './hooks/useLogging'

const App = () => {
  const [logging] = useLogging('Application')

  useEffect(() => {
    logging.info('Loading application...')
  }, [logging])

  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>Restaurants App</Text>

        <View style={styles.content}>
          <Text>Explore</Text>
          <Text>Restaurants</Text>
          <Text>Profile</Text>
        </View>

        <Card title="Mon super titre" content="mon super content" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
})

export default App
