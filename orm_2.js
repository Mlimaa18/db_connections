import Sequelize, { STRING, DATE, BOOLEAN } from 'sequelize';
var userName = 'mlima';
var password = '123'; // update me
var hostName = '192.168.0.189';
var sampleDbName = 'SampleDB';

// Initialize Sequelize to connect to sample DB
var sampleDb = new Sequelize(sampleDbName, userName, password, {
    dialect: 'mssql',
    host: hostName,
    port: 1433, // Default port
    logging: false, // disable logging; default: console.log

    dialectOptions: {
        requestTimeout: 30000 // timeout = 30 seconds
    }
});

// Define the 'User' model
var User = sampleDb.define('user', {
    firstName: STRING,
    lastName: STRING
});

// Define the 'Task' model
var Task = sampleDb.define('task', {
    title: STRING,
    dueDate: DATE,
    isComplete: BOOLEAN
});

// Model a 1:Many relationship between User and Task
User.hasMany(Task);

console.log('**Node CRUD sample with Sequelize and MSSQL **');

// Create demo: Create a Task instance and save it to the database
User.findAll()
.then(function(task) {
    console.log('\nTask list:', task);
})