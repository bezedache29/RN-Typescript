import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Menu from '../components/Menu'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../App'

type Props = NativeStackScreenProps<RootStackParams, 'Explore'>

const ExploreScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurants</Text>
      <View>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
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

        <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
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
      </View>
      <Menu />
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 24 : 0,
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
})
