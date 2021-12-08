import React,{useEffect, useState} from 'react';
import {View,Image} from 'react-native';
import styles from './styles';
import EventoList from '../../components/EventoList';
import {getEventos} from './../../../api'

const HomeScreen = props => {

    const [evento, setEvento]= useState([])
    const cargarEvento = async () => {
        const data = await getEventos()
        setEvento(data)
    }

    useEffect(() => {
      cargarEvento()
    }, []);

  return (

    <View style={styles.container}>
    <View style={styles.cuadro}>
        <EventoList evento = {evento}/>
    </View>
    </View>
  );
};

export default HomeScreen;
