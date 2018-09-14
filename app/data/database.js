const Table = require("mysql-simplified"); //This is a module that I created!
require('dotenv').config()

let dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
}
console.log(dbConfig)

let users = new Table('helpFinder', dbConfig);
users.connect();
let seekingRequests = new Table('seekingAssistance',dbConfig);
seekingRequests.connect();

module.exports = {
    users,
    seekingRequests
}