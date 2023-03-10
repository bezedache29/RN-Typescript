import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>ProfileScreen</Text>

      <Text>Name: John Doe</Text>
      <TouchableOpacity>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
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

export default ProfileScreen
