import React from 'react';
import {View,Text,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const SolicitudesScreen = props => {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Estado solicitud</Text>
        <TextInput style={styles.input} placeholder="ingrese su RUT" placeholderTextColor="#1259F5"></TextInput>
        <TouchableOpacity style={styles.buttonEnviar} disabled>
          <Text style={styles.inputText}>Enviar</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SolicitudesScreen;