import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { WrapperBackground } from '../../components/WrapperBackground'
import { Header } from '../../components/Header';
import { Checkbox } from '../../components/Checkbox';
import { Btn } from '../../components/Btn';
import { Input } from '../../components/Input';
import styles from './styles'

export const ThirdScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [password, setPassword] = useState('')
  const [checkValue, setCheckValue] = useState(true);
  const navToForthScreen = useCallback(() => { navigation.navigate('forth') }, [navigation])

  return (
    <WrapperBackground>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Header />
        <Text style={styles.title}>CREATE YOUR LOGIN</Text>

        <View style={styles.inputWrapper}>
          <Input placeholder='Name' textContentType='name'
            value={name} onChangeText={(text) => { setName(text) }} />
          <Input placeholder='Password' textContentType='newPassword' secureTextEntry={true} value={newPassword}
            onChangeText={(text) => { setNewPassword(text) }} />
          <Input placeholder='Re-Enter Password' textContentType='password' secureTextEntry={true} value={password}
            onChangeText={(text) => { setPassword(text) }} />
        </View>

        <View style={styles.checkWrapper}>
          <Checkbox changeValue={() => { setCheckValue(!checkValue) }} check={checkValue} />
          <Text style={styles.checkTitle}>Agree to Terms & Conditions</Text>
        </View>

        <View style={styles.btnWrapper}>
          <Btn word='CANCEL' style={styles.extraCancel} />
          <Btn word='SAVE' style={styles.extraSave} />
        </View>

        <Text style={[styles.checkTitle, styles.order]}>Agree to Terms & Conditions</Text>
        <View style={styles.btnNextWrapper}>
          <Btn word='Watch Redux Data'
            onPressBtn={navToForthScreen} />
        </View>
      </ScrollView>
    </WrapperBackground>
  )
}
