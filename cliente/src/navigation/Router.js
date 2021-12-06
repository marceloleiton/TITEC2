import React from 'react';
import HomeScreen from '../screens/Home';
import SolicitudesScreen from '../screens/Solicitudes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View , StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const Routes = props => {
    return (
      <NavigationContainer>
  
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
          })}
        >
  
          <Tab.Screen 
          name="Eventos" 
          component={HomeScreen} 
          options={{
          headerShown: false,
          }} />
  
          <Tab.Screen 
          name="Solicitudes" 
          component={SolicitudesScreen} 
          options={{
          headerShown: false,
          }} />
  
        </Tab.Navigator>
      </NavigationContainer>
    );
}
export default Routes;