import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './Styles2';

import { crearSolicitud } from '../../api';
import Header from '../../components/Header';

const SolicitudScreen = ({ navigation, route }) => {

    let imageURL = ''

    if (route.params.nombre_actividad === "Futbol" || route.params.nombre_actividad === "Fútbol" || route.params.nombre_actividad === "fútbol" || route.params.nombre_actividad === "futbol")
        imageURL = require("../../assets/images/futbol.jpg")
    else if (route.params.nombre_actividad === "Basquetbol" || route.params.nombre_actividad === "basquetbol" || route.params.nombre_actividad === "Básquetbol" || route.params.nombre_actividad === "básquetbol")
        imageURL = require("../../assets/images/basquetbol.jpg")
    else if (route.params.nombre_actividad === "Natacion" || route.params.nombre_actividad === "Natación" || route.params.nombre_actividad === "natación" || route.params.nombre_actividad === "natacion")
        imageURL = require("../../assets/images/natacion.jpg")
    else if (route.params.nombre_actividad === "Tenis" || route.params.nombre_actividad === "tenis")
        imageURL = require("../../assets/images/tenis.jpg")
    else if (route.params.nombre_actividad === "Maraton" || route.params.nombre_actividad === "maraton" || route.params.nombre_actividad === "Maratón" || route.params.nombre_actividad === "maratón")
        imageURL = require("../../assets/images/maraton.jpg")

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
            <Header/>
            <View style={styles.containerDescription}>
                <ImageBackground source={imageURL} blurRadius={2} style={styles.cuadro}>
                    <View style={styles.cuadrotext}>
                        <Text style={styles.title}>
                            {route.params.nombre_actividad}
                        </Text>
                    </View>
                    <View style={styles.cuadrodescri}>
                        <Text style={{margin:10, fontSize: 20, fontWeight:'700'}}>Inscripción</Text>
                        
                        <View style={{width:300, height:80, margin:10}}>
                            <TextInput
                                style={styles.input}
                                placeholder="RUT"
                                placeholderTextColor="black"
                                onChangeText={(text) => handleChange('rut_postulante', text)}
                            />
                            <Text style={{flex:1, marginHorizontal:10, color:'#C4C3C2'}}>Ejemplo: 12.345.678-9</Text>
                        </View>

                        <View style={{width:300, height:80, margin:10}}>
                            <TextInput
                                style={styles.input}
                                placeholder="Nombre y apellido"
                                placeholderTextColor="black"
                                onChangeText={(text) => handleChange('obs_medica', text)}
                            />
                            <Text style={{flex:1, marginHorizontal:10, color:'#C4C3C2'}}>Ejemplo: Juan Olivares</Text>
                        </View>

                        <View style={{width:300, height:80, margin:10}}>
                            <TextInput
                                style={styles.input}
                                placeholder="Obsevación médica"
                                placeholderTextColor="black"
                                onChangeText={(text) => handleChange('obs_medica', text)}
                            />
                            <Text style={{flex:1, marginHorizontal:10, color:'#C4C3C2'}}>Ejemplo: Asma</Text>
                        </View>

                        <View style={{width:300, height:80, margin:10}}>
                            <TextInput
                                style={styles.input}
                                placeholder="Datos Extra"
                                placeholderTextColor="black"
                                onChangeText={(text) => handleChange('datos_extra', text)}
                            />
                            <Text style={{flex:1, marginHorizontal:10, color:'#C4C3C2'}}></Text>
                        </View>


                        <TouchableOpacity
                            onPress={handleSubmit}
                        >
                            <View style={styles.button}>
                                <Text style={{fontSize: 15, fontWeight: '600'}}>ENVIAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            {/* <View style={styles.cuadro}>



                <TextInput
                    style={styles.input}
                    placeholder="RUT"
                    placeholderTextColor="black"
                    onChangeText={(text) => handleChange('rut_postulante', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Nombre y apellido"
                    placeholderTextColor="black"
                    onChangeText={(text) => handleChange('obs_medica', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Obsevación médica"
                    placeholderTextColor="black"
                    onChangeText={(text) => handleChange('obs_medica', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Datos Extra"
                    placeholderTextColor="black"
                    onChangeText={(text) => handleChange('datos_extra', text)}
                />


                <TouchableOpacity style={styles.buttonEnviar} onPress={handleSubmit}>
                    <Text style={styles.inputText}>ENVIAR</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

export default SolicitudScreen;
