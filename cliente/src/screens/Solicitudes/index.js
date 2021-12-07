import React from 'react';
import {View,Images,Text,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const SolicitudesScreen = props => {
  
  return (
    <View style={styles.container}>
        
        <Text style={styles.title}>VERIFICA EN LÍNEA</Text>
        <Text style={styles.subtitle}>el estado de tu solicitud a talleres</Text>
        <View style={styles.cuadro}>
        <TextInput style={styles.input} placeholder="RUT" placeholderTextColor="grey"></TextInput>
        <TouchableOpacity style={styles.buttonEnviar} disabled>
          <Text style={styles.inputText}>INGRESAR</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default SolicitudesScreen;