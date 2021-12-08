import React from 'react';
import HomeScreen from '../screens/Home';
import SolicitudesScreen from '../screens/Solicitudes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeTabNavigation = props => {
    return (
      
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size}) => {
              let iconName;
              if (route.name === 'Eventos') {
                iconName = focused
                  ? 'ios-calendar'
                  : 'ios-calendar';
              } else if (route.name === 'Solicitudes') {
                iconName = focused ? 'ios-search' : 'ios-search';
              }
              return <Ionicons name={iconName} size={35} color={color} />;
            },
            tabBarActiveTintColor: '#1259F5',
            tabBarInactiveTintColor: 'gray',
          })}>
  
          <Tab.Screen 
          name="Eventos" 
          component={HomeScreen} 
          options={{
          headerStyle: { backgroundColor: '#1259F5'},
          headerTitleStyle: { color: 'white'},
          headerTitle: 'Eventos corp Municipal Quintero',
          }} />
          
  
          <Tab.Screen 
          name="Solicitudes" 
          component={SolicitudesScreen} 
          options={{
          headerStyle: { backgroundColor: '#1259F5'},
          headerTitleStyle: { color: 'white'},
          headerTitle: 'Solicitudes',
          }} />
  
        </Tab.Navigator>
      
    );
}
export default HomeTabNavigation;