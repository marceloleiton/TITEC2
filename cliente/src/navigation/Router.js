import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigation from './HomeTabNavigation';
import FormSolicitudScreen from '../screens/FormSolicitudScreen';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeTabNavigation} options={{headerShown: false}} />
        <Stack.Screen name={'Form'} component={FormSolicitudScreen} options={{headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
