import React from 'react'
import {Text ,View} from 'react-native'
import {FlatList} from 'react-native'
import Solicitud from  './SolicitudItem';

const SolicitudList = ({solicitud}) => {
    return (
        <FlatList
            data={solicitud}
            keyExtractor={(item) => item.id_solicitud + ' '}
            renderItem={({item}) => <Solicitud solicitud={item} />} />
    );
}

export default SolicitudList;