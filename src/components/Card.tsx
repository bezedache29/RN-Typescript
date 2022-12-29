import { View, Text } from 'react-native'
import React from 'react'

type CardProps = {
  title: string
  content: string
}

const Card = ({ title, content }: CardProps) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  )
}

export default Card
