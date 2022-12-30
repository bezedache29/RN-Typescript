import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { RootStackParams } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import RestaurantCard from '../components/RestaurantCard'

type Props = NativeStackScreenProps<RootStackParams, 'Restaurant'>

const RestaurantScreen = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>{route.params.name}</Text>

      <Text>Related restaurants</Text>
      <RestaurantCard
        name="Sushi 1"
        onPress={() => {
          navigation.push('Restaurant', { name: 'Sushi 1' })
        }}
      />
      <RestaurantCard
        name="Sushi 2"
        onPress={() => {
          navigation.push('Restaurant', { name: 'Sushi 2' })
        }}
      />
      <RestaurantCard
        name="Sushi 3"
        onPress={() => {
          navigation.push('Restaurant', { name: 'Sushi 3' })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 24 : 0,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
})

export default RestaurantScreen
