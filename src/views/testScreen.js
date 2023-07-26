import React from 'react'
import { Text, View } from 'react-native'

export default props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: props.background || '#000' }}>
      <Text style={{ fontSize: 50, color: props.color || '#fff' }}>
        asdasdasdasdasdadasdasdasdasdasdsadsdsadsadasdasdsadsaassad
      </Text>
    </View>
  )
}