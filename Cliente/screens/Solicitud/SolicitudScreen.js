import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { crearSolicitud } from '../../api';

const SolicitudScreen = ({ navigation, route }) => {

    {/* 
    Route, vienen los parámetros de EventoItem, ya que tienen un boton de "INSCRIBIRSE" que manda los parámetros hasta aquí
    route.params.codigo_actividad : es el código del evento que fue solicitado
    */}

    {/*
    const [solicitud, setSolicitud] : Son los parámetros que serán ingresados a la query para inscribirse al evento 
    Estos parámetros con llenados mediante handleChange donde está el "return"
    */ }

    const [solicitud, setSolicitud] = useState({
        id_solicitud: null,
        rut_postulante: " ",
        codigo_actividad: route.params.codigo_actividad,
        fecha_inscripcion: new Date(),
        datos_extra: " ",
        obs_medica: " ",
    });

    {/* Esto solo le asigna el título al componente y indica el nombre del evento que se está inscribiendo*/ }
    useEffect(() => {
        if (route.params && route.params.codigo_actividad) {
            navigation.setOptions({ headerTitle: "Inscribirse al evento de " + route.params.nombre_actividad })
        }
    }, []);


    const handleChange = (name, value) => setSolicitud({ ...solicitud, [name]: value });

    {/* crearSolicitud es una función de api.js para crear la solicitud al evento -> Una vez creada la solicitud envia nuevamente a la pantalla de eventos */ }
    const handleSubmit = () => {
        crearSolicitud(solicitud);
        navigation.navigate('EventosScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.cuadro}>

                <TextInput
                    style={styles.input}
                    placeholder="RUT"
                    placeholderTextColor="grey"
                    onChangeText={(text) => handleChange('rut_postulante', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Datos Extra"
                    placeholderTextColor="grey"
                    onChangeText={(text) => handleChange('datos_extra', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Obsevación médica"
                    placeholderTextColor="grey"
                    onChangeText={(text) => handleChange('obs_medica', text)}
                />

                <TouchableOpacity style={styles.buttonEnviar} onPress={handleSubmit}>
                    <Text style={styles.inputText}>INGRESAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SolicitudScreen;
