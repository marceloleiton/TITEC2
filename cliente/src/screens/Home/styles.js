import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 10,

    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 25,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 150,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  searchButton: {
    backgroundColor: '#fff',
    height: 55,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    marginLeft: 10,
    //posible eror aqui
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 25,
    zIndex: 100,
    //fin
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
