module.exports = function(app) {
    app.get("/helpSomeone", function (req, res) {
        res.render("helpList",{})
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
            res.render("survey", { user: user, survey: helperSurvey, type: 'Helper' })
        }
        else if (type === "seeker") {
            res.render("survey", { user: user, survey: seekerSurvey, type: 'Seeker' })
        } else {
            res.send("404, Page not found.")
        }
    })
    app.get("*", function (req, res) {
        res.render("index", {});
    });
}