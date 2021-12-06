import React from 'react'
import {Text ,FlatList} from 'react-native'

const SolicitudList = ({solicitud}) => {
    return (
        <FlatList
            data={solicitud}
            keyExtractor={(item) => item.id_solicitud + ' '}
            renderItem={({item}) =>{
                return(
                <Text>{item.datos_extra}</Text>
            )} 
            }
        />
    );
};

export default SolicitudList;
