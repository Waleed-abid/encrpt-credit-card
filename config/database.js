const Sequelize = require("sequelize");

module.exports = new Sequelize("devgate_assignment", "postgres", "waleedabid", {
  host: "localhost", //host
  dialect: "postgres", //database name, It is optional too

  pool: {
    max: 5, //it tells how many max number of connections will a database have, Both the saved i.e those who access it regularly, And new Connections
    min: 0, // it tell the minimum number of connections to the database
    acquire: 30000, //The maximum number of seconds a connection is allowed to gather data
    idle: 10000, // number of ms a connection can stay idle
  },
});
