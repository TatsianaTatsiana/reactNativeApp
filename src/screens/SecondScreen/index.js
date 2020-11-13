import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from 'react-native';

import { WrapperBackground } from '../../components/WrapperBackground'
import { Header } from '../../components/Header';
import { Btn } from '../../components/Btn';
import { IconComponent } from '../../components/IconComponent';
import { Checkbox } from '../../components/Checkbox';
import { Input } from '../../components/Input';
import { PasswordModal } from '../../components/PasswordModal.js';
import styles from './styles'


export const SecondScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkValue, setCheckValue] = useState(false);
  const [modal, setModal] = useState(false);
  const navToThirdtScreen = useCallback(() => { navigation.navigate('third') }, [navigation])

  const alertHandler = () => {
    Alert.alert(
      "Don't remember your password?",
      "We will resent it to your email. Write it, please.",
      [
        {
          text: "Disagree",
          style: "negative"
        },
        {
          text: "Agree",
          onPress: () => setModal(true),
          style: 'positive'
        }
      ],
      { cancelable: false }
    );
  }

  return (
    <WrapperBackground>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}>
        {/* <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'} keyboardVerticalOffset={100}> */}
        <Header />
        <Text style={styles.title}>SIGN IN</Text>

        <View style={styles.inputWrapper}>
          <Input placeholder='Enter Email' textContentType='name' value={email} saveValue={(text) => { setEmail(text) }} />
          <Input placeholder='Password' textContentType='password'
            value={password} saveValue={(text) => { setPassword(text) }} />
        </View>

        <View style={styles.checkWrapper}>
          <Checkbox changeValue={() => { setCheckValue(!checkValue) }} check={checkValue} />
          <Text style={styles.checkTitle}>Remember password</Text>
        </View>

        <View style={styles.btnWrapper}>
          <Btn word='GET STARTED' />
        </View>

        <View style={styles.iconsWrapper}>
          <TouchableOpacity style={styles.iconBtn}>
            <IconComponent name='facebook' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <IconComponent name='twitter' />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordLinkWrwpper}>
          <TouchableOpacity onPress={alertHandler}>
            <Text style={[styles.text, styles.link]}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.accountLinkWrwpper}>
          <Text style={[styles.text, styles.orangeText]}>DONT HAVE ACCOUNT? </Text>
          <TouchableOpacity onPress={navToThirdtScreen}>
            <Text style={[styles.text, styles.whiteText]}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <PasswordModal visibleValue={modal}
          onCancel={() => { setModal(false) }} />
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
    </WrapperBackground>
  );
};
