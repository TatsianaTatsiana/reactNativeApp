import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FirstScreen } from '../screens/FirstScreen';
import { SecondScreen } from '../screens/SecondScreen';
import { ThirdScreen } from '../screens/ThirdScreen';
import { ForthScreen } from '../screens/ForthScreen'
import { FifthScreen } from '../screens/FifthScreen';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="first"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="first" component={FirstScreen} />
        <Stack.Screen name="second" component={SecondScreen} />
        <Stack.Screen name="third" component={ThirdScreen} />
        <Stack.Screen name='forth' component={ForthScreen} />
        <Stack.Screen name='fifth' component={FifthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
