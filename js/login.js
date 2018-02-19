$(document).ready(function () {
    $("#login").click(function () {
        alert("adfasdf");
        var userName = $("#userName").val();
        var password = $("#password").val();
        login(userName,password);
    });
});

function login(userName,password){

    user={
        "userName":userName,
        "password":password
    }

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/user/login",
        contentType: 'application/json',
        data: JSON.stringify(user),
        success: function (result) {
            window.localStorage.setItem("token",result);
          
            if(result){
                window.location.href="index.html";
             
            }
            else{
              //  console.log("false"+result)
            }
           
        },
        error: function (err) {
            console.log(err);

        }
    });
}