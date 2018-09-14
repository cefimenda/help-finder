$(function(){
    $(".signUpButton").on('click',()=>{
        $.ajax("/signup/"+$(this).attr("data-target"),{
            type:"GET"
        })
    })
})