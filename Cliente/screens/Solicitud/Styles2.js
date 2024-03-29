import { StyleSheet, Dimensions, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#61CE70',
        height: '100%'
    },
    containerDescription: {
        backgroundColor: '#61CE70',
        flex:20,
    },
    cuadro: {
        backgroundColor: '#fff',
        flex: 1,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.90)',
        textShadowOffset: { width: -1, height: 1 },
        overflow: "hidden",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cuadrotext: {
        width: '100%',
        height: '10%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        textShadowColor:'white',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:10,
    },
    cuadrodescri: {
        height: '85%',
        width: 320,
        backgroundColor: '#fff',
        shadowColor: "#000",
        borderRadius: 6,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        flexDirection: 'column',
    },
    description: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        margin: 10,
    },
    text: {
        margin: 2,
        fontSize: 18,
        color: '#8F938A',
    },
    text2: {
        marginTop: 50,
        fontSize: 18,
        color: '#8F938A',
    },
    button: {
        marginTop: 5,
        backgroundColor: '#6EC1E4',
        width: 110,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },

    input: {
        flex:2,
        fontSize: 20,
        backgroundColor: '#D9D9D9',
        padding: 10,
    },

    input2: {
        flex:2,
        fontSize: 15,
        backgroundColor: '#D9D9D9',
        padding: 10,
    },
});

export default styles;