import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  headerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: normalize(20),
    paddingBottom: normalize(30)
  },
  titleWrapper: {
    flexDirection: 'row',
  },
  wordTitleStart: {
    color: '#f5316f',
    fontSize: normalize(30),
    fontFamily: 'Montserrat-Bold',
  },
  wordTitleEnd: {
    fontSize: normalize(30),
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
  },
  info: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular'
  },
  imgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: normalize(100),
  },
  img: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(8),
    opacity: .7
  }
})