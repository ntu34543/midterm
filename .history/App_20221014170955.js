import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstScreen from './components/direction';
import SecondScreen from './components/position';
import ThirdScreen from './components/alignItems';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="direction" component={FirstScreen} options={{ tabBarBadge: 1 }} />
      <Tab.Screen name="position" component={SecondScreen} options={{ tabBarBadge: 2 }} />
      <Tab.Screen name="alignItems" component={ThirdScreen} options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
