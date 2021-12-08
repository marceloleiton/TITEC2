import React,{useState}  from 'react';
import {View,Images,Text,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const SolicitudesScreen = props => {

  
    
  const [solicitud, getSolicitud] = useState({
    rut_postulante: " ",
});

const handleChange = (name, value) => getSolicitud({...solicitud, [name]: value });

const handleSubmit = () => {
    console.log(solicitud)
    crearSolicitud(solicitud);
};

  return (
    <View style={styles.container}>
        <Text style={styles.title}>VERIFICA EN LÍNEA</Text>
        <Text style={styles.subtitle}>el estado de tu solicitud a talleres</Text>
        <View style={styles.cuadro}>
        <TextInput 
            style={styles.input} 
            placeholder="RUT" 
            placeholderTextColor="grey" 
            onChangeText={(text)=> handleChange('rut_postulante',text)}
            />
        <TouchableOpacity style={styles.buttonEnviar} onPress={handleSubmit}>
          <Text style={styles.inputText}>INGRESAR</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default SolicitudesScreen;