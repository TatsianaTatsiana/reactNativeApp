import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { THEME } from '../../theme'

export default StyleSheet.create({
  errorWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  errorText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: normalize(22),
    color: THEME.CHECKBOX_COLOR
  }
})