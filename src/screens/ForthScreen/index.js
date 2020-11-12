import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';
import { loadInitData } from '../../store/actions/initDataAction';
import { Btn } from '../../components/Btn';
import styles from './styles'


export const ForthScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoadingPagination, setIsLoadingPagination] = useState(false);

  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.dataAll.initData)//data из useState

  useEffect(() => { getData() }, [])

  const getData = () => {
    setIsLoadingPagination(true)
    setError(null)
    RNFetchBlob.fetch('GET', 'https://aboutreact.herokuapp.com/getpost.php?offset=' + page)
      .then((res) => {
        const status = res.info().status;
        if (status === 200) {
          dispatch(loadInitData([...reduxData, ...res.json().results]))
          setIsLoadingPagination(false)
          setPage(page + 1)
        }
        else {
          setError(`Error with ${status} status`)
        }
      })
      .catch((error) => {
        setError(`${error}`)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.btnWrap}>
        <Btn word='go next page' style={styles.extra}
          onPressBtn={() => { navigation.navigate('fifth') }} />
      </View>
      {error
        ? (<View style={styles.erWrap}>
          <Error text={error} />
          <Btn word='Try again' onPressBtn={() => { getData() }} />
        </View>)
        : null}
      {isLoading
        ? <Loader />
        : (
          <FlatList
            data={reduxData}
            onEndReached={() => { getData() }}
            onEndReachedThreshold={0.01}
            ListFooterComponent={() => isLoadingPagination ? <Loader /> : null}
            ListFooterComponentStyle={{ marginVertical: 40 }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.textWrapper}>
                  <Text style={styles.text}>
                    {item.id}
                    {'.'}
                    {item.title.toUpperCase()}
                  </Text>
                </View>
              )
            }} />)}
    </View>
  )
}