
//LOGIN
$(function () {
    $("#submitButton").click(function (event) {
        event.preventDefault();
        var name = $("#survey [name=name]").val().trim();
        var phone = $("#survey [name=phone]").val().trim();
        var loginObj = { name, phone }
        console.log(loginObj)
        $.ajax("/login", {
            type: "POST",
            data: loginObj
        }).then(function (response, status) {
            if (status === 'success') {
                if (response.message === "loginSuccess") {
                    var userObj = response.user
                    localStorage.setItem("userObj", JSON.stringify(userObj))
                    $(".goHome")[0].click()
                } else {
                    alert(response)
                }
            } else {
                alert(status)
            }
        });
    });
});
