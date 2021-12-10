import React,{useEffect, useState} from 'react'
import {FlatList,RefreshControl} from 'react-native'
import EventoItem from './EventoItem'
import {getEventos} from './../../api'
const EventoList = () => {

    const [refresing, setRefresing] = useState(false)

    const [evento, setEvento]= useState([])

    const cargarEvento = async () => {
        const data = await getEventos();
        console.log('data cargada');
        setEvento(data);
    }
    
    useEffect(() => {
      cargarEvento()
    }, []);

    const renderItem = ({ item }) => {
        return <EventoItem evento={item}/>;
    };

    const onRefresh = React.useCallback(async () => {
        setRefresing(true);
        await getEventos();
        setRefresing(false);
    })

    return (
        <FlatList
            data={evento}
            keyExtractor={(item) => item.codigo_actividad + ""}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={refresing}
                    colors={["blue"]}
                    onRefresh={onRefresh}
                />
            }
            />
    );
};

export default EventoList;