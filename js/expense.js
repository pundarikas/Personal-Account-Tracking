$(document).ready(function () {
    var token= window.localStorage.getItem("token");
    if(!token){
     window.location.href="login.html";
    }
    $("#btnExpenseSave").click(function () {
        var month = $( "#month option:selected" ).text();
        var purpose = $("#purpose").val();
        var amount = $("#amount").val();

        expense = {
            "month": month,
            "purpose": purpose,
            "amount": amount
        }

        console.log(expense);
       

        $.ajax({
            method: "POST",
            url: "http://localhost:8080/expense",
            contentType: 'application/json',
            data: JSON.stringify(expense),
            success: function (result) {
                console.log(result);
            },
            error: function (err) {
               console.log(err);
            }
        });
    });
});