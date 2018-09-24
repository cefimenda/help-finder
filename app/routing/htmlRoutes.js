let users = require("../data/database").users
let seekingRequests = require("../data/database").seekingRequests

let seekerSurvey = require("../data/surveys").seeker
let helperSurvey = require("../data/surveys").helper

module.exports = function (app) {
    app.get("/helpSomeone", function (req, res) {
        seekingRequests.join().then(function (response) {
            response.stringified = JSON.stringify(response)
            res.render("helpList", {response})
        })
    })
    app.get("/login", function (req, res) {
        res.render("loginPage", {})
    })
    app.get("/seekHelp/success", function (req, res) {
        res.render("successMessage", { type: 'seekHelp' })
    })
    app.get("/signup/:userType/success", function (req, res) {
        res.render("successMessage", { type: 'signup' })
    })
    app.get("/signup/:userType", function (req, res) {
        var type = req.params.userType
        if (type === "helper") {
            res.render("survey", { survey: helperSurvey, type: 'Helper' })
        }
        else if (type === "seeker") {
            res.render("survey", {survey: seekerSurvey, type: 'Seeker' })
        } else {
            res.send("404, Page not found.")
        }
    })
    app.get("*", function (req, res) {
        res.render("index", {});
    });
}