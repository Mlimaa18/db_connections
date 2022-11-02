# db_connections
Ejemplos para conectar base de datos de SQL

Este ejemplo es tomado de https://www.microsoft.com/en-us/sql-server/developer-get-started/node/windows para conectarse a una Base de Datos desde nodeJS.
Se hace uso del modulo de Tedius para hacer la conexión: https://github.com/tediousjs/tedious.

Con el archivo connect.js verificamos que podamos conectarnos a la BD.
En el archivo crud.js se hace inserción, actualización borrado y consulta de datos usando sólamente Tedius.
Por último con el archivo orm.js se realiza la conexión mediante Sequelize.

Hay que cambiar en cada archivo las variables: 
<br>"server" y "host" es a la BD que nos estamos conectando.
<br>userName: usuario de SQL Server
<br>password: contraseña del usuario de SQL Server
