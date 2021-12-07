import {Dimensions,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#33a531',
  },

  cuadro: {
    margin: 10,
    marginBottom: 15,
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: {width: -1, height: 1},


  
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    overflow: "hidden",
    borderRadius: 9,
    borderColor: 'lightgrey',
    textShadowRadius: 5,
    
  },
  TituloGeneral: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginVertical: 10,
    marginLeft:10,
    textShadowColor: 'rgba(0.8, 0.8, 0.8, 0.8)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft:10,
    color: '#f99f31',
    textShadowColor: 'rgba(0.3,0.3, 0.3, 0.3)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
    textAlign: "center",

    
  },
  description: {
    fontSize: 17,
    lineHeight: 26,
    width: '90%',
    marginLeft:10,
    fontWeight: 'bold',
    color: '#f99f31',
    textShadowColor: 'rgba(1, 1, 1, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
    textAlign: "left",
    width: "100%",
  },
  requisitos: {
    fontSize: 17,
    lineHeight: 26,
    marginLeft:10,
    width: '90%',
    fontWeight: 'bold',
    color: '#f99f31',
    textShadowColor: 'rgba(1, 1, 1, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
    textAlign: "left",
    width: "100%",
  },
  cupos: {
    fontSize: 17,
    lineHeight: 26,
    width: '90%',
    marginLeft:10,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(1, 1, 1, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
    textAlign: "left",
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
