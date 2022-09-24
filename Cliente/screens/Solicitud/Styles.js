import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#33a531',
        flexDirection: 'column',
    },
    cuadro: {

        marginTop: "10%",
        height: '80%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 20,
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        flexDirection: 'column',
    },
    title: {
        marginTop: 40,
        borderRadius: 5,
        fontSize: 25,
        color: '#fff',
        width: '100%',
        textAlign: 'center',

        textShadowColor: 'rgba(0.5, 0.5, 0.5, 0.5)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    subtitle: {
        marginTop: 10,
        borderRadius: 5,
        fontSize: 20,
        color: '#fff',
        width: '100%',
        textAlign: 'center',

        textShadowColor: 'rgba(0.5, 0.5, 0.5, 0.5)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    input: {

        width: "90%",
        fontSize: 20,
        backgroundColor: '#fff',
        marginTop: 10,
        marginHorizontal: 20,
        marginVertical: 30,
        borderBottomWidth: 3,
        borderColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,

    },
    buttonEnviar: {
        width: '90%',

        marginHorizontal: '5%',
        borderRadius: 20,
        backgroundColor: '#f99f31',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        fontSize: 15,
        padding: 10,
        color: "#fff",
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default styles;