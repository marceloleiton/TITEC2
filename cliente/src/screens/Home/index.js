import React from 'react';
import {View,Image,Pressable,Text} from 'react-native';
import styles from './styles';
import EventoList from '../../components/EventoList';



const HomeScreen = props => {
    

  return (

    <View style={styles.container}>
    <View style={styles.cuadro}>
        <EventoList/>
    </View>
    </View>
  );
};

export default HomeScreen;
