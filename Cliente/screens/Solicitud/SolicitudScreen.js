import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { crearSolicitud } from '../../api';

const SolicitudScreen = ({ navigation }) => {

    const [solicitud, setSolicitud] = useState({
        id_solicitud: null,
        rut_postulante: " ",
        codigo_actividad: 1,
        fecha_inscripcion: "2021-12-01",
        datos_extra: " ",
        obs_medica: " ",

    });

    const handleChange = (name, value) => setSolicitud({ ...solicitud, [name]: value });

    const handleSubmit = () => {
        console.log(solicitud)
        crearSolicitud(solicitud);
        navigation.navigate('EventosScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Solicita la inscipción a: </Text>
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
