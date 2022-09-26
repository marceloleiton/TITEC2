import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventosScreen from './screens/Eventos/EventosScreen';
import SolicitudScreen from './screens/Solicitud/SolicitudScreen';

const Stack = createStackNavigator();

{/* 
    Los componentes principales de las "pantallas de eventos y solicitud a los eventos"

    Es posible cambiar los títulos de los componentes con las Options, headertitle es el primer titulo visible más arriba de la pantalla
*/}


const App = () => {
  return (

    < NavigationContainer >
      <Stack.Navigator>

        <Stack.Screen name="EventosScreen" component={EventosScreen}
          options={{ headerStyle: { backgroundColor: '#1259F5' }, headerTitleStyle: { color: 'white' }, headerTitle: 'Eventos', headerTintColor: '#fff' }} />

        <Stack.Screen name="SolicitudScreen" component={SolicitudScreen}
          options={{ headerStyle: { backgroundColor: '#1259F5' }, headerTitleStyle: { color: 'white' }, headerTintColor: '#fff' }} />

      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;
