BACKEND:
Documentacion API

http://localhost:3000/docs/#/
######################################################################################################

backend/npm init -y

modulos de produccion
backend/npm i express mysql2 morgan cors swagger-jsdoc swagger-ui-express dotenv

modulos de desarrollo:
backend/npm i nodemon @babel/core @babel/cli @babel/preset-env @babel/node -D

######################################################################################################

docker run --name=mysql-bd -e MYSQL_ROOT_PASSWORD=root -p 3307:3306 -d mysql

docker exec -it mysql-bd mysql -u root -proot    //ejecutar mysql

UPDATE mysql.user SET Password=PASSWORD('root') WHERE User='root';
ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';

docker exec -i mysql-bd mysql -uroot -proot titec1bd < /Users/marceloleiton/Downloads/Titec/backend/src/titec1bd.sql;

o

docker run --name=mysql-db -e MYSQL_ROOT_PASSWORD=titec1-LECOFQ -p 3307:3306 -d mysql

docker exec -it mysql-db mysql -uroot -proot


docker exec -i mysql-bd mysql -uroot -proot titec1bd < /Users/marceloleiton/Downloads/Titec/backend/src/titec1bd.sql;

######################################################################################################

CREATE USER titec1@localhost IDENTIFIED BY 'titec1-LECOFQ';

grant all privileges on *.* to titec1@localhost with grant option;


INSERT INTO `solicitud_deportiva` VALUES ('1','13.231.412-2','1','2021-12-01','necesito una polera XL','ninguna observacion');

ALTER TABLE solicitud_deportiva ADD estado enum('aceptada','pendiente','rechazada') DEFAULT 'pendiente';



















FRONTEND:

#Esto no
npm install -g expo-cli
en la carpeta del proyecto: expo init

#Esto si

- cd frontend
- expo start 
- npm start
- yarn start
- yarn android

instalar: 

npm install @react-navigation/native react-native-vector-icons @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/native

expo install react-native-screens react-native-safe-area-context

obs: npm i react-router-dom react-native-navigation
