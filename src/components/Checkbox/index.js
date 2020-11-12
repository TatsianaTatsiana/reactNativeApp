import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export const Checkbox = ({ check, changeValue }) => {
  let checkColor = check
    ? checkColor = '#fff'
    : checkColor = 'transparent';

  return (
    <TouchableOpacity style={styles.checkboxBg} onPress={changeValue}>
      <Icon name='check' size={13} color={checkColor} />
    </TouchableOpacity>
  )
}