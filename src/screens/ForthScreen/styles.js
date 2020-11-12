import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { THEME } from '../../theme';

export default StyleSheet.create({
  text: {
    color: '#333',
    fontSize: normalize(16)
  },
  erWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  textWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    padding: normalize(40)
  },
  btnWrap: {
    alignItems: 'center',
    paddingTop: normalize(10),
  },
  extra: {
    borderWidth: 2,
    borderColor: THEME.BTN_COLOR
  }
})