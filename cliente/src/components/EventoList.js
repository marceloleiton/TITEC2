import React from 'react'
import {Text ,FlatList} from 'react-native'
import Evento from  './eventos';
const EventoList = ({solicitud}) => {
    return (
        <FlatList
            data={solicitud}
            keyExtractor={(item) => item.codigo_actividad + ' '}
            renderItem={({item}) => <Evento evento={item} />} />
    );
};

export default EventoList;