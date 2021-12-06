import React,{useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import SolicitudList from '../../components/SolicitudList';
import {getSolicitudes} from './../../../api'

const HomeScreen = props => {

    const [solicitud, setSolicitud]= useState([])
    const cargarSolicitud = async () => {
        const data = await getSolicitudes()
        setSolicitud(data)
    }

    useEffect(() => {
        cargarSolicitud()
    }, []);

  return (
    <View>
        <SolicitudList solicitud = {solicitud}/>
    </View>
  );
};

export default HomeScreen;
