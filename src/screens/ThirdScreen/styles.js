import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: normalize(20),
  },
  inputWrapper: {
    alignItems: 'center',
  },
  checkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: normalize(40),
    marginTop: normalize(25),
  },
  checkTitle: {
    color: '#fff',
    fontSize: normalize(11),
    fontFamily: 'Montserrat-Regular',
    marginLeft: normalize(20),
  },
  order: {
    textAlign: 'center',
    marginBottom: normalize(15),
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(30),
    marginBottom: normalize(25),
  },
  btnNextWrapper: {
    alignItems: 'center',
  },
  extraSave: {
    width: "35%"
  },
  extraCancel: {
    width: "35%",
    backgroundColor: 'transparent',
  },
})