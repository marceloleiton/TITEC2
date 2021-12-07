import React from 'react';
import {View, Text, ImageBackground,Pressable,Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import FormSolicitudScreen from '../../screens/FormSolicitud';

const Evento = (props) => {
  
  const navigation = useNavigation();
  const Evento = props.evento;

  let imageURL = "";

  // Condiciones para el fondo en los talleres
  if (Evento.nombre_actividad === "Futbol" || Evento.nombre_actividad === "Fútbol")
    imageURL = require("../../../assets/images/futbol.jpg")
  else if (Evento.nombre_actividad === "Basquetbol" || Evento.nombre_actividad === "basquetbol")
    imageURL = require("../../../assets/images/basquetbol.jpg")
  else if (Evento.nombre_actividad === "Natacion" || Evento.nombre_actividad === "Natación" )
    imageURL = require("../../../assets/images/natacion.jpg")
  
  return (
      <View style={styles.container}>
      <View style={styles.cuadro}>
      <ImageBackground blurRadius={5} source={imageURL} resizeMode="cover" style={styles.image}>
      <Text style={styles.TituloGeneral}>{Evento.nombre_actividad}</Text>

      <Text style={styles.description} >
        {Evento.descripción}
      </Text>
      
      <Text style={styles.cupos} >
        Cupos: {Evento.cupos}
      </Text>
           
      <Text style={styles.requisitos} >
        Requisitos: {Evento.requisitos}
      </Text>

      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('FormSolicitud')}>
        <Ionicons name="ios-calendar" size={20} color={'#1259F5'} />
        <Text style={styles.searchButtonText}> Inscribirse</Text>
      </Pressable>
      </ImageBackground>
      </View>
      </View>
  );
};

export default Evento;