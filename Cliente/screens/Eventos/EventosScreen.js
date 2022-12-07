import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import styles from './Styles';
import EventoList from '../../components/EventoComponent/EventoList';
import { getEventos } from '../../api'
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';


const EventosScreen = () => {

    const navigation = useNavigation();
    const [evento, setEvento] = useState([])

    const cargarEvento = async () => {
        const data = await getEventos()
        console.log("EVENTOS : ", data)
        setEvento(data)
    }

    useEffect(() => {
        cargarEvento()
    }, []);

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.cuadro}>
                <EventoList evento={evento} />
            </View>
        </View>
    );

};

export default EventosScreen;
