import React from 'react';
import {View, Text, ImageBackground,Pressable} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Evento = (props) => {
  
  const navigation = useNavigation();
  const Evento = props.evento;
  let imageURL = "";

  // Condiciones para el fondo en los talleres
  if (Evento.nombre_actividad === "Futbol" || Evento.nombre_actividad === "Fútbol")

         imageURL = require("../../../assets/images/futbol.jpg")
  else if (Evento.nombre_actividad === "Basquetbol" || Evento.nombre_actividad === "basquetbol")

         imageURL = require("../../../assets/images/basquetbol.jpg")

  else if (Evento.nombre_actividad === "Natacion")

         imageURL = require("../../../assets/images/natacion.jpg")
  
  return (

     <View style={styles.container} >
      <ImageBackground blurRadius={4} source={imageURL} resizeMode="cover" style={styles.image}>

      <Text style={styles.TituloGeneral}>{Evento.nombre_actividad}</Text>

      {/* Descripción*/}
      <Text style={styles.description} >
        {Evento.descripción}
      </Text>
      
      {/* cupos*/}
      <Text style={styles.cupos} >
        Cupos: {Evento.cupos}
      </Text>
           {/* cupos*/}
           
      <Text style={styles.cupos} >
      Requisitos: {Evento.requisitos}
      </Text>

      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('')}>
        <Ionicons name="ios-calendar" size={20} color={'#1259F5'} />
        <Text style={styles.searchButtonText}> Inscribirse</Text>
      </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Evento;