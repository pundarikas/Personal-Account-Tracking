$(document).ready(function () {

   var token= window.localStorage.getItem("token");
   if(!token){
    window.location.href="login.html";
   }
   else{
    var month = $("#month option:selected").text();


    var incomeTotal = loadIncome(month);
    var expenseTotal = loadExpense(month);

    showSaving(month);
    $("select").change(function () {
        var month = $("#month option:selected").text();
        loadIncome(month);
        loadExpense(month);
        showSaving(month);
    });
}
});



function loadIncome(month) {
    var income;
    var incomeTotal = 0;
    $('#incomeList').empty();
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/income/" + month,
        contentType: 'application/json',

        success: function (result) {

            for (var i in result) {

                income = {
                    "month": result[i].month,
                    "source": result[i].source,
                    "amount": result[i].amount

                }

                $('#incomeList').append("<tr class='bg-success'><td>" + income.source + "</td><td>" + income.amount + "</td></tr>")
                incomeTotal += income.amount;

            }
            $('#incomeList').append("<tr class='bg-info'><td><b>TOTAL</b></td><td><b>" + incomeTotal + "</b></td></tr>")
            return incomeTotal;
        },
        error: function (err) {
            console.log(err);

        }
    });
}

function loadExpense(month) {

    var expense;

    var expenseTotal = 0;
    $('#expenseList').empty();
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/expense/" + month,
        contentType: 'application/json',

        success: function (result) {

            for (var i in result) {

                var expense = {
                    "month": result[i].month,
                    "purpose": result[i].purpose,
                    "amount": result[i].amount

                }

                $('#expenseList').append("<tr class='bg-danger'><td>" + expense.purpose + "</td><td>" + expense.amount + "</td></tr>")
                expenseTotal += expense.amount;

            }
            $('#expenseList').append("<tr class='bg-danger'><td><b>TOTAL<b></td><td><b>" + expenseTotal + "</b></td></tr>")
            return expenseTotal;
        },
        error: function (err) {
            console.log(err);

        }
    });
}

function showSaving(month) {
    $('#saving').empty();
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/saving/" + month,
        contentType: 'application/json',
        success: function (result) {
            alert(result);
            $('#saving').append(result);
        },
        error: function (err) {
            console.log(err);

        }
    });
}

