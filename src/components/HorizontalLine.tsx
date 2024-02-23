import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HorizontalLine = () => {
  return (
    <View style={styles.line}/>
  )
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#C6FCFf',
        height: 1,
        marginVertical: 20
    }
})
export default HorizontalLine