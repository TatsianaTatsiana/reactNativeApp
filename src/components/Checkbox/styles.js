import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { THEME } from '../../theme'

export default StyleSheet.create({
  checkboxBg: {
    backgroundColor: THEME.CHECKBOX_COLOR,
    padding: normalize(3),
    borderRadius: normalize(5),
  },
})