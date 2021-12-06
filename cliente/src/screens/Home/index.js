import React,{useEffect, useState} from 'react';
import {View,Text} from 'react-native';
import styles from './styles';
import EventoList from '../../components/EventoList';
import {getEventos} from './../../../api'

const HomeScreen = props => {

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
        <Text style={styles.title}>Eventos Quintero</Text>
        <EventoList solicitud = {solicitud}/>
    </View>
  );
};

export default HomeScreen;
