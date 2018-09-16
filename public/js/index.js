//INDEX
$(function () {
    var userObj = JSON.parse(localStorage.getItem('userObj'))
    if (userObj) {
        $(".signUpJumbo").hide()
        if (userObj.isHelper) {
            $(".welcomeHelper").show()
        } else {
            $(".welcomeSeeker").show()
        }
    } else {
        $(".signUpJumbo").show()
        $(".welcomeHelper").hide()
        $(".welcomeSeeker").hide()
    }
    $(".seekButton").click(function () {
        if (!userObj) {
            alert("You need to sign in first!")
            $(".goHome")[0].click()
        }
        $.ajax("/seekHelp", {
            type: "POST",
            data: userObj
        }).then(function (response, status) {
            console.log(status)
            if (status === 'success') {
                window.location.href += "seekHelp/success"
            } else {
                alert(status)
            }
        });
    })
})
