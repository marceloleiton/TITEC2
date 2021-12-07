import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: "10%",
    height: '80%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius:30,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#1259F5',
    flexDirection: 'column',
  },
  title: {
    fontSize: 25,

    color: 'black',
    width: '100%',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
  input:{
    width: "90%",
    fontSize: 20,
    color: "#fff",
    textAlign: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#1259F5',
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    
  },
  buttonEnviar:{
    width: '50%',
    
    marginHorizontal: '25%',
    borderRadius: 5,
    backgroundColor: '#1259F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText:{
    fontSize: 15,
    padding: 10,
    color: "#fff",
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;