import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { THEME } from '../../theme'

export default StyleSheet.create({
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: normalize(20),
    fontFamily: 'Montserrat-Bold',
  },
  inputWrapper: {
    alignItems: 'center',
  },
  checkWrapper: {
    marginTop: normalize(30),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: normalize(40),
  },
  checkTitle: {
    color: '#fff',
    fontSize: normalize(12),
    fontFamily: 'Montserrat-Regular',
    marginLeft: normalize(20),
  },
  btnWrapper: {
    marginTop: normalize(30),
    alignItems: 'center'
  },
  iconsWrapper: {
    marginTop: normalize(20),
    width: '88%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconBtn: {
    backgroundColor: '#fff',
    width: '15%',
    padding: normalize(15),
    margin: normalize(10),
    borderRadius: normalize(50),
    alignItems: 'center'
  },
  passwordLinkWrwpper: {
    marginTop: normalize(20),
    alignItems: 'center'
  },
  accountLinkWrwpper: {
    marginTop: normalize(50),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: normalize(12),
  },
  orangeText: {
    color: THEME.CHECKBOX_COLOR,
  },
  whiteText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
})