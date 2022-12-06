import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Button, Picker } from 'react-native';
import styles from './Styles2';
import { crearSolicitud, crearInscripcion } from '../../api';
import Header from '../../components/Header';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment/moment';
import { getCategoria } from '../../api';

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

    // console.log(date);
    // let dateFormat = moment(date).format('YYYY-MM-DD');
    // console.log(dateFormat);

    const showDatepicker = () => {
        showMode('date');
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
        crearInscripcion(inscripcion);
        navigation.navigate('EventosScreen');
    };

    //elegir sexo
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Masculino', value: 'M' },
        { label: 'Femenino', value: 'F' },
    ]);

    //elegir talla
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: 'S', value: 'S' },
        { label: 'M', value: 'M' },
        { label: 'L', value: 'L' },
        { label: 'XL', value: 'XL' },
        { label: 'XXL', value: 'XXL' },
    ]);

    const [solicitud, setSolicitud] = useState({
        rut: " ",
        nombres: " ",
        apellidos: " ",
        telefono_personal: " ",
        telefono_contacto: " ",
        correo: " ",
        fecha_nacimiento: " ",
        direccion: " ",
        sexo: " ",
        talla: " ",
    });

    let fechaActual = new Date();
    fechaActual = moment(fechaActual).format('YYYY-MM-DD');

    let inscripcion = {
        rut: solicitud.rut,
        id_evento: route.params.codigo_actividad,
        fecha: fechaActual,
        categoria: route.params.categoria,

    }
    console.log(inscripcion)
    console.log(solicitud.rut, route.params.codigo_actividad, new Date(),)

    // const [inscripcion] = useState({
    //     rut: solicitud.rut,
    //     id_evento: route.params.codigo_actividad,
    //     fecha: new Date(),
    //     categoria: route.params.categoria,
    // });

    let dateString = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate())
    solicitud.fecha_nacimiento = dateString;
    //console.log(solicitud.fecha_nacimiento);


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
                                onChangeText={(text) => handleChange('rut', text)}
                            />
                            <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: 12.345.678-9</Text>
                        </View>

                        <View style={{ width: 300, height: 80, margin: 10 }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Nombres"
                                placeholderTextColor="black"
                                onChangeText={(text) => handleChange('nombres', text)}
                            />
                            <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: Juan Rodrigo</Text>
                        </View>

                        <View style={{ width: 300, height: 80, margin: 10 }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Apellidos"
                                placeholderTextColor="black"
                                onChangeText={(text) => handleChange('apellidos', text)}
                            />
                            <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: Olivares Baeza</Text>
                        </View>

                        <View style={{ width: 300, height: 80, margin: 10 }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Telefono Personal"
                                placeholderTextColor="black"
                                onChangeText={(text) => handleChange('telefono_personal', text)}
                            />
                            <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: 978456732</Text>
                        </View>

                        <View style={{ width: 300, height: 80, margin: 10 }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Telefono Contacto"
                                placeholderTextColor="black"
                                onChangeText={(text) => handleChange('telefono_contacto', text)}
                            />
                            <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: 978456732</Text>
                        </View>

                        <View style={{ width: 300, height: 80, margin: 10 }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Correo"
                                placeholderTextColor="black"
                                onChangeText={(text) => handleChange('correo', text)}
                            />
                            <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: correo..@gmail.com</Text>
                        </View>



                        <View style={{ width: 300, height: 80, margin: 10 }}>
                            <Text
                                style={styles.input2}
                            >
                                Fecha de nacimiento: {dateString}
                            </Text>
                            <Button
                                onPress={showDatepicker}
                                title="Seleccionar Fecha"
                                color="#6EC1E4"

                            />

                        </View>

                        <View style={{ width: 300, height: 80, margin: 10 }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Dirección"
                                placeholderTextColor="black"
                                onChangeText={(text) => handleChange('direccion', text)}
                            />
                            <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}>Ejemplo: Carrelo 352</Text>
                        </View>

                        <View style={{ width: 300, height: 50, margin: 10 }}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder="Sexo"
                                placeholderStyle={{ color: 'black' }}
                                //style={{ backgroundColor: '#C4C3C2' }}
                                onChangeValue={(text) => handleChange('sexo', text)}
                                zIndex={3000}
                                zIndexInverse={1000}

                            />
                            {/* <TextInput
                                    style={styles.input}
                                    placeholder="Sexo"
                                    placeholderTextColor="black"
                                    onChangeText={(text) => handleChange('datos_extra', text)}
                                />
                                <Text style={{ flex: 1, marginHorizontal: 10, color: '#C4C3C2' }}></Text> */}
                        </View>

                        <View style={{ width: 300, height: 50, margin: 10 }}>
                            <DropDownPicker
                                open={open2}
                                value={value2}
                                items={items2}
                                setOpen={setOpen2}
                                setValue={setValue2}
                                setItems={setItems2}
                                placeholder="Talla"
                                placeholderStyle={{ color: 'black' }}
                                //style={{ backgroundColor: '#C4C3C2', padding: 10 }}
                                onChangeValue={(text) => handleChange('talla', text)}
                                zIndex={1000}
                                zIndexInverse={3000}
                            />
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
        </View>
    )
}

export default SolicitudScreen;
