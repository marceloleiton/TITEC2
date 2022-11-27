import React from 'react'
import {FlatList, View} from 'react-native'
import Evento from  './EventoItem';

const EventoList = ({evento}) => {
    return (
        <View>
            <FlatList            
                data={evento}
                keyExtractor={(item) => item.codigo_actividad + ' '}
                renderItem={({item}) => (
                    <Evento evento={item} />
                )}
            />
        </View>
    );
};

export default EventoList;