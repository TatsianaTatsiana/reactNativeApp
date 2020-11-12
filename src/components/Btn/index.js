import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { THEME } from '../../theme'


export const Btn = ({ word, style, onPressBtn }) => {

  const additionalStyle = style?.backgroundColor === 'transparent'
    ? { color: '#fff', textDecorationLine: 'underline' }
    : { color: THEME.BTN_COLOR }

  return (
    <TouchableOpacity style={[styles.btn, style]} activeOpacity={0.8} onPress={onPressBtn}>
      <Text style={[styles.text, additionalStyle]}> {word}</Text>
    </TouchableOpacity>
  )
}