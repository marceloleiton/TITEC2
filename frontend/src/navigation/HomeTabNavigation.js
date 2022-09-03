import React from 'react';
import HomeScreen from '../screens/Home';
import SolicitudesScreen from '../screens/Solicitudes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeTabNavigation = props => {
    return (
          <Tab.Navigator screenOptions={{activeTintColor: '#1259F5'}}>
          <Tab.Screen name={'Eventos'} component={HomeScreen} options={{
           headerStyle: { backgroundColor: '#1259F5'},
           headerTitleStyle: { color: 'white'},
           headerTitle: 'Eventos corp Municipal Quintero',
          tabBarIcon: ( {color}: {color: string}) => ( <Ionicons name="ios-calendar" size={35} color={color} /> ), }} />
          
          <Tab.Screen name={'Solicitudes'} component={SolicitudesScreen} options={{
           headerStyle: { backgroundColor: '#1259F5'},
           headerTitleStyle: { color: 'white'},
           headerTitle: 'Eventos corp Municipal Quintero',
          tabBarIcon: ( {color}: {color: string}) => ( <Ionicons name="ios-search" size={35} color={color} /> ), }} />
          
        </Tab.Navigator>
      
    );
}
export default HomeTabNavigation;