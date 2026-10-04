function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90):
            grade = "A";
            break;

        case (score >= 80):
            grade = "B";
            break;

        case (score >= 70):
            grade = "C";
            break;

        case (score >= 60):
            grade = "D";
            break;

        default:
            grade = "F";
    }

    return grade;
}

console.log(getGrade(95)); 
console.log(getGrade(82));
console.log(getGrade(74));
console.log(getGrade(65));
console.log(getGrade(50));