import React from 'react';
import { SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { THEME } from '../../theme';
import styles from './styles'

export const WrapperBackground = (props) => {
  return (
    <SafeAreaView style={styles.container}>

      <LinearGradient colors={THEME.GRADIENT_COLOR}
        style={styles.gradient}>
        {props.children}
      </LinearGradient>
    </SafeAreaView>
  )
}