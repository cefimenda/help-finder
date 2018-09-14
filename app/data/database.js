const Table = require("mysql-simplified"); //This is a module that I created!

let dbConfig = {
    host: 'bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'gclab7ctsyq2e8ee',
    password: 'l6dxttuilqzfa05m',
    port: 3306,
    database: 'umixo19rma9oxe49'
}

let users = new Table('helpFinder', dbConfig);
users.connect();
let seekingRequests = new Table('seekingAssistance',dbConfig);
seekingRequests.connect();

module.exports = {
    users,
    seekingRequests
}