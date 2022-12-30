import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'
import { RootStackParams } from '../App'

const Menu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Explore')
        }}
      >
        <Text style={styles.link}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Restaurants')
        }}
      >
        <Text style={styles.link}>Restaurants</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile')
        }}
      >
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
  link: {
    fontSize: 16,
    marginTop: 4,
    color: '#097ade',
  },
  title: {
    fontSize: 18,
  },
})
