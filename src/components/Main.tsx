import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-virtualized-view';
import {fetchDeals, setSingleDeal} from '../actions/dealsAction';
import {useFocusEffect} from '@react-navigation/native';
import {BLUE} from '../utils/colors';
import {FloatingActionButton} from './button/FloatingActionButton';

export default function Main({navigation}) {
  // Accessing quotes data from the Redux store
  const dealsData = useSelector(state => state.dealsReducer.deals);

  // Dispatch function to trigger the fetchQuotes action
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchDeals());
    }, []),
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainSubContainer}>
        {dealsData.length > 0 && (
          <ScrollView>
            <FlatList
              keyExtractor={item => item.dealID}
              data={dealsData}
              renderItem={({item}) => (
                <View style={styles.cardContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(setSingleDeal(item));
                      navigation.navigate('Detail');
                    }}>
                    <Text style={styles.quoteTitle}>{item.title}</Text>
                    <Text style={styles.quoteAuthor}>{item.salePrice}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </ScrollView>
        )}
        <FloatingActionButton
          backgroundColor={BLUE}
          onClick={() => {
            navigation.navigate('Detail');
          }}></FloatingActionButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
  },
  mainSubContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6750A4',
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    margin: 10,
    borderRadius: 6,
    elevation: 3,
  },
  quoteTitle: {
    fontSize: 18,
    color: '#454343',
  },
  quoteAuthor: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#6750A4',
  },
});
