import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IconComponent } from '../IconComponent/';
import styles from './styles';


export const BtnSocial = ({ name }) => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
      <View style={styles.wrapper}>
        <IconComponent name={name} />
        <Text style={styles.text}>| Sign in with {name}</Text>
      </View >
    </TouchableOpacity>
  )
}
