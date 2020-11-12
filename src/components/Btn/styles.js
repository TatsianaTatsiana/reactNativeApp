import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  btn: {
    backgroundColor: '#fff',
    padding: normalize(13),
    width: '80%',
    borderRadius: normalize(25),
    alignItems: 'center',
  },
  text: {
    fontSize: normalize(15),
    fontFamily: 'Montserrat-Bold'
  },
})