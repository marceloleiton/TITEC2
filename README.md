
<a name="readme-top"></a>
[![LinkedIn][linkedin-shield]][linkedin-url]

### Construido con

Contruido con las siguientes tecnologías


* [React-Native][ReactNative-url]

<!-- GETTING STARTED -->
## Comenzando

A continuación se detallan las instrucciones para poder ejecutar el proyecto.

Se utilizó lo siguiente como dependencias

BACKEND (npm start)

En su compitador debe tener npm install --global expo-cli

Para crear package.json: npm init -y


Modulos producción: npm i express mysql2 morgan cors swagger-jsdoc swagger-ui-express dotenv 

Modulos desarrollo: npm i nodemon @babel/cli @babel/preset-env @babel/node -D
npm i --save-dev @babel/plugin-transform-runtime


CLIENTE (npm start)

npm i @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-vector-icons @react-navigation/bottom-tabs

npx expo install react-native-screens react-native-safe-area-context


### Prerequisitos

Debe tener instalado expo.
* expo-cli
  ```sh
  npm install --global expo-cli
  ```
Si utiliza simulador android debe seguir los pasos de * [![React-Native][React-Native]][ReactNative-url]

### Instalación

1. Clonar el repositorio
   ```sh
   git clone 
   ```
2. Crear archivo .env en Backend
   ```sh
      DB_HOST= localhost

      DB_USER= Ingresar Nombre

      DB_PASSWORD= Ingresar Contraseña

      DB_DATABASE= titec1bd

      DB_PORT= 3306

   ```
3. En la carpeta Backend  
   ```sh
   npm i
   ```
4. En la carpeta Cliente  
   ```sh
   npm i
   ```

5. En la carpeta Cliente archivo api.js
   ```sh
   Debe ingresar su ip local sino tendrá problemas de red
   ```

<!-- CONTACT -->
## Contacto

Marcelo Leiton - [Linkedin](https://www.linkedin.com/in/marcelo-leiton/) - marceloleiton1997@gmail.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/marcelo-leiton/
[product-screenshot]: images/screenshot.png
[ReactNative-url]: https://reactnative.dev/docs/environment-setup
