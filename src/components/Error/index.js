import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

export const Error = ({ text }) => {
  return (
    <View style={styles.errorWrapper}>
      <Text style={styles.errorText}>{text}</Text>
    </View>
  )
}