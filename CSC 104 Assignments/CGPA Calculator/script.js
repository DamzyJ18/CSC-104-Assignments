function calculateCGPA() {
    var totalCredits = 0;
    var totalGradePoints = 0;
    var numCourses = parseInt(prompt("Enter the number of courses:"));

    for (var i = 0; i < numCourses; i++) {
        var courseCredits = parseFloat(prompt("Enter credits for the course " + (i+1) + ":"));
        var courseGrade = prompt("Enter grade for course " + (i+1) + ":");

        var gradePoints = 0; 
        switch (courseGrade) {
            case "A": gradePoints = 5.0;
            break;
            case "B": gradePoints = 4.0;
            break;
            case "C": gradePoints = 3.0;
            break;
            case "D": gradePoints = 2.0;
            break;
            default: alert("Invalid grade. Please enter A, B, C, or D.");
            return;
        }

        totalCredits += parseFloat(courseCredits); // Convert to number
        totalGradePoints += parseFloat(courseCredits) * gradePoints; // Convert to number
    }

    var cgpa = totalGradePoints / totalCredits;
    alert("Your CGPA is: " + cgpa.toFixed(2));
}

calculateCGPA()