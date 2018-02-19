$(document).ready(function () {
    var token= window.localStorage.getItem("token");
    if(!token){
     window.location.href="login.html";
    }
    $("#btnIncomeSave").click(function () {
        
        var month = $( "#month option:selected" ).text();
        var source = $("#source").val();
        var amount = $("#amount").val();
       
        income = {
            "month": month,
            "source": source,
            "amount": amount
        }

        

        $.ajax({
            method: "POST",
            url: "http://localhost:8080/income",
            contentType: 'application/json',
            data: JSON.stringify(income),
            success: function (result) {
                console.log("saved "+result)
            },
            error: function (err) {
               console.log(err);
            }
        });
    });
});