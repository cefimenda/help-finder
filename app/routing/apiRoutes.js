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
        users.getItem('phone', req.body.phone).then(function (response) {
            for (var i in response) {
                if (response[i].name === req.body.name) {
                    res.send({ message: 'loginSuccess', user: response[i] })
                    return
                }
            }
            res.send("Can't find a user with this credentials, please try again or sign up from the home page.")
        })
    })
    app.get("/api/activeSeekers", function (req, res) {
        seekingRequests.getItem('request_id', 0, ">").then(function (response) {
            res.send(response)
        });
    });
    app.delete("/helpSomeone", function (req, res) {
        var assisting = req.body.assisting
        for (var i = 0; i < assisting.length; i++) {
            seekingRequests.deleteItem("request_id", assisting[i]).then(function (response) {
            })
        }
        res.send('success')
    })
    app.post("/api/getMatches", function (req, res) {
        var userObj = req.body
        console.log(userObj.scores)
        var userScores = JSON.parse(userObj.scores)
        console.log(userScores)
        var matchObj = {}
        //add joint table
        seekingRequests.join().then(function (response) {
            for (var i in response) {
                var match;
                var requestId = response[i].request_id
                var seekerId = response[i].seeker_id
                var seekerScores = JSON.parse(response[i].scores)
                var comparList = []
                for (var n in userScores) {
                    var thisSeekerScore = seekerScores[n]
                    if (thisSeekerScore=== 'Yes') {
                        thisSeekerScore = 5
                    } else if (thisSeekerScore === 'No') {
                        thisSeekerScore = 1
                    }
                    var thisHelperScore = Number(userScores[n])
                    thisSeekerScore = Number(thisSeekerScore)
                    var diff = ((thisHelperScore-thisSeekerScore) ** 2) ** (1 / 2)
                    comparList.push(5 - diff)
                }
                var sum = 0
                for (var j in comparList) {
                    sum += Number(comparList[j])
                }
                var avg = Math.round(sum / comparList.length)
                matchObj[requestId] = avg
            }
            console.log(matchObj)
            res.send({ matchObj })
        })

    })
};