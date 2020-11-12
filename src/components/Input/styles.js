import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { THEME } from '../../theme'

export default StyleSheet.create({
  input: {
    borderBottomColor: THEME.INPUT_COLOR,
    borderBottomWidth: 1,
    width: '80%',
    color: '#fff',
    paddingBottom: normalize(2),
    marginTop: normalize(20)
  }
})