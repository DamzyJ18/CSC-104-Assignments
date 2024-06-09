function convertToNaira() {
    return (dollar * 1430);
}

// Get input from the user
let dollar = parseFloat(prompt("Enter the amount in US Dollars:"));
// Validate input
if (isNaN(dollar)) {
    alert("please enter a valid numerical value")
} else {
    // convert to naira
    let naira = convertToNaira();

    // Display the result
    alert(dollar + " USD is equal to " + naira.toFixed(2) + "NGN");
}