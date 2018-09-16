//HELPLIST
$(function () {
    var userObj = JSON.parse(localStorage.getItem('userObj'))
    if (!userObj || userObj.isHelper === 0) {
        $(".goHome")[0].click()
    }
    getMatches()
    $(".checkoutButton").click(function () {
        var assisting = []
        for (var i = 0; i < $(":checked").length; i++) {
            var id = $($(":checked")[i]).parent().parent().parent().parent().attr("request-id")
            assisting.push(id)
        }
        console.log(assisting)
        $.ajax("/helpSomeone", {
            type: "DELETE",
            data: { assisting }
        }).then(function (response, status) {
            location.reload()
        })
    });
})
function getMatches() {
    $.ajax("/api/getMatches", {
        type: "POST",
        data: JSON.parse(localStorage.getItem('userObj'))
    }).then(function (response, status) {
        var matchObj = response.matchObj
        var phoneObj = response.phoneObj
        for (var i = 0; i < $(".card").length; i++) {
            var card = $($(".card")[i])
            var thisId = card.attr('request-id')
            console.log(matchObj[thisId])
            if (matchObj[thisId] < 3) {
                card.remove()
            } else {
                var matchBadge = card.children().first().children().first().next().children().first()[0]
                matchBadge.innerText += " " + matchObj[thisId] + "/5"
            }
        }
        console.log($(".card").length === 0)
        if ($(".card").length === 0) {
            $(".yesMatch").hide()
            $(".noMatch").show()
        } else {
            $(".yesMatch").show()
            $(".noMatch").hide()
        }
    })
}