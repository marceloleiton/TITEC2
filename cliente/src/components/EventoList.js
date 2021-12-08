import React from 'react'
import {FlatList} from 'react-native'
import Evento from  './EventoItem';

const EventoList = ({evento}) => {
    return (
        <FlatList
            data={evento}
            keyExtractor={(item) => item.codigo_actividad + ' '}
            renderItem={({item}) => <Evento evento={item} />} />
    );
};

export default EventoList;