import React,{useEffect, useState}  from 'react';
import {View,Images,Text,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SolicitudList from '../../components/SolicitudList';
import styles from './styles';
import {getSolicitud} from '../../../api';

const SolicitudesScreen = props => {
  const [solicitud, setSolicitud]= useState([])
  const cargarSolicitud = async () => {
    const data = await getSolicitud()
    setSolicitud(data)
}

  return (
    <View style={styles.container}>
        <Text style={styles.title}>VERIFICA EN LÍNEA</Text>
        <Text style={styles.subtitle}>el estado de tu solicitud a talleres</Text>
        <View style={styles.cuadro}>
        <TextInput 
            style={styles.input} 
            placeholder="RUT" 
            placeholderTextColor="grey" 
            />
        <TouchableOpacity style={styles.buttonEnviar}>
          <Text style={styles.inputText}>INGRESAR</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default SolicitudesScreen;