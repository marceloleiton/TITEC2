import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventosScreen from './screens/Eventos/EventosScreen';
import SolicitudScreen from './screens/Solicitud/SolicitudScreen';
import DescriptionScreen from './screens/Descripcion/DescriptionScreen';

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
          options={{ headerShown:false }} />

        <Stack.Screen name="Description" component={DescriptionScreen}
          options={{ headerShown:false }} />

        <Stack.Screen name="SolicitudScreen" component={SolicitudScreen}
          options={{ headerShown:false }} />

      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;
