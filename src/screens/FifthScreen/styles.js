import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  itemWrap: {
    marginBottom: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  response: {
    marginVertical: normalize(16),
    marginHorizontal: normalize(8),
  },
  btnWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: normalize(30),
    flexWrap: 'wrap',
  },
  extra: {
    width: "35%",
  },
  extraB: {
    marginTop: normalize(30)
  },
  itemBtnWrap: {
    width: '35%',
    justifyContent: 'space-around',
  },
  itemImg: {
    width: normalize(150),
    height: normalize(150)
  }
})