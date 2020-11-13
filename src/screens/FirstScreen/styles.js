import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  btnWrapper: {
    marginTop: normalize(30),
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: .6
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: normalize(12),
    fontFamily: 'Montserrat-Bold',
  },
})