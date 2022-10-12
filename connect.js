import { Connection } from 'tedious';
import { Request } from 'tedious';
import { TYPES } from 'tedious';

// Create connection to database
var config = {
  server: 'localhost',
  authentication: {
      type: 'default',
      options: {
          userName: 'mlima', // update me
          password: '123' // update me
      }
  },
  options: {
      database: 'SampleDB',
      "trustServerCertificate": true
  }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});

connection.connect();