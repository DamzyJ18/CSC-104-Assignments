function calculateCompoundInterest() {
    var principal = parseFloat(prompt("Enter the principal amount:"));
    var rate = parseFloat(prompt("Enter the annual interest rate (in %):")) / 100;
    var time = parseInt(prompt("Enter the time in years"));
    var compoundFrequency = parseInt(prompt("Enter the number of times interest is compounded per year:"));

    var amount = principal * Math.pow((1 + rate/compoundFrequency),(compoundFrequency*time));
    var interest = amount - principal;

    alert("The compound interest is: " + interest.toFixed(2));
    alert("The total amount is: " + amount.toFixed(2));
}

calculateCompoundInterest()