import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../Main';
import Quote from '../Quote';

const Tab = createBottomTabNavigator();

export function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Settings"
        component={Quote}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Home" component={Main} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}
