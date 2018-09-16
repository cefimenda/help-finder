//SUCCESS MESSAGE
$(function () {
    var userObj = JSON.parse(localStorage.getItem('userObj'))
    var goingHome = setTimeout(function () {
        $(".goHome")[0].click()
    }, 1500)
    if (userObj) {
        var type = "{{this.type}}"
        if (type === "signup") {
            $(".thanksMessage").html('Thank you for signing up ' + userObj.name + " <br><br> <h6>Redirecting to home page...</h6>")
        } else if (type === "seekHelp") {
            clearTimeout(goingHome)
            $(".thanksMessage").html('Thank you for reaching out for help ' + userObj.name + " <br><br> We will match your request to the most appropriate helper and they will contact you on the phone number you provided very soon!")
        }
    } else {
        $(".thanksMessage").html('Please go to the home page to sign up. <br><br> <h6>Redirecting to home page...</h6>')
    }
})