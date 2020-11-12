import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  btn: {
    backgroundColor: '#fff',
    padding: normalize(12),
    width: '80%',
    borderRadius: normalize(25),
  },
  text: {
    color: '#fb5957',
    fontSize: normalize(15),
    fontFamily: 'Montserrat-Bold',
  },
})