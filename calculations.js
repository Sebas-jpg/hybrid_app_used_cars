

// document.getElementById("calculate-button").addEventListener('click', function(e){
function calculate()
{
    var amount = document.getElementById("amount").value;

    var months = document.getElementById("months").value;
    console.log(months);
    var interest;

// check if input (if any) is an integer
// if (!Number.isInteger(months))
// {
//     ons.notification.alert("For the number of months please provide an integer in range of 1 to 36");
// }

// first check if amount is in between 100-20000
if (!(amount >= 100) || !(amount <= 20000))
{
    ons.notification.alert("For the amount you need to enter an integer from 100 to 20000");
    return;
}
// then check if months are in between 1-36
else if (months < 1 && months > 36)
{
    ons.notification.alert("Sorry, we only offer loans for 1 to 36 months.");
    return;
}
// if passed go and see what interest should be there for the loan
// if more than 1 month and equal or less than 3
else if (months <= 3 && months >= 1 )
{
    console.log("0.05");
    interest = 0.05;
}
// if more than 3 months and equal or less than 6 months
else if (months <= 6 && months > 3)
{
    console.log("0.1");
    interest = 0.1;

}
// if more than 6 months and equal or less than 12 months
else if (months <= 12 && months > 6)
{
    console.log("0.2");
    interest = 0.2;

}
// if more than 12 months and equal or less than 24 months
else if (months <= 24 && months > 12)
{
    console.log("0.25");
    interest = 0.25;

}
else if (months <= 36 && months > 24)
{
    console.log("0.3");
    interest = 0.3;

}
else{
    ons.notification.alert("You need to input integers in both fields.");
    return;
}

try{
return interest;
}
finally {
    if (document.getElementById("switch-roundup").checked == true)
    {
            var output;
            output = +amount +(interest*amount);
            ons.notification.toast("Loan of " + amount + "$ for " + months + " months will have interest of " + interest*100 + "%. "
            + "In total you will have to pay back " + Math.round(output) + "$. (rounded-up)", { timeout: 5000, animation: 'lift' });
    }
else if (document.getElementById("switch-roundup").checked == false)
{
            var output;
            output = +amount +(interest*amount);
            ons.notification.toast("Loan of " + amount + "$ for " + months + " months will have interest of " + interest*100 + "%. "
            + "In total you will have to pay back " + output + "$.", { timeout: 5000, animation: 'lift' });
}
};

}

