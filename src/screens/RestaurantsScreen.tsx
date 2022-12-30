import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native'
import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Menu from '../components/Menu'
import { RootStackParams } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParams, 'Restaurants'>

const RestaurantsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>RestaurantsScreen</Text>
      <ScrollView>
        <RestaurantCard
          name="Sushi restaurant"
          onPress={(name) => {
            navigation.navigate('Restaurant', { name })
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={(name) => {
            navigation.navigate('Restaurant', { name })
          }}
        />
        <RestaurantCard
          name="Fine dining restaurant"
          onPress={(name) => {
            navigation.navigate('Restaurant', { name })
          }}
        />
        <RestaurantCard
          name="Sushi restaurant"
          onPress={(name) => {
            navigation.navigate('Restaurant', { name })
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={(name) => {
            navigation.navigate('Restaurant', { name })
          }}
        />
        <RestaurantCard
          name="Fine dining restaurant"
          onPress={(name) => {
            navigation.navigate('Restaurant', { name })
          }}
        />
      </ScrollView>
      <Menu />
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

export default RestaurantsScreen
