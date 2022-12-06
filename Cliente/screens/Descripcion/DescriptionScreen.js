import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import styles from './Styles';
import Header from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DescriptionScreen = (
    { navigation, route }
) => {

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
    

    

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.containerDescription}>
                <ImageBackground source={imageURL} blurRadius={2} style={styles.cuadro}>
                    <View style={styles.cuadrotext}>
                        <Text style={styles.title}>
                            {route.params.nombre}
                        </Text>
                    </View>
                    <View style={styles.cuadrodescri}>
                        <Image style={{margin:10}} source={require('../../assets/dot.png')}/>
                        <Text style={styles.description}>
                            {route.params.descripción}
                        </Text>
                        <View style={{height:200, width:220, justifyContent:'flex-start', margin:10}}>
                            <Text style={styles.text}>Requisitos:{'\n'}  ∙ {route.params.requisitos}</Text>
                            <Text style={styles.text2}>Cupos: {route.params.cupos}</Text>
                            <Text style={styles.text}>Fecha: {route.params.fecha}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SolicitudScreen', { codigo_actividad: route.params.codigo_actividad, nombre: route.params.nombre})}
                        >
                            <View style={styles.button}>
                                <Image style={{margin:10}} source={require('../../assets/icono.png')}/>
                                <Text style={{fontSize: 15}}>INSCRIBIRSE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );

};

export default DescriptionScreen;
