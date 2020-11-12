import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export const IconComponent = ({ name }) => {
  return (
    <View style={styles.iconWrapper}>
      <Icon name={name} size={25} color="#fb5957" />
    </View>
  )
}
