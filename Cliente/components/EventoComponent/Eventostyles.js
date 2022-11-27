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
    fontSize: 28,
    fontWeight: 'bold',
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
  },
  requisitos: {
    fontSize: 17,
    lineHeight: 26,
   
    //fontWeight: 'bold',
    color: 'black',
    textAlign: "left",
  },
  cupos: {
    fontSize: 17,
    lineHeight: 26,
    //fontWeight: 'bold',
    color: 'black',
    textAlign: "left",
  },
  searchButton: {
    flex:1,
    justifyContent: 'center',
  },
});
export default styles;
