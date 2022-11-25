import React from 'react'
import { Image, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={{flex:2.5, backgroundColor: '#6EC1E4', flexDirection: "row", alignItems: "flex-end", padding: 10}}>
        
            <Image source={require('../assets/image10.png')} style={{width: 50, height: 50}}/>
            <Text style={{padding:10, 
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            textShadowColor: 'rgba(0, 0, 0, 0.90)',
           
            textShadowRadius: 0.5}}>Corporación Eventos Quintero</Text>
        </View>
        //#6EC1E4
    );
};

export default Header;