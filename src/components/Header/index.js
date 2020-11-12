import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles'

export const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require('../../../asserts/im.jpg')} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.wordTitleStart}>CONN</Text>
        <Text style={styles.wordTitleEnd}>EXION</Text>
      </View>
      <Text style={styles.info}>Find and Meet people around {'\n'}you to find LOVE</Text>
    </View>
  )
}

