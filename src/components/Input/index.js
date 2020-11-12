import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { THEME } from '../../theme'

export const Input = ({ placeholder, textContentType, saveValue }) => {
  return (
    <TextInput style={styles.input}
      placeholder={placeholder} placeholderTextColor={THEME.INPUT_COLOR} textContentType={textContentType}
      onChangeText={saveValue} />
  )
}