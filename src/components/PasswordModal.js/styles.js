import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { THEME } from '../../theme'


export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.MODAL_COLOR,
    padding: normalize(15),
  },
  buttons: {
    width: '100%',
    marginTop: normalize(40),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  extraSave: {
    width: "35%"
  },
  extraCancel: {
    width: "35%",
    backgroundColor: 'transparent',
  },
})