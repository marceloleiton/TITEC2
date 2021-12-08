import React from 'react';
import {Text, ImageBackground,TouchableOpacity} from 'react-native';
import styles from './Eventostyles';

const Evento = (props) => {
  
  const Evento = props.evento;

  let imageURL = "";

  // Condiciones para el fondo en los talleres
  if (Evento.nombre_actividad === "Futbol" || Evento.nombre_actividad === "Fútbol")
    imageURL = require("../../assets/images/futbol.jpg")
  else if (Evento.nombre_actividad === "Basquetbol" || Evento.nombre_actividad === "basquetbol")
    imageURL = require("../../assets/images/basquetbol.jpg")
  else if (Evento.nombre_actividad === "Natacion" || Evento.nombre_actividad === "Natación" )
    imageURL = require("../../assets/images/natacion.jpg")
  
  return (

      <ImageBackground blurRadius={5} source={imageURL} resizeMode="cover" style={styles.image}>
      <Text style={styles.TituloGeneral}>{Evento.nombre_actividad}</Text>
      <Text style={styles.description} >{Evento.descripción}</Text>
      <Text style={styles.cupos} >Cupos: {Evento.cupos}</Text>
      <Text style={styles.requisitos} >Requisitos: {Evento.requisitos}</Text>
    
      <TouchableOpacity style={styles.searchButton} onPress={() => console.log(Evento.codigo_actividad)}>
        <Text style={styles.searchButtonText}> Inscribirse</Text>
        
      </TouchableOpacity>
      
      </ImageBackground>
 
  );
};

export default Evento;