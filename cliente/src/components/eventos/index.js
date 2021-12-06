import React from 'react';
import {View, Text, Image,Pressable} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Evento = (props) => {
  
  const navigation = useNavigation();
  const Evento = props.evento;

  return (

     <View style={styles.container}>

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
           
      <Text style={styles.description} >
      Requisitos: {Evento.requisitos}
      </Text>
      

      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('')}>
        <Ionicons name="ios-search" size={25} color={'#1259F5'} />
        <Text style={styles.searchButtonText}>Inscribir</Text>
      </Pressable>
      
    </View>
  );
};
export default Evento;
