import React from 'react';
import Quote from './src/components/Quote';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/components/Main';
import {MainTabs} from './src/components/tab/MainTabs';
import Detail from './src/components/Detail';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen name="Tab" component={MainTabs} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
