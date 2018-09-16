//SURVEY
$(function () {
    $("#submitButton").click(function (event) {
        event.preventDefault();
        var userType = '{{this.type}}';
        console.log(userType)
        if (userType === "Helper") { isHelper = 1 } else { isHelper = 0 }
        var name = $("#survey [name=name]").val().trim();
        var photo = $("#survey [name=photoLink]").val().trim();
        var phone = $("#survey [name=phone]").val().trim();
        var scores = [];
        for (var i = 0; i < $(".answers").length; i++) {
            scores.push($($(".answers")[i]).find(":selected").text());
        };
        var userObj = { name, photo, phone, scores: JSON.stringify(scores), isHelper }
        localStorage.setItem("userObj", JSON.stringify(userObj))
        $.ajax("/signup/" + userType, {
            type: "POST",
            data: userObj
        }).then(function (response, status) {
            if (status === 'success') {
                userObj.id = response.insertId
                localStorage.setItem("userObj", JSON.stringify(userObj))
                window.location.href += "/success"
            } else {
                alert(status)
            }
        });
    });
});