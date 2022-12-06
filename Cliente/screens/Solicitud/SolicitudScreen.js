import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Button } from 'react-native';
import styles from './Styles2';
import { crearSolicitud } from '../../api';
import Header from '../../components/Header';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { TextInputMask } from 'react-native-masked-text';

const SolicitudScreen = ({ navigation, route }) => {

    let imageURL = ''

    if (route.params.nombre === "Futbol" || route.params.nombre === "Fútbol" || route.params.nombre === "fútbol" || route.params.nombre === "futbol")
        imageURL = require("../../assets/images/futbol.jpg")
    else if (route.params.nombre === "Basquetbol" || route.params.nombre === "basquetbol" || route.params.nombre === "Básquetbol" || route.params.nombre === "básquetbol")
        imageURL = require("../../assets/images/basquetbol.jpg")
    else if (route.params.nombre === "Natacion" || route.params.nombre === "Natación" || route.params.nombre === "natación" || route.params.nombre === "natacion")
        imageURL = require("../../assets/images/natacion.jpg")
    else if (route.params.nombre === "Tenis" || route.params.nombre === "tenis")
        imageURL = require("../../assets/images/tenis.jpg")
    else if (route.params.nombre === "Maraton" || route.params.nombre === "maraton" || route.params.nombre === "Maratón" || route.params.nombre === "maratón")
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
    const [inscripcion, setInscripcion] = useState({
        id_solicitud: route.params.nombre,
        rut_postulante: " ",
        codigo_actividad: route.params.codigo_actividad,
        fecha_inscripcion: new Date(),
        datos_extra: " ",
        obs_medica: " ",

    });

    let pressDate = 1;


    const [date, setDate] = useState(new Date(1598051730000));
        

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
      };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
      };
    
      const showDatepicker = () => {
        showMode('date');
        pressDate = 0;
      };
    
    //   const showTimepicker = () => {
    //     showMode('time');
    //   };

    {/* Esto solo le asigna el título al componente y indica el nombre del evento que se está inscribiendo*/ }
    useEffect(() => {
        if (route.params && route.params.codigo_actividad) {
            navigation.setOptions({ headerTitle: "Inscribirse al evento de " + route.params.nombre })
        }
    }, []);


    const handleChange = (name, value) => setSolicitud({ ...solicitud, [name]: value });

    {/* crearSolicitud es una función de api.js para crear la solicitud al evento -> Una vez creada la solicitud envia nuevamente a la pantalla de eventos */ }
    const handleSubmit = () => {
        crearSolicitud(solicitud);
        crearInscripcion(solicitud);
        navigation.navigate('EventosScreen');
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.containerDescription}>
                <ImageBackground source={imageURL} blurRadius={2} style={styles.cuadro}>
                    <View style={styles.cuadrotext}>
                        <Text style={styles.title}>
                            {route.params.nombre}
                        </Text>
                    </View>
                    <ScrollView style={styles.cuadrodescri}>

                        {/* <View style={styles.cuadrodescri}> */}
                            <Text style={{ margin: 10, fontSize: 20, fontWeight: '700' }}>Inscripción</Text>

                            <View style={{ width: 300, height: 80, margin: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="RUT"
                                    placeholderTextColor="black"
                                    onChangeText={(text) => handleChange('rut_postulante', text)}
                                />
                                <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: 12.345.678-9</Text>
                            </View>

                            <View style={{ width: 300, height: 80, margin: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nombres"
                                    placeholderTextColor="black"
                                    onChangeText={(text) => handleChange('obs_medica', text)}
                                />
                                <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: Juan Rodrigo</Text>
                            </View>

                            <View style={{ width: 300, height: 80, margin: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Apellidos"
                                    placeholderTextColor="black"
                                    onChangeText={(text) => handleChange('obs_medica', text)}
                                />
                                <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: Olivares Baeza</Text>
                            </View>

                            <View style={{ width: 300, height: 80, margin: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Telefono Personal"
                                    placeholderTextColor="black"
                                    onChangeText={(text) => handleChange('obs_medica', text)}
                                />
                                <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: 978456732</Text>
                            </View>

                            <View style={{ width: 300, height: 80, margin: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Telefono Contacto"
                                    placeholderTextColor="black"
                                    onChangeText={(text) => handleChange('obs_medica', text)}
                                />
                                <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: 978456732</Text>
                            </View>

                            <View style={{ width: 300, height: 80, margin: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Correo"
                                    placeholderTextColor="black"
                                    onChangeText={(text) => handleChange('obs_medica', text)}
                                />
                                <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: correo..@gmail.com</Text>
                            </View>

                            <View style={{ width: 300, height: 80, margin: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder= {( date.getDate()+ '-' + (date.getMonth() + 1) + '-' + date.getFullYear() ) }
                                    placeholderTextColor="black"
                                    onPressIn={showDatepicker}
                                    onChangeText={(text) => handleChange('obs_medica', text)}
                                />
                                <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: correo..@gmail.com</Text>
                            </View>

                    

                            <View style={{ width: 300, height: 80, margin: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Datos Extra"
                                    placeholderTextColor="black"
                                    onChangeText={(text) => handleChange('datos_extra', text)}
                                />
                                <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}></Text>
                            </View>

                            <View style={{ width: 300, height: 80, margin: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Datos Extra"
                                    placeholderTextColor="black"
                                    onChangeText={(text) => handleChange('datos_extra', text)}
                                />
                                <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}></Text>
                            </View>

                            <View style={{ width: 300, height: 80, margin: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Datos Extra"
                                    placeholderTextColor="black"
                                    onChangeText={(text) => handleChange('datos_extra', text)}
                                />
                                <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}></Text>
                            </View>

                        {/* </View> */}
                    </ScrollView>

                    <TouchableOpacity
                        onPress={handleSubmit}
                    >
                        <View style={styles.button}>
                            <Text style={{ fontSize: 15, fontWeight: '600' }}>ENVIAR</Text>
                        </View>
                    </TouchableOpacity>

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
