import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Header } from '../../components/Header';
import { Btn } from '../../components/Btn';
import { BtnSocial } from '../../components/BtnSocial';
import { THEME } from '../../theme';
import styles from './styles'


export const FirstScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <LinearGradient colors={THEME.GRADIENT_COLOR}
        style={styles.gradient}>
        <Header />

        <View style={styles.btnWrapper}>
          <BtnSocial name='facebook' />
          <BtnSocial name='twitter' />
          <Btn word='Sign up' />
          <TouchableOpacity onPress={() => navigation.navigate('second')}>
            <Text style={[styles.text, styles.link]}>Already registered? Sign in</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </SafeAreaView>
  );
};