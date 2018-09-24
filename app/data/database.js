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

let users = new Table('helpFinder', process.env.JAWSDB_URL || dbConfig);
users.connect();
let seekingRequests = new Table('seekingAssistance',  process.env.JAWSDB_URL || dbConfig);
seekingRequests.connect();

seekingRequests.join = function () {
    return new Promise((resolve, reject) => {
        var query = "SELECT seekingAssistance.request_id,seekingAssistance.`seeker_name`,seekingAssistance.`seeker_id`,helpFinder.phone,helpFinder.scores,helpFinder.photo FROM seekingAssistance LEFT JOIN helpFinder ON seekingAssistance.seeker_id =helpFinder.id"
        this.connection.query(query, function (err, res) {
            if (err) {
                console.log(err)
                reject(err)
            }
            resolve(res)
        });
    })
}


module.exports = {
    users,
    seekingRequests
}