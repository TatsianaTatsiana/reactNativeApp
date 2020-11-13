import React, { useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { WrapperBackground } from '../../components/WrapperBackground'
import { Header } from '../../components/Header';
import { Btn } from '../../components/Btn';
import { BtnSocial } from '../../components/BtnSocial';
import { THEME } from '../../theme';
import styles from './styles'


export const FirstScreen = ({ navigation }) => {
  const navToSecontScreen = useCallback(() => { navigation.navigate('second') }, [navigation])

  // const navToSecontScreen = () => { navigation.navigate('second') }

  return (
    // <SafeAreaView style={styles.container}>

    //   <LinearGradient colors={THEME.GRADIENT_COLOR}
    //     style={styles.gradient}>
    <WrapperBackground>
      <Header />

      <View style={styles.btnWrapper}>
        <BtnSocial name='facebook' />
        <BtnSocial name='twitter' />
        <Btn word='Sign up' />
        <TouchableOpacity onPress={navToSecontScreen}>
          <Text style={[styles.text, styles.link]}>Already registered? Sign in</Text>
        </TouchableOpacity>
      </View>
    </WrapperBackground>
    //   </LinearGradient>
    // </SafeAreaView>
  );
};