import {Dimensions,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#61CE70',
  },

  cuadro: {
    margin: 10,
    marginBottom: 15,
    flex : 1,
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: {width: -1, height: 1},
  
  },
  flatcuadro: {
    marginVertical: 5,
    marginHorizontal: 5,
    width: '97%',
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  titulo:{
    flex: 10,
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  image: {
    flex:1,
    overflow: "hidden",
    borderRadius: 6,
    flexDirection: 'row',
  },
  TituloGeneral: {
    textShadowColor:'white',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,
    //-webkit-text-stroke: 2px black,
    fontSize: 30,
    //fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 15,
    lineHeight: 26,
    color: 'black',
    textAlign: "left",
    width: "100%",
    textShadowColor:'white',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,
  },
  requisitos: {
    fontSize: 17,
    lineHeight: 26,
   
    //fontWeight: 'bold',
    color: 'black',
    textAlign: "left",
    textShadowColor:'white',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,
  },
  cupos: {
    fontSize: 17,
    lineHeight: 26,
    //fontWeight: 'bold',
    color: 'black',
    textAlign: "left",
    textShadowColor:'white',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:10,
  },
  searchButton: {
    flex:1,
    justifyContent: 'center',
    
  },
});
export default styles;
