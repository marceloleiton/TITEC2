backend/npm init -y

modulos de produccion
backend/npm i express mysql2 morgan cors swagger-jsdoc swagger-ui-express dotenv

modulos de desarrollo:
backend/npm i nodemon @babel/core @babel/cli @babel/preset-env @babel/node -D

######################################################################################################

docker run --name=mysql-bd -e MYSQL_ROOT_PASSWORD=root -p 3307:3306 -d mysql
docker exec -it mysql-bd mysql -u root -proot

UPDATE mysql.user SET Password=PASSWORD('root') WHERE User='root';


docker exec -i mysql-bd mysql -uroot -proot titec1bd < /Users/marceloleiton/Documents/CodigosProgramacion/proy04/backend/src/titec1bd.sql;

o

docker run --name=mysql-db -e MYSQL_ROOT_PASSWORD=titec1-LECOFQ -p 3307:3306 -d mysql

docker exec -it mysql-db mysql -uroot -proot


docker exec -i mysql-bd mysql -uroot -proot titec1bd < /Users/marceloleiton/Documents/CodigosProgramacion/proy04/backend/src/titec1bd.sql;

######################################################################################################

CREATE USER titec1@localhost IDENTIFIED BY 'titec1-LECOFQ';

grant all privileges on *.* to titec1@localhost with grant option;


INSERT INTO `solicitud_deportiva` VALUES ('1','13.231.412-2','1','2021-12-01','necesito una polera XL','ninguna observacion');