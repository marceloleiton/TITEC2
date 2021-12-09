import React from 'react';
import {Text, ImageBackground,TouchableOpacity,Pressable} from 'react-native';
import styles from './Eventostyles';
import {useNavigation} from '@react-navigation/native';
const Solicitud = (props) => {
  const navigation = useNavigation();
  const Solicitud = props.solicitud;
  
  return (

      <Text style={styles.description} >{Solicitud.estado}</Text>
 
  );
};

export default Solicitud;