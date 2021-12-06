import {Dimensions,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: '100%',
    flex: 1,
    padding: 30,
    backgroundColor: '#1259F5',
    borderRadius: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  
  },
  image: {
    margin: 20,
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  TituloGeneral: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',

    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    textAlign: "center",

    
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.30)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 1,
    textAlign: "left",
    marginLeft:2,
    width: "100%",
  },
  cupos: {
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.30)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 1,
    textAlign: "left",
    marginLeft:2,
    width: "100%",
  },
  searchButton: {
    backgroundColor: 'white',
    height: 25,
    width: Dimensions.get('screen').width - 290,
    borderRadius: 20,
    //posible eror aqui
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    
    marginLeft:200,
    zIndex: 100,
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    //fin
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
