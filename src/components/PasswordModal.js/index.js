import React, { useState } from 'react';
import { View, Modal, Alert } from 'react-native';
import { Input } from '../Input';
import { Btn } from '../Btn';
import styles from './styles';

export const PasswordModal = ({ visibleValue, onCancel }) => {
  const [email, setEmail] = useState('');

  const saveHandler = () => {
    Alert.alert('Thank you. Check your email! ')
    onCancel()
  }

  return (
    <Modal visible={visibleValue} animationType='slide' transparent={false}>
      <View style={styles.wrapper}>
        <Input placeholder='Enter your email'
          saveValue={(text) => { setEmail(text) }} />
        {/* autoCompleteType='email' для чего?*/}
        <View style={styles.buttons}>
          <Btn word='Save & send' style={styles.extraSave}
            onPressBtn={saveHandler} />
          <Btn word='Cancel' onPressBtn={onCancel} style={styles.extraCancel} />
        </View>
      </View>
    </Modal>
  )
}