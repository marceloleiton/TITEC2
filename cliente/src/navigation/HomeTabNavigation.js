import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeTabNavigation = props => {
  return (
    <NavigationContainer>

      <Tab.Navigator tabBarOptions={{activeTintColor: '#1259F5'}}>

        <Tab.Screen 
        name="Eventos deportivos" 
        component={HomeScreen} 
        options={{
        headerShown: false,
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeTabNavigation;