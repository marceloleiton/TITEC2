import React from 'react';
import { Text, ImageBackground, Pressable, Image, View } from 'react-native';
import styles from './Eventostyles';
import { useNavigation } from '@react-navigation/native';
const Evento = (props) => {
  const navigation = useNavigation();
  const Evento = props.evento;

  let imageURL = "";

  // Condiciones para el fondo en los talleres "ES LA SOLUCIÓN MÁS CHANTA PERO FUNCIONA"
  if (Evento.nombre_actividad === "Futbol" || Evento.nombre_actividad === "Fútbol" || Evento.nombre_actividad === "fútbol" || Evento.nombre_actividad === "futbol")
    imageURL = require("../../assets/images/futbol.jpg")
  else if (Evento.nombre_actividad === "Basquetbol" || Evento.nombre_actividad === "basquetbol" || Evento.nombre_actividad === "Básquetbol" || Evento.nombre_actividad === "básquetbol")
    imageURL = require("../../assets/images/basquetbol.jpg")
  else if (Evento.nombre_actividad === "Natacion" || Evento.nombre_actividad === "Natación" || Evento.nombre_actividad === "natación" || Evento.nombre_actividad === "natacion")
    imageURL = require("../../assets/images/natacion.jpg")
  else if (Evento.nombre_actividad === "Tenis" || Evento.nombre_actividad === "tenis")
    imageURL = require("../../assets/images/tenis.jpg")
  else if (Evento.nombre_actividad === "Maraton" || Evento.nombre_actividad === "maraton" || Evento.nombre_actividad === "Maratón" || Evento.nombre_actividad === "maratón")
    imageURL = require("../../assets/images/maraton.jpg")

  return (

    <View style={styles.flatcuadro}>
      <ImageBackground blurRadius={7} source={imageURL} style={styles.image}>
        <View style={styles.titulo}>
          <Text style={styles.TituloGeneral}>{Evento.nombre_actividad}</Text>
          {/* <Text style={styles.description} >{Evento.descripción}</Text> */}
          <Text style={styles.cupos} >Cupos: {Evento.cupos}</Text>
          <Text style={styles.requisitos} >Fecha: {Evento.fecha_inicio.split("T")[0]}</Text>
        </View>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Description', { codigo_actividad: Evento.codigo_actividad, nombre_actividad: Evento.nombre_actividad, descripción: Evento.descripción, requisitos: Evento.requisitos, cupos: Evento.cupos, fecha: Evento.fecha_inicio.split("T")[0] })}>
          <Image style={styles.searchButtonIcon} source={require("../../assets/flecha.png")} />
        </Pressable>
      </ImageBackground>
    </View>


  );
};

export default Evento;