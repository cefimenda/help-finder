let users = require("../data/database").users
let seekingRequests = require("../data/database").seekingRequests

let seekerSurvey = require("../data/surveys").seeker
let helperSurvey = require("../data/surveys").helper

module.exports = function (app) {
    app.post("/signup/:userType", function (req, res) {
        users.append(req.body).then(function (response) {
            res.json(response)
        })
    })
    app.post("/seekHelp", function (req, res) {
        var request = {
            seeker_name: req.body.name,
            seeker_id: req.body.id
        }
        seekingRequests.append(request).then(function (response) {
            res.send("response")
        })
    })
    app.post("/login", function (req, res) {
        console.log(req.body)
        users.getItem('phone', req.body.phone).then(function (response) {
            for (var i in response) {
                if (response[0].name === req.body.name) {
                    res.send({ message: 'loginSuccess', user: response[i] })
                    return
                }
            }
            res.send("Can't find a user with this credentials, please try again or sign up from the home page.")
        })
    })
    app.get("/api/activeSeekers",function(req,res){
        seekingRequests.getItem('request_id',0,">").then(function(response){
            res.send(response)
        });
    });

};