import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
  name: string
}

const RestaurantCard: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
})
