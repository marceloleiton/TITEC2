import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventosScreen from './screens/Eventos/EventosScreen';
import SolicitudScreen from './screens/Solicitud/SolicitudScreen';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EventosScreen" component={EventosScreen} options={{ headerStyle: { backgroundColor: '#1259F5' }, headerTitleStyle: { color: 'white' }, headerTitle: 'Eventos', headerTintColor: '#fff' }} />
        <Stack.Screen name="SolicitudScreen" component={SolicitudScreen} options={{ headerStyle: { backgroundColor: '#1259F5' }, headerTitleStyle: { color: 'white' }, headerTitle: 'Inscripción a evento', headerTintColor: '#fff' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
