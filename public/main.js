//MAIN JS

$(function () {
    var userObj = JSON.parse(localStorage.getItem('userObj'))
    if (userObj) {
        $(".usernameDisplay").text('Welcome ' + userObj.name + '!')
        $(".loginLink").text("Logout")
        $(".loginLink").attr("href", "/")
    } else {
        $(".usernameDisplay").text('Welcome Guest!')
        $(".loginLink").text("Login")
    }
    $(".loginLink").click(function () {
        if ($(this).text = 'Logout') {
            localStorage.removeItem('userObj')
        }
    })
})







