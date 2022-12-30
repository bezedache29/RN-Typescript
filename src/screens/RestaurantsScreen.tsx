import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native'
import React from 'react'
import RestaurantCard from '../components/RestaurantCard'

const RestaurantsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>RestaurantsScreen</Text>
      <ScrollView>
        <RestaurantCard name="Sushi restaurant" />
        <RestaurantCard name="Burger restaurant" />
        <RestaurantCard name="Fine dining restaurant" />
        <RestaurantCard name="Sushi restaurant" />
        <RestaurantCard name="Burger restaurant" />
        <RestaurantCard name="Fine dining restaurant" />
      </ScrollView>
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
