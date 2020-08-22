const Sequelize = require('sequelize'),
      connection = new Sequelize('TODOAPP','root','roottoor',{
          host:'localhost',
          dialect:'mysql'
      });

connection.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = connection;