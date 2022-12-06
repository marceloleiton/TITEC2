import React from 'react';
import { Text, ImageBackground, Pressable, Image, View } from 'react-native';
import styles from './Eventostyles';
import { useNavigation } from '@react-navigation/native';
const Evento = (props) => {
  const navigation = useNavigation();
  const Evento = props.evento;

  let imageURL = "";

  // Condiciones para el fondo en los talleres "ES LA SOLUCIÓN MÁS CHANTA PERO FUNCIONA"
  if (Evento.nombre === "Futbol" || Evento.nombre === "Fútbol" || Evento.nombre === "fútbol" || Evento.nombre === "futbol")
    imageURL = require("../../assets/images/futbol.jpg")
  else if (Evento.nombre === "Basquetbol" || Evento.nombre === "basquetbol" || Evento.nombre === "Básquetbol" || Evento.nombre === "básquetbol")
    imageURL = require("../../assets/images/basquetbol.jpg")
  else if (Evento.nombre === "Natacion" || Evento.nombre === "Natación" || Evento.nombre === "natación" || Evento.nombre === "natacion")
    imageURL = require("../../assets/images/natacion.jpg")
  else if (Evento.nombre === "Tenis" || Evento.nombre === "tenis")
    imageURL = require("../../assets/images/tenis.jpg")
  else if (Evento.nombre === "Maraton" || Evento.nombre === "maraton" || Evento.nombre === "Maratón" || Evento.nombre === "maratón")
    imageURL = require("../../assets/images/maraton.jpg")

  return (

    <View style={styles.flatcuadro}>
      <ImageBackground blurRadius={7} source={imageURL} style={styles.image}>
        <View style={styles.titulo}>
          <Text style={styles.TituloGeneral}>{Evento.nombre}</Text>
          {/* <Text style={styles.description} >{Evento.descripción}</Text> */}
          <Text style={styles.cupos} >Cupos: {Evento.cupo}</Text>
          <Text style={styles.requisitos} >Fecha de inscripción: {Evento.fecha_inicio.split("T")[0]}</Text>
          <Text style={styles.requisitos} >Termino de inscripción: {Evento.fecha_termino.split("T")[0]}</Text>
        </View>

        <Pressable
          style={styles.searchButton}

          onPress={() => navigation.navigate('Description', { codigo_actividad: Evento.id, nombre: Evento.nombre, descripción: Evento.descripcion, requisitos: Evento.requisitos, cupos: Evento.cupo, fecha: Evento.fecha_inicio.split("T")[0], categoria: Evento.categoria })}>
          <Image style={styles.searchButtonIcon} source={require("../../assets/flecha.png")} />

        </Pressable>
      </ImageBackground>
    </View>


  );
};
export default Evento;