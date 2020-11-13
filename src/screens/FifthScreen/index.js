import React, { useState } from 'react';
import {
  View,
  Image,
  FlatList
} from 'react-native';
import { WrapperBackground } from '../../components/WrapperBackground'
import { launchCamera, launchImageLibrary } from '../../ImagePicker';
import { Btn } from '../../components/Btn';
import styles from './styles'


export const FifthScreen = () => {
  const [data, setData] = useState([]);

  const onLaunchCamera = () => {
    launchCamera({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    },
      (response) => {
        if (response.didCancel) {
          return
        }
        setData(old => [...old, response]);
      },
    )
  }

  const onLaunchImageLibrary = () => {
    launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    },
      (response) => {
        if (response.didCancel) {
          return
        }
        setData(old => [...old, response]);
      },
    )
  }

  const deleteItem = (uri) => {
    setData(old => { return old.filter(elem => elem.uri !== uri) })
  }

  const changeItem = (uri) => {
    setData(old => {
      return old.map(elem => {
        if (elem.uri === uri) {
          elem = { ...elem, 'favourite': true }
        }
        return elem
      }
      )
    })
  }

  const showFavourite = () => {
    setData(old => { return old.filter(elem => { return elem ? elem.favourite : null }) })
  }

  const ItemImageView = ({ item }) => (
    <View style={styles.itemWrap}>
      <Image
        style={styles.itemImg}
        source={{ uri: item.uri }}
      />
      <View style={styles.itemBtnWrap}>
        <Btn word='Delete' style={{ marginBottom: 15 }}
          onPressBtn={() => { deleteItem(item.uri) }} />
        <Btn word='Favourite' onPressBtn={() => { changeItem(item.uri) }} />
      </View>
    </View>
  )


  return (
    <WrapperBackground>
      <View style={styles.btnWrapper}>
        <Btn word='Take image' style={styles.extra}
          onPressBtn={onLaunchCamera} />
        <Btn word='Select image' style={styles.extra}
          onPressBtn={onLaunchImageLibrary} />
        <Btn word='Only favourite' style={styles.extraB}
          onPressBtn={showFavourite} />
      </View>

      {data.length > 0 && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.fileSize + item.fileName}
          renderItem={ItemImageView} />
      )}
    </WrapperBackground>
  );
};
