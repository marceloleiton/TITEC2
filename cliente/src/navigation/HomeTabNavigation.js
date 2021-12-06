import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import  SolicitudesScreen from '../screens/Solicitudes';
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
        
        <Tab.Screen 
        name="Eventos deportivos" 
        component={SolicitudesScreen} 
        options={{
        headerShown: true,
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeTabNavigation;