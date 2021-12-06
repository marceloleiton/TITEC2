import {Dimensions,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 35,
    flex: 1,
    borderRadius: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 9,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "black",
    
  },
  TituloGeneral: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 25,
    textAlign: "center",

    
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 19,
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
    width: Dimensions.get('screen').width - 280,
    borderRadius: 20,
    //posible eror aqui
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom:10,
    marginLeft:250,
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
