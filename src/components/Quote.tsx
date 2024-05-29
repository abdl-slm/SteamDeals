import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useReducer} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchQuotes} from '../actions/quoteAction';
import {ScrollView} from 'react-native-virtualized-view';
import {useFocusEffect} from '@react-navigation/native';
import {BLUE} from '../utils/colors';
import {FloatingActionButton} from './button/FloatingActionButton';

export default function Quote({navigation}) {
  // Accessing quotes data from the Redux store
  const quotesData = useSelector(state => state.quoteReducer.quotes);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  // Dispatch function to trigger the fetchQuotes action
  const dispatch = useDispatch();

  // useFocusEffect(() => {
  //   if (quotesData.length < 1) {
  //     dispatch(fetchQuotes());
  //   }
  // });

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchQuotes());
    }, []),
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainSubContainer}>
        {quotesData.length > 0 && (
          <ScrollView>
            <FlatList
              keyExtractor={item => item.id}
              data={quotesData}
              renderItem={({item}) => (
                <View style={styles.cardContainer}>
                  <Text style={styles.quoteTitle}>{item.quote}</Text>
                  <Text style={styles.quoteAuthor}>{item.author}</Text>
                </View>
              )}
            />
          </ScrollView>
        )}
        <FloatingActionButton
          backgroundColor={BLUE}
          onClick={() => navigation.navigate('Detail')}></FloatingActionButton>
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
  },
});
