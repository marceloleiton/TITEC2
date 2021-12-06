import React,{useEffect, useState} from 'react';
import {View,Text} from 'react-native';
import styles from './styles';
import SolicitudList from '../../components/SolicitudList';
import {getEventos} from './../../../api'

const SolicitudesScreen = props => {

    const [solicitud, setSolicitud]= useState([])
    const cargarSolicitud = async () => {
        const data = await getEventos()
        setSolicitud(data)
    }

    useEffect(() => {
        cargarSolicitud()
    }, []);

  return (
    <View>
        <Text style={styles.title}>Estado solicitud</Text>
        <SolicitudList/>
    </View>
  );
};

export default SolicitudesScreen;