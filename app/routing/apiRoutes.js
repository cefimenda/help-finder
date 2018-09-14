let users = require("../data/database").users
let seekingRequests = require("../data/database").seekingRequests

let seekerSurvey = require("../data/surveys").seeker
let helperSurvey = require("../data/surveys").helper

module.exports = function (app) {

    app.get("/" || "#", function (req, res) {
        res.render("index", {});
    });
    app.get("/signup/:userType", function (req, res) {
        var type = req.params.userType
        if (type === "helper") {
            res.render("survey", { user: user, survey: helperSurvey, type: 'Helper' })
        }
        else if (type === "seeker") {
            res.render("survey", { user: user, survey: seekerSurvey, type: 'Seeker' })
        } else {
            res.send("404, Page not found.")
        }
    })
    app.post("/signup/:userType", function (req, res) {
        users.append(req.body).then(function (response) {
            res.json(response)
        })
    })
    app.get("/signup/:userType/success", function (req, res) {
        res.render("successMessage", { type: 'signup' })
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
    app.get("/seekHelp/success", function (req, res) {
        res.render("successMessage", { type: 'seekHelp' })
    })
    app.get("/login", function (req, res) {
        res.render("loginPage", {})
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
    app.get("/helpSomeone", function (req, res) {
    })

};