import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#61CE70',
        flexDirection: 'column',
    },
    cuadro: {

        marginTop: "10%",
        flex:20,
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 20,
        marginBottom: 20,
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
        borderColor: '#E4E8DF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#D9D9D9',

    },
    buttonEnviar: {
        backgroundColor: '#6EC1E4',
        width: 120,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
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