import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#33a531',
        height: '100%'
    },
    cuadro: {
        flex: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.90)',
        textShadowOffset: { width: -1, height: 1 },
    },
    title: {
        fontSize: 25,
        backgroundColor: 'gray',
        fontWeight: 'bold',
        height: '6%',
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    searchButton: {
        backgroundColor: 'white',
        height: 25,
        width: Dimensions.get('screen').width - 280,
        borderRadius: 20,
        //posible eror aqui
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 10,
        marginLeft: 250,
        zIndex: 100,
        textShadowColor: 'rgba(0, 0, 0, 0.90)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
        //fin
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;