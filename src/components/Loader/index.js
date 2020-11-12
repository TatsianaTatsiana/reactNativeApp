import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { THEME } from '../../theme'

export const Loader = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size='large' color={THEME.LOADER_COLOR} />
    </View>
  )
}